const express = require('express');
// const Producer = require('./producers-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    // Producer.getEm()
    // .then(producers => {
    //     res.status(200).json(producers);
    // })
    // .catch(next);
});

router.post('/', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

})

module.exports = router;
