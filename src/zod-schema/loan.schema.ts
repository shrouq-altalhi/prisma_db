import { TypeOf, z } from "zod";

export const getLoanSchema = z.object({
  params: z.object({
    loanid: z.string({ invalid_type_error: "Loan Id is required" }),
  }),
});

export const getBookIdSchema = z.object({
  params: z.object({
    bookid: z.string({ invalid_type_error: "Book Id is required" }),
    userid: z.string({ invalid_type_error: "User Id is required" }),
  }),
});

export type getBookIdSchemaType = z.infer<typeof getBookIdSchema>["params"];

export const addLoanSchema = z.object({
  body: z.object({
    userid: z.string({ invalid_type_error: "Book Id is requierd" }),
    bookid: z.string({ invalid_type_error: "User Id requierd" }),
  }),
});

export type addLoanSchemaType = z.infer<typeof addLoanSchema>["body"];
