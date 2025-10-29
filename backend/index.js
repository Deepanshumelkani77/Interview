const express=require("express")
const cors=require("cors")  //it is use for fetch data from database in frontend

//app config
const app=express();
const port = process.env.PORT || 2000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})