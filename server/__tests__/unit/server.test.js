const request = require("supertest");
const app = require("../../src/app");
const mongoose = require("mongoose");
const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

describe("GET /hello", () => {
  it('should return "hello world"', async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
    expect(response.text).toBe("hello world");
  });
});

describe("POST /api/register", () => {
  beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.TEST_DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  it("should create a new user if email is unique", async () => {
    const response = await request(app).post("/api/register").send({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    const user = await User.findOne({ email: "johndoe@example.com" });
    expect(user).toBeDefined();
    expect(user.name).toBe("John Doe");
    expect(user.password).not.toBe("password123");
  });

  it("should return an error if email is not unique", async () => {
    const user = new User({
      name: "Jane Doe",
      email: "janedoe@example.com",
      password: "password123",
    });
    await user.save();

    const response = await request(app).post("/api/register").send({
      name: "John Doe",
      email: "janedoe@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("error");
    expect(response.body.error).toBe("Duplicate email");
  });
});

describe("POST /api/login", () => {
  let user;

  beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    user = new User({
      name: "John Doe",
      email: "johndoe@example.com",
      password: await bcrypt.hash("password123", 10),
    });
    await user.save();
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  it("should return a token if email and password are valid", async () => {
    const response = await request(app).post("/api/login").send({
      email: "johndoe@example.com",
      password: "password123",
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.user).toBeDefined();
    const decoded = jwt.verify(response.body.user, "secret123");
    expect(decoded.email).toBe("johndoe@example.com");
  });

  it("should return an error if email or password are invalid", async () => {
    const response = await request(app).post("/api/login").send(
      {
        email: "johndoe@example.com",
        password: "wrongpassword",
      },
      10000
    );

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("error");
    expect(response.body.user).toBe(false);
  });
});

describe("GET /api/update", () => {
  let token;
  let user;

  beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    user = new User({
      name: "John Doe",
      email: "johndoe@example.com",
      password: await bcrypt.hash("password123", 10),
      dayRate: 0.15,
      nightRate: 0.1,
      sensorsGroup: {
        location: [],
      },
    });
    await user.save();
    token = jwt.sign({ email: user.email }, "secret123");
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  it("should return user information if token is valid", async () => {
    const response = await request(app)
      .get("/api/update")
      .set("x-access-token", token);
    console.log(response.body);
    console.log(user);
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.name).toBe(user.name);
    expect(response.body.email).toBe(user.email);
    expect(response.body.password).toBe(user.password);
    expect(response.body.dayRate).toBe(user.dayRate);
    expect(response.body.nightRate).toBe(user.nightRate);
    expect(response.body.sensorsGroup).toEqual(user.sensorsGroup);
  });

  it("should return an error if token is invalid", async () => {
    const response = await request(app)
      .get("/api/update")
      .set("x-access-token", "invalidtoken");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("error");
    expect(response.body.error).toBe("invalid token");
  });
});

describe("POST /api/update", () => {
  let token;
  let user;

  beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    user = new User({
      name: "John Doe",
      email: "johndoe@example.com",
      password: await bcrypt.hash("password123", 10),
      dayRate: 0.15,
      nightRate: 0.1,
      sensorsGroup: ["Living Room", "Kitchen"],
    });
    await user.save();
    token = jwt.sign({ email: user.email }, "secret123");
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  it("should update user information if token is valid", async () => {
    const response = await request(app)
      .post("/api/update")
      .set("x-access-token", token)
      .send({
        dayRate: 0.2,
        nightRate: 0.15,
        locations: ["Living Room", "Kitchen", "Bedroom"],
      });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    const updatedUser = await User.findOne({ email: user.email });
    console.log(updatedUser);
    expect(updatedUser.dayRate).toBe(0.2);
    expect(updatedUser.nightRate).toBe(0.15);
    expect(JSON.stringify(updatedUser.sensorsGroup)).toBe(
      JSON.stringify(["Living Room", "Kitchen", "Bedroom"])
    );
  });

  it("should return an error if token is invalid", async () => {
    const response = await request(app)
      .post("/api/update")
      .set("x-access-token", "invalidtoken")
      .send({
        dayRate: 0.2,
        nightRate: 0.15,
        locations: ["Living Room", "Kitchen", "Bedroom"],
      });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("error");
    expect(response.body.error).toBe("invalid token");
  });
});

describe("GET /api/data", () => {
  let token;
  let user;

  beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    user = new User({
      name: "John Doe",
      email: "johndoe@example.com",
      password: await bcrypt.hash("password123", 10),
      sensorsGroup: {
        locations: ["Living Room", "Kitchen"],
      },
    });
    await user.save();
    token = jwt.sign({ email: user.email }, "secret123");
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  it("should return user sensor locations if token is valid", async () => {
    const response = await request(app)
      .get("/api/data")
      .set("x-access-token", token);

    expect(response.status).toBe(200);
    console.log(response.body);
    console.log("user.sensorsGroup:", user);
    expect(response.body.status).toBe("ok");
    expect(response.body.locations).toEqual(user.sensorsGroup);
  });

  it("should return an error if token is invalid", async () => {
    const response = await request(app)
      .get("/api/data")
      .set("x-access-token", "invalidtoken");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("error");
    expect(response.body.error).toBe("invalid token");
  });
});

describe("GET /api/rate", () => {
  let token;
  let user;

  beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    user = new User({
      name: "John Doe",
      email: "johndoe@example.com",
      password: await bcrypt.hash("password123", 10),
      dayRate: 0.15,
      nightRate: 0.1,
    });
    await user.save();
    token = jwt.sign({ email: user.email }, "secret123");
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  it("should return user day and night rates if token is valid", async () => {
    const response = await request(app)
      .get("/api/rate")
      .set("x-access-token", token);

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.dayRate).toBe(user.dayRate);
    expect(response.body.nightRate).toBe(user.nightRate);
  });

  it("should return an error if token is invalid", async () => {
    const response = await request(app)
      .get("/api/rate")
      .set("x-access-token", "invalidtoken");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("error");
    expect(response.body.error).toBe("invalid token");
  });
});
