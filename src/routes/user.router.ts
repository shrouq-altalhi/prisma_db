import express from "express";

import {
  addUser,
  getAllUsers,
} from "../controller/user.controller";
import validate from "../middleware/validate";
import { addUserSchema, getUserSchema } from "../zod-schema/user.schema";

const router = express.Router();

//Call all books
router.get("/", getAllUsers);
router.post("/", validate(addUserSchema), addUser);

export default router;
