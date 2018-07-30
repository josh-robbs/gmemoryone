
exports.seed = function(knex, Promise) {
  return knex('resolution').del()
}
