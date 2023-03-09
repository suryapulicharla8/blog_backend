const express=require('express');
const techapi=require('../Api/Technology');

const technology=express.Router();
technology.route('/technology').get(techapi.apiController);

module.exports=technology;