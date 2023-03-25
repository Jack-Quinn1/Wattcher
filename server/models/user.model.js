const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dayRate: { type: Number, required: true },
    nightRate: { type: Number },
    sensorsGroup: {
      location: [
        {
          name: {
            type: String,
          },
          sensors: [
            {
              number: {
                type: String,
              },
              data: [
                {
                  value: {
                    type: Number,
                  },
                  timestamp: {
                    type: String,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
