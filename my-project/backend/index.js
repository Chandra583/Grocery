const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));


const PORT = process.env.PORT || 8080;

//Connect to manogodb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Succesfully your  MongoDb database server connected :) "))
  .catch((err) => console.log(err));


  //schema of data
  const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String,
  });

  //model for schema
  const userModel = mongoose.model("user", userSchema);





app.get("/",(req,res)=>{
    res.send("server is ruunig.")
})

app.listen(PORT , ()=> console.log("server is runnnig " + PORT))

app.post("/signup",async(req,res)=>{
    console.log(req.body);
    // const {email} = req.body

    // userModel.findOne({email : email},(err,result)=>{
    //     console.log(result)
    //     console.log(err)
         
    //     if(result){
    //         res.send({message : "This emai is already register"})
    //     }

    //     else{
    //         const data =userModel(req.body)
    //         const save = data.save()
    //         res.send({message : "Successfully Sign up"})
    //     }

    // })

})