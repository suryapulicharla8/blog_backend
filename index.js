const express=require('express');
const app=express();
const cors=require('cors');
const bollywood=require('./routes/Bollywood');
const fitness=require('./routes/Fitness');
const food=require('./routes/Food');
const hollywood=require("./routes/Hollywood");
const technology=require('./routes/Technology');


app.use(cors());
app.use("/",bollywood);
app.use("/",fitness);
app.use("/",food);
app.use("/",hollywood);
app.use("/",technology);

app.listen(6600,()=>{
    console.log("server is running ")
})
