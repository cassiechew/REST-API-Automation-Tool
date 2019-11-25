const * = require("../models/&Model");

export default class * {

    async getAll(req, res) {
        try {
            const & = await *.find({});
            res.send(&);
        } catch(ex){
            console.log(ex.errors);
            res.status(500).send(ex.message);
        }
    }

    

    async getOne(req, res) {
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
    }

    async create(req, res) {
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
    }

    async update(req, res) {
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
    }

    async delete(req, res) {
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
    }
}