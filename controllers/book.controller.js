import Book from "../models/book.model.js";

export const getbooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getbook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchbook = async (req, res) => {
  try {
    const { query } = req.query;
    console.log("Search Query: ", query);

    if (!query) {
      return res.status(400).json({ message: "Query parameter is missing" });
    }

    const regex = new RegExp(query, "i");

    const books = await Book.aggregate([
      {
        $match: {
          $or: [{ Author: { $regex: regex } }, { Title: { $regex: regex } }],
        },
      },
    ]);

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createbook = async (req, res) => {
  try {
    const { Title, Author, Genre, PublishedYear, Requirements } = req.body;
    const newBook = new Book({
      Title,
      Author,
      Genre,
      PublishedYear,
      Requirements,
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatebook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletebook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
