const express = require('express')
const bodyParser = require("body-parser")
const cors =require("cors")
const app = express()
const mysql = require("mysql");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"movie"
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    console.log("hi");
}),

app.get("/api/get", (req,res)=>{
    const sqlSelect = 'SELECT * FROM movie_table'
    db.query(sqlSelect, (err,result)=>{
        res.send(result)
    })
})

app.post("/api/insert",(req,res)=>{
    const MovieName = req.body.MovieName;
    const MovieReview =req.body.MovieReview;
    const sqlInsert = 'INSERT INTO movie_table (MovieName,MovieReview) VALUE (?,?)'
    db.query(sqlInsert,[MovieName,MovieReview], (err,result)=>{
        console.log(result)
    })
})

app.listen(3001,()=>{
    console.log("running on port http://localhost:9753")
})