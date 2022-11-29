import express from "express";
import {
  addBook,
  getAllBooks,
} from "../controller/book.controller";
import validate from "../middleware/validate";
import { addBookSchema, getBookSchema } from "../zod-schema/book.schema";

const router = express.Router();

//Call all books
router.get("/", getAllBooks);
router.post("/", validate(addBookSchema), addBook);

export default router;
