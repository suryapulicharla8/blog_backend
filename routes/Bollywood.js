const express=require('express');
const bollyapi=require('../Api/Bollywood');


const bollywood=express.Router();
bollywood.route('/bollywood').get(bollyapi.apiController);

module.exports=bollywood
