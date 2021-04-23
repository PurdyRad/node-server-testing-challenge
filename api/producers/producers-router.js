const express = require('express');
const Producer = require('./producers-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Producer.getEm()
    .then(producers => {
        res.status(200).json(producers);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
    Producer.touchOfLife(req.body)
    .then(newProducer => {
        res.status(201).json(newProducer)
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Producer.kissOfDeath(req.params.id)
    .then(numberOfDeletedProducers => {
        res.status(201).json(numberOfDeletedProducers)
    })
    .catch(next);
})

module.exports = router;
