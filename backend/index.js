const express =  require('express')
//const bodyParser = require('body-parser')
const app = express() //make api request 
const cors = require('cors')
const mysql = require('mysql')
const db = require("./models")
app.use(express.json())
app.use(cors());
//create connection between mysqlbench work and express 
/*var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Energy-Team2021',
    database:'dbrestaurant',
    port:"3306"

});

// we wanna make sure that the database is connected 
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
/*
app.use(cors()); 
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {
    const userID = req.body.userID
    const password = req.body.password
    const sqlInsert = "INSERT INTO account(userID ,password) VALUES('??','??')";
    db.query(sqlInsert, [userID,password], (err, rows) => { 
        console.log(err); 
    }); 
})
 */ 

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("running on port 3001");
    });
    
});

