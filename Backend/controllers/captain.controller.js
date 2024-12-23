const captainModel = require('../models/captain.model');
const captainService = requrie('../services/captain.service');
const {validationResult} = requrie('express-validation');


module.exports.registerCaptain = async (req, res, next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
        
    }
}