import express from "express";
import { addLoan, getAllLoans } from "../controller/loan.controller";
import validate from "../middleware/validate";
import { addLoanSchema, getLoanSchema } from "../zod-schema/loan.schema";

const router = express.Router();

//Call all books
router.get("/", getAllLoans);
router.get("/loan:loanid", validate(getLoanSchema));
router.post("/", validate(addLoanSchema), addLoan);
export default router;
