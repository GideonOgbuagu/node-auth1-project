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


router.get('/login', (req, res) => {
    const { username, password } = req.body;


    //update the user password to hashed

    Users.findBy({ username })
         .then(([user]) => {
             //if we find the user, then also  check that the password match
             if (user && bcrypt.compareSync(password, user.password)) {
                 req.session.loggedIn = true;
                res.status(201).json({ message: `Welcome, ${user.username}`})
             } else {
                 res.status(401).json({ message: "You are cannot pass! "})
             }
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({errorMessage: err.message})
         })
})


module.exports = router;
