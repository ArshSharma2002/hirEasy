const express = require("express");
const router = express.Router();
const Workers = require("../models/Workers");

router.get("/",async (req,res)=>{
    try {
        worker = await Workers.find()

        res.json(worker)
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Some Error Occured.");
    }
});

router.get("/workerprofile/:_id",async (req,res)=>{
    try {
        worker = await Workers.findById(req.params._id)
        console.log(worker)
        res.json(worker)
        
    } catch (error) {
        console.log(error)
        res.status(400).send("Some Error Occured.");
    }
});

router.post("/", async (req, res) => {
    const {name,age,gender,address,email,contact,services} = req.body;
    try {
        worker = await Workers.create({
            name: name,   
            age: age,
            gender: gender,
            address: address,   
            email: email,
            contact: contact,
            services : services
          });
          
          console.log(worker)
          res.json(worker);

    } catch (error) {
        console.error(error.message);
        res.status(400).send("Some Error Occured.");
    }
});

module.exports = router ;