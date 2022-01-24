const express = require('express');
const { route } = require('express/lib/application');
const req = require('express/lib/request');
const router = express.Router();
const infoRouterSchema = require('./infoSchema');


//Create 
router.post('/', async(req, res) => {
    var data = new infoRouterSchema({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    });
    await data.save();
    res.json(data);
})

//Get All
router.get('/', async(req, res) => {
    var alldata = await infoRouterSchema.find();
    res.json(alldata)
})

//Update
router.put('/', async(req, res) => {
    var update = await infoRouterSchema.update({ _id: req.body._id}, {$set: {
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    }})

    res.json(update);
})

//Delete
router.delete('/del/:id', async(req, res) => {
    var delDate = await infoRouterSchema.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: 'Deleted'});
    })
});


router.get('/', (req, res) => {
    res.send('Home');
})

module.exports = router;