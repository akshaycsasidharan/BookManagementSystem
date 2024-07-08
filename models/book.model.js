import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    Genre: {
      type: String,
      required: true,
    },
    PublishedYear: {
      type: Number,
      required: true,
      default: 0,
    },
    Requirements: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
