import express from "express";
import dotenv from 'dotenv';
import { router } from "./routes/proof-read.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use("/proof-read",router);
const PORT = process.env.PORT;


app.listen(PORT,()=>{
    console.log(`Server is sucessfully running at port no. ${PORT}`);
});
