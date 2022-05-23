const { Schema, model } = require("mongoose");

const pollSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  totalVote: {
    type: Number,
    default: 0,
  },
  options: {
    type: [
      {
        String,
        vote: Number,
      },
    ],
  },
});

const Poll = new Poll("Poll", pollSchema);

module.exports = Poll;
