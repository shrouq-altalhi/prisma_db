import { Request, Response } from "express";
import { prisma } from "../config/db";
import { getBookIdSchemaType } from "../zod-schema/loan.schema";
import { Loan } from "@prisma/client";

export const getAllLoans = async (req: Request, res: Response) => {
  // const loans = await prisma.loan.findmany();
  // return res.status(200).json(loans);
};

export const getLoanBook = async (req: Request, res: Response) => {
  const { bookid } = req.params as getBookIdSchemaType;
  const { userid } = req.params as getBookIdSchemaType;

  const loanBook = await prisma.loan.findMany({
    where: { id: bookid },
    include: {
      Book: true,
    },
  });
  const isValid = await prisma.loan.findFirst({
    where: {
      bookid: bookid,
    },
  });
  if (!isValid) {
    return res.status(400).json({
      message: "Wrong user id or book id",
    });
  }
  return res.status(200).json(loanBook);
};
export const addLoan = async (req: Request, res: Response) => {
  const newLoan = req.body as Loan;
  await prisma.loan.create({
    data: newLoan,
  });
  res.status(201).json({ message: "New Loan added!" });
};
