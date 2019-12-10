const express = require('express');

const db = require("../data/dbConfig");

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*').from('cars')
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(error=>{
        res.status(500).json({errorMessage:"Error grabbing cars.", error:error});
    })
});

router.get('/:id', (req, res) => {
    db.select('*').from('cars')
    .where("id",req.params.id).first()
    .then(data=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({errorMessage:`Could not find car with ID of ${req.params.id}`});
        }
        
    })
    .catch(error=>{
        res.status(500).json({errorMessage:"Error grabbing car.", error:error});
    })
});

router.post('/', (req, res) => {
  db.insert(req.body,"id").into("cars")
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({errorMessage:"Error adding new car.", error:error});
    })
});

router.delete('/:id', (req, res) => {
    db("cars").where("id",req.params.id).del()
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: `${count} record(s) updated` });
            } else {
                res.status(404).json({ message: "Car not found" });
            }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          errorMessage: "Error removing the car"
        });
      });
});

router.put('/:id', (req, res) => {
    db("cars").where("id",req.params.id).update(req.body)
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: `${count} record(s) updated` });
            } else {
                res.status(404).json({ message: "Car not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
            errorMessage: "Error editing the car"
            });
        });
});

module.exports = router;