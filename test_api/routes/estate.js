const express = require('express')
const mysql = require('mysql')
const router = express.Router()
const estateController = require('../controllers/estate.controller')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_entretien"
 })

router.post('/', estateController.createEstate)

module.exports = router

