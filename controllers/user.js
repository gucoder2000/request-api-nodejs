'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services/index')

function signUp (req, res){
    const user = new User({
        email : req.body.email,
        name : req.body.name,
        password: req.body.password
    })

    user.save((err) => {
        if (err) return res.status(500).send({message : 'Error to create User'})

        return res.status(200).send({token : service.createToken(user)})
    })
}

function signIn (req, res){
    User.find({email : req.body.email}, (err , user) => {
        if (err)
            return res.status(500).send({message : err})
        if (!user)
            return res.status(404).send({message : 'Dont Exist User' })
        
        req.user = user
        res.status(200).send({
            message : 'Success',
            token : service.createToken(user)
        })
    })
}

module.exports = {
    signUp,
    signIn
}