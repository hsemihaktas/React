const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    pass:'123456789',
    database:'ders_odev',
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get/:key",(req,res)=>{

    const value = req.params.key
    const sqlSelect = "SELECT * FROM ders_odev WHERE anahtar=?";
    db.query(sqlSelect,value,(err,result)=>{
        res.send(result);
    });
})


app.listen(3001, ()=>{
    console.log('running on port 3001');
});
