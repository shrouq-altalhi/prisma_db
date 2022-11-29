import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Book, PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();

  return res.status(200).json(books);
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const newBook = req.body as Book;
    await prisma.book.create({
      data: newBook,
    });
    res.status(201).json({ message: "New Loan added!" });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(error);
    res.status(400).json({
      message: prismaError.message,
    });
  }
};
