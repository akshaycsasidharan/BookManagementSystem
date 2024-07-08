import express from "express";
const book = require("../models/book.model");
const router = express.Router();

const { getbooks , getbook , createbook , updatebook , deletebook} = require('../controllers/book.controller.js');


router.get('/',getbooks);



export default router;
