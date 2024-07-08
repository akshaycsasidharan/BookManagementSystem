import express from "express";
import { getbooks, getbook, createbook, updatebook, deletebook } from '../controllers/book.controller.js';

const router = express.Router();

router.get('/', getbooks);

router.get("/:id", getbook);

router.post("/", createbook);

router.put("/:id", updatebook);

router.delete("/:id", deletebook);

export default router;
