const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_entretien"
 })



const createUser = (req,res)=> {
    let name = req.body.name
    let email = req.body.email
    let age = req.body.age

    connection.query("INSERT INTO users VALUES(NULL,?,?,?)", [name, email, age], (err, result) => {
        if(err){
            console.log(err)
        }
        else{
        console.log(result)
        res.send("posted")
        }
    })
}

const getAllUsers = (req, res) => {
    
    connection.query("SELECT * FROM users", (err, rows, fields) => {
        if(err) throw err
        res.status(200).json({rows})
    })
}



module.exports = {
    createUser,
    getAllUsers
    }
