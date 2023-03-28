const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

const databaseUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    if (err.code === 11000) {
      res.json({ status: "error", error: "Duplicate email" });
    } else {
      res.json({ status: "error", error: "Something went wrong" });
    }
    console.log(err);
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({
      status: "ok",
      user: token,
    });
  } else {
    return res.json({
      status: "error",
      user: false,
    });
  }
  res.json({ status: "ok" });
});

app.get("/api/update", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({
      status: "ok",
      name: user.name,
      email: user.email,
      password: user.password,
      dayRate: user.dayRate,
      nightRate: user.nightRate,
      sensorsGroup: user.sensorsGroup,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      error: "invalid token",
    });
  }
});

app.post("/api/update", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    await User.updateOne(
      { email: email },
      {
        $set: {
          dayRate: req.body.dayRate,
          nightRate: req.body.nightRate,
          sensorsGroup: req.body.locations,
        },
      }
    );
    console.log("User information updated successfully.");
    console.log(req.body);
    return res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      error: "invalid token",
    });
  }
});

app.get("/api/data", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({
      status: "ok",
      locations: user.sensorsGroup,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      error: "invalid token",
    });
  }
});

app.get("/api/rate", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await User.findOne({ email: email });

    return res.json({
      status: "ok",
      dayRate: user.dayRate,
      nightRate: user.nightRate,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      error: "invalid token",
    });
  }
});

module.exports = app;
