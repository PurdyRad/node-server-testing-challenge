const db = require('../../data/dbConfig');

function getEm () {
    return db('producers');
}

async function touchOfLife (heat) {
    const [id] = await db('producers').insert(heat)
    return db('producers').where('producers_id', id).first()
}

function kissOfDeath (id) {
    return db('producers').where('producers_id', id).del()
}

module.exports = {
    getEm,
    touchOfLife,
    kissOfDeath
};