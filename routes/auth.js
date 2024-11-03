const express = require('express')
const router = express.Router()
const {register} = require('../controllers/authControllers')

router.get('/v1/register',register)

module.exports = router