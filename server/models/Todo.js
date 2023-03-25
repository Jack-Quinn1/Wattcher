const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

// const UserSchema = Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   day_rate: {
//     type: Number,
//     required: true,
//   },
//   night_rate: {
//     type: Number,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   current_provider: {
//     type: String,
//     trim: true,
//   },
//   sensors: {
//     text: {
//       type: String,
//       trim: true,
//     },
//     location: {
//       type: String,
//       trim: true,
//     },
//     timestamp: {
//       type: String,
//       default: Date.now(),
//     },
//   },
// });

const SensorSchema = Schema({
  text: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
//const User = mongoose.model("User", UserSchema);
const Sensor = mongoose.model("Sensor", SensorSchema);

//module.exports = User;
module.exports = Todo;
module.exports = Sensor;
