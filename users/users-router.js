const express = require("express");

const router = express.Router();

Users = require('./users-model.js');


router.get('/', (req, res) => {
    Users.find()
         .then(user => {
             res.status(200).json(user);
         })
         .catch(err => {
             res.status(500).json(err)
         })
})

module.exports = router;