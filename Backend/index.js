import express  from "express"
import cors from "cors"
const app=express()
import dotenv from "dotenv"
dotenv.config();
import bookroute from "./Routes/bookroute.js"
import userroute from "./Routes/userroute.js"

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 4000

import dbConnect from "./database/db.js";
dbConnect();


// routes
app.use("/",bookroute)
app.use("/user",userroute)


app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`)
});

