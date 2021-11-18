const express =  require('express')

const app = express()

const mysql = require('mysql')

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Energy-Team2021',
    database:'dbrestaurant',
    port:"3306"

});

db.connect((err) =>{
    if(err) {
        throw err
    } else {
        console.log("connected")
    }
})
// Create Table 
/*db.query('CREATE TABLE account(userID varchar(60)  PRIMARY KEY, password VARCHAR(255) NOT NULL)',(err,rows) => {
    if(err) {
        throw err
    } else {
        console.log(rows)
    }
    
})
*/
// Insert into table that we have created 
db.query("INSERT INTO account(userID,password) VALUES('Massoud','kdajdkf')", (err, rows) => {
    if(err) {
        throw err
    } else {
        console.log("Data SENT BOIS"); 
        console.log(rows)

    } 
})      

app.listen(3001, () => {
    console.log("runnign on port 3001");
});

