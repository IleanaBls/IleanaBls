const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const userController = require('../controllers/users.controller')


//connection à la bdd
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_entretien"
 })

//route + requete get pour récupérer tous les users
router.get("/", userController.getAllUsers)

//route + requête post pour ajouter un user à la BDD
router.post("/", userController.createUser)

module.exports = router