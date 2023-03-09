const express=require('express');
const bollyapi=require('../Api/Bollywood');


const bolly=express.Router();
bolly.router('/bollywood').get(bollyapi.apiController);

module.exports=bolly
