const express = require('express')
const mysql = require('mysql')
const port = process.env.PORT || 5001
const app = express()
app.use(express.json())

//connexion au serveur 
app.listen(port, () => {
    console.log("serveur is online")

})

app.get("/", (req,res) => {
    res.json({message: "Hello world"})

})

app.post("/", (req,res) => {
    res.json()
})

//connexion à la BDD
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_entretien"
})

connection.connect((err) => {
    if(err){
        console.error('Erreur de connexion '+err.stack)
        return
    }
    console.log("connexion réussie à la base de données")
})

const users = require("./routes/users")
app.use("/users", users)

const estates = require("./routes/estate")
app.use("/estate", estates)


