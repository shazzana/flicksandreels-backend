const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  movieId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  items: [
    {
      username: {
        type: String,
        required: true,
      },
      userUrl: {
        type: String,
        required: false,
      },
      reviewLink: {
        type: String,
        required: false,
      },
      warningSpoilers: {
        type: String,
        required: false,
      },
      date: {
        type: String,
        required: false,
      },
      rate: {
        type: String,
        required: false,
      },
      helpful: {
        type: String,
        required: false,
      },
      heading: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
