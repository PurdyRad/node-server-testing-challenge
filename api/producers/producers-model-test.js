const db = require('../../data/dbConfig');
const Producer = require('./producers-model');

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
})

// it('correct ENV', () => {
//     expect(process.env.DB_ENV).toBe('testing');
// })

describe('Producers Model', () => {
    describe('getEm function', () => {
        it('returns producer array', async () => {
            const res = await db('producers');
            expect(res).toHaveLength(0);
        });
    });

    describe('touchOfLife function', () => {
        it('adds producer to db', async () => {
            let res;
            await db('producers').insert(flume);
            res = await db('producers');
            expect(res).toHaveLength(1);
        });
        it('values of producers are correct', async () => {
            const producer = await Producer.touchOfLife(flume)
            expect(producer).toMatchObject({producers_id: 1, ...flume})
        });
    });
    describe('kissOfDeath', () => {
        it('deletes added producer from db', async () => {
            const [id] = await db('producers').insert(avicii)
            await db('producers').where('producers_id', id).del()
            const producerArr = await db('producers')
            expect(producerArr).toHaveLength(0)

        });
    });
})