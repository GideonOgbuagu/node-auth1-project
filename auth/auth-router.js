const router = require("express").Router()
const bcrypt  = require("bcryptjs");

const Users = require('../users/users-model.js');

router.get('/register', (req, res) => {
    const user = req.body;

    const rounds = process.env.HASH_ROUNDS || 12;

    const hash = bcrypt.hashSync(user.password, rounds)

    //update the user password to hashed

    user.password = hash;

    Users.add(user)
         .then(stored => {
             res.status(201).json(stored)
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({errorMessage: err.message})
         })
})


module.exports = router;
