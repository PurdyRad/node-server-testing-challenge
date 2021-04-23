
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('producers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('producers').insert([
        {producers_id: 1, name: 'Valentino Khan', genre: 'House'},
        {producers_id: 2, name: 'Alison Wonderland', genre: 'House'},
        {producers_id: 3, name: 'Skrillex', genre: 'Fiya'}
      ]);
    });
};
