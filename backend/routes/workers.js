const express = require("express");
const router = express.Router();
const Workers = require("../models/Workers");



router.post("/", async (req, res) => {
    const {name,email,contact,services} = req.body;
    try {
        worker = await Workers.create({
            name: name,      
            email: email,
            contact: contact,
            services : services
          });
          
          res.json(worker);

    } catch (error) {
        console.error(error.message);
        res.status(400).send("Some Error Occured.");
    }
});

module.exports = router ;