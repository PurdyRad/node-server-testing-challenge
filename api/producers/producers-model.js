const db = require('../../data/dbConfig');


module.exports = {
    getEm,
    touchOfLife,
    kissOfDeath
};

function getEm () {
    return db('producers');
}

async function touchOfLife (heat) {
    const [id] = await db('producers').insert(heat)
    return db('producers').where('producers_id', id).first()
}

function kissOfDeath () {

}