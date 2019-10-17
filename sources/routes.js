const express = require("express");
const router = express.Router();
const * = require("../models/&Model");


router.get("/", async (req, res) => {
   res.send("This is the & page");
});


router.get("/:id", async (req, res) => {
    
    try {
        const & = await *.findOne({
            %
        })

        res.send(&);

    }
    catch(ex){
        console.log(ex.errors);
        res.status(500).send(ex.message);
    }
 });


router.post("/", async (req, res) => {
    try {
        const & = new *({
        %
        });
        await &.save();

        res.status(200).send(&);
    }
    catch(ex){
        console.log(ex.errors);
        res.status(500).send(ex.message);
    }
});


router.put("/", async (req, res) => {
    try {
        const & = await *.findOneAndUpdate(
        { 
            %
        },
        {
            %
        });

        if (!&) return res.status(404).send('* not found.');


        res.status(200).send(&);
    }
    catch(ex){
        console.log(ex.errors);
        res.status(500).send(ex.message);
    }
});


router.delete("/",async (req,res) => {
    
    try {
        const & = await *.findOneAndRemove({
            %
        });
        
        res.send(&);
    }
    catch(ex){
        console.log(ex.errors);
        res.status(500).send(ex.message);
    }
});

module.exports = router;