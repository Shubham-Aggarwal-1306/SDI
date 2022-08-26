// models/event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: String,
  },
  banner: {
    type: String,
  },
  S_description: {
    type: String,
  },
  description: {
    type: String,
  },
  language: {
    type: String
  },
  event_date: {
    type: Date,
    default: Date.now
  },
  event_time: {
    type: String,
  },
  link: {
    type: String,
  },
  price: {
    type: String,
    }
})

module.exports = Event = mongoose.model("event", eventSchema);

// export default event;