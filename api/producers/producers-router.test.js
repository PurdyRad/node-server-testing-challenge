const request = require('supertest');
const db = require('../../data/dbConfig');
const Producer = require('./producers-model');
const router = require('./producers-router');

const flume = {name: 'Flume', genre:'Future-House'};
const avicii = {name: 'Avicii', genre:'Dance'};

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async () => {
    await db('producers').truncate();
});

afterAll(async () => {
    await db.destroy();
});

describe('endpoints', () => {
    describe('[POST]', () => {
        it('can create a new producer', async () => {
            let res 
            res = await request(router).post('/producers').send(flume)
            expect(res.body).toMatchObject({producers_id: 1, ...flume})
        })
    })
    describe('[DELTE]', () => {
        it('returns a 201', async () => {
            const [id] = await db('producers').insert(avicii)
            const res = await request(router).delete(`/producers/${id}`)
            expect(res.status).toBe(201)
        })
    })
})
