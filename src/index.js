import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})
connectDB()
























/*
import express from "express"

const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error
        }) // when express can't able to connect with the database

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port ${process.env.PORT}`);
        })
    }
    catch (error){
        console.error(error);
        throw error
    }
})()
    */