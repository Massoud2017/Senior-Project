const express =  require('express')

const app = express()

const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'Restaurent-Database',

})

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO table1(name,password) VALUES {'Massoud', 'Thanks'};"
    db.query(sqlInsert, (err, result)=> {
        res.send("hello world"); 
    })
    
}); 
app.listen(3001, () => {
    console.log("runnign on port 3001");
});