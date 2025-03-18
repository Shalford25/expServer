import express from "express";
import cors from "cors";
import bookRouter from "./routes/BookRoutes.js";
import pool from "./routes/PoolConnection.js";
import userRouter from "./routes/UserRoutes.js";
const app=express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/shop', bookRouter);
app.arguments("/users",userRouter);

app.listen(3000, () => console.log("Server ready on port 3000."));