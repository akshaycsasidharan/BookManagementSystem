import express from "express";
import {
  getbooks,
  getbook,
  createbook,
  updatebook,
  deletebook,
  searchbook,
} from "../controllers/book.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", verifyToken, getbooks);
router.get("/search", verifyToken, searchbook);
router.get("/:id", verifyToken, getbook);
router.post("/", verifyToken, createbook);
router.put("/:id", verifyToken, updatebook);
router.delete("/:id", verifyToken, deletebook);

export default router;
