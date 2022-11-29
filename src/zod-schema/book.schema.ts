import {z} from "zod"

export const getBookSchema=z.object({
    params:z.object({
        userid: z.string({invalid_type_error:"User Id is required"}),
    })
})

export const addBookSchema=z.object({
    body:z.object({
        name:z.string({invalid_type_error:"Book title is requierd"}),
        gener:z.string({invalid_type_error:"Gener is requierd"})
    })
})