const express = require('express')

const register = async (req, res) => {
    res.json({
        "register": "working"
    })
}

module.exports = {register}