const request = require("supertest");
const app = require("../../src/app");
const mongoose = require("mongoose");
const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

describe("API Integration Tests", () => {
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

  describe("Authentication", () => {
    let token;

    beforeEach(async () => {
      await User.deleteMany({});
      const user = new User({
        name: "John Doe",
        email: "johndoe@example.com",
        password: await bcrypt.hash("password123", 10),
      });
      await user.save();
      token = jwt.sign({ email: user.email }, "secret123");
    });

    it("should allow a registered user to login", async () => {
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

    it("should not allow a user with invalid credentials to login", async () => {
      const response = await request(app).post("/api/login").send({
        email: "johndoe@example.com",
        password: "wrongpassword",
      });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("error");
      expect(response.body.user).toBe(false);
    }, 10000);

    it("should allow a logged in user to update their information", async () => {
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
      const updatedUser = await User.findOne({ email: "johndoe@example.com" });
      expect(updatedUser.dayRate).toBe(0.2);
      expect(updatedUser.nightRate).toBe(0.15);
      expect(JSON.stringify(updatedUser.sensorsGroup)).toBe(
        JSON.stringify(["Living Room", "Kitchen", "Bedroom"])
      );
    });

    it("should not allow an unauthenticated user to update their information", async () => {
      const response = await request(app)
        .post("/api/update")
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

  describe("Authorization", () => {
    let token;

    beforeEach(async () => {
      await User.deleteMany({});
      const user = new User({
        name: "John Doe",
        email: "johndoe@example.com",
        password: await bcrypt.hash("password123", 10),
        dayRate: 0.15,
        nightRate: 0.1,
        sensorsGroup: {
          location: [
            {
              name: "Living Room",
              sensors: [
                {
                  number: "1",
                  data: [
                    {
                      value: 100,
                      timestamp: "2023-01-01T00:00:00.000Z",
                    },
                  ],
                },
              ],
            },
            {
              name: "Kitchen",
              sensors: [
                {
                  number: "2",
                  data: [
                    {
                      value: 200,
                      timestamp: "2023-01-01T00:00:00.000Z",
                    },
                  ],
                },
              ],
            },
          ],
        },
      });
      await user.save();
      console.log("Saved user:", user);
      token = jwt.sign({ email: user.email }, "secret123");
    });

    it("should allow an authenticated user to access their information", async () => {
      const response = await request(app)
        .get("/api/update")
        .set("x-access-token", token);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("ok");
      expect(response.body.name).toBe("John Doe");
      expect(response.body.email).toBe("johndoe@example.com");
      expect(response.body.password).toBeDefined();
      expect(response.body.dayRate).toBe(0.15);
      expect(response.body.nightRate).toBe(0.1);
      expect(response.body.sensorsGroup.location).toEqual([
        expect.objectContaining({
          name: "Living Room",
          sensors: [
            expect.objectContaining({
              number: "1",
              data: [
                expect.objectContaining({
                  timestamp: "2023-01-01T00:00:00.000Z",
                  value: 100,
                }),
              ],
            }),
          ],
        }),
        expect.objectContaining({
          name: "Kitchen",
          sensors: [
            expect.objectContaining({
              number: "2",
              data: [
                expect.objectContaining({
                  timestamp: "2023-01-01T00:00:00.000Z",
                  value: 200,
                }),
              ],
            }),
          ],
        }),
      ]);
    });

    it("should not allow an unauthenticated user to access user information", async () => {
      const response = await request(app).get("/api/update");

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("error");
      expect(response.body.error).toBe("invalid token");
    });

    it("should allow an authenticated user to access their sensor data", async () => {
      const response = await request(app)
        .get("/api/data")
        .set("x-access-token", token);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("ok");
      const locationNames = response.body.locations.location.map(
        (loc) => loc.name
      );
      console.log(response.body.locations);
      expect(locationNames).toEqual(["Living Room", "Kitchen"]);
    });

    it("should not allow an unauthenticated user to access sensor data", async () => {
      const response = await request(app).get("/api/data");

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("error");
      expect(response.body.error).toBe("invalid token");
    });

    it("should allow an authenticated user to access their day and night rates", async () => {
      const response = await request(app)
        .get("/api/rate")
        .set("x-access-token", token);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("ok");
      expect(response.body.dayRate).toBe(0.15);
      expect(response.body.nightRate).toBe(0.1);
    });

    it("should not allow an unauthenticated user to access day and night rates", async () => {
      const response = await request(app).get("/api/rate");

      expect(response.status).toBe(200);
      expect(response.body.status).toBe("error");
      expect(response.body.error).toBe("invalid token");
    });
  });
});
