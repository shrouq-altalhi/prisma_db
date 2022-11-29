import { z } from "zod";

export const getUserSchema = z.object({
  params: z.object({
    boodid: z.string({ invalid_type_error: "User Id is required" }),
  }),
});

export const addUserSchema = z.object({
  body: z.object({
    username: z.string({ invalid_type_error: "UserName Id is requierd" }),
    password: z.string({ invalid_type_error: "Password Id requierd" }),
  }),
});
