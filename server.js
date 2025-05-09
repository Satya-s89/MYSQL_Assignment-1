const express = require('express');
const app = express();

const mysql = require('mysql2');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("Connected to Database");
    }
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})