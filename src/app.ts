import express from "express";
import bookRoute from "./routes/book.router";
import userRoute from "./routes/user.router";
import loanRoute from "./routes/loan.router";
import "dotenv/config";
import { connectDB } from "./config/db";

const app = express();

connectDB();
const PORT = process.env.POET || 5001;

app.use(express.json());
app.use("/api/v1/book", bookRoute);
app.use("api/v1/user", userRoute);
app.use("api/vi/loan", loanRoute);

app.listen(PORT, () => {
  console.log(`The server running in port ${PORT}`);
});
