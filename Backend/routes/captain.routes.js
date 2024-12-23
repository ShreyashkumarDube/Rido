const express = require('express');
const captainController = require('../controllers/captain.controller');
const router = express.Router();
const { body } = require("express-validator");

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname should be atleast 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password should be atleast 6 characters long.'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be 1 characters long'),
    body('vehicle.vehicleType').isInt(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle'),

],
captainController.registerCaptain
)

module.exports = router;