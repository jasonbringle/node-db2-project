const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();
router.get('/', (req, res) => {
    db.select('*')
    .from('cars')
    .then((cars) => res.status(200).json({ data:cars}))
    .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    const  { id } = req.params;
    db('cars')
        // .where({ id: id })
        .where('id',id)
        // .first()
        .then((car) => res.status(200).json({ data:car }))
        .catch(err => err)
});

router.post('/', (req, res) => {
    const postData = req.body
    db('cars')
        .insert(postData)
        .then(id => res.status(201).json({ data: id}))
        .catch(err => console.log(err))
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db("cars")
        .where("id", id)
        .update(changes)
        .then(count => {
            if(count > 0){
            res.status(200).json({ message: `${count} record has been updated` });
            } else{ 
                res.status(404).json({ message: 'There wasn norecord to update'})
            }
        })
        .catch()
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db("cars")
        .where("id", id)
        .delete()
        .then(count => {
            if(count > 0){
            res.status(200).json({ message: `${count} record has been updated` });
            } else{ 
                res.status(404).json({ message: 'There wasn norecord to update'})
            }
        })
        .catch()

});

module.exports = router;