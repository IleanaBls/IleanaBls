const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_entretien"
 })

const createEstate = (req, res) => {
    let type = req.body.type
    let name = req.body.name
    let address = req.body.address
    let surface = req.body.surface

    connection.query("INSERT INTO estates VALUES (NULL,?,?,?,?)" ,[type, name, address, surface] ,(err, result) =>{
        if(err){
            console.log(err)
        }else{
            console.log("Posted")
            res.send("posted")
        }
    })
}

module.exports = {
    createEstate
}