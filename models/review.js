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
  items: [{
    username: {
      type: String,
      required: true,
    },
    userUrl: {
      type: String,
      required: true,
    },
    reviewLink: {
      type: String,
      required: true,
    },
    warningSpoilers: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    helpful: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  }]

});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
