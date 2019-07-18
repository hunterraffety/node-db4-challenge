exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { recipe_name: 'Hot Dogs' },
        { recipe_name: 'Macaroni and Cheese' },
        { recipe_name: 'Rice-A-Roni' },
        { recipe_instructions: '1. Do This 2. Do That 3. Eat' },
        { recipe_instructions: '1. Do This 2. Do That 3. Eat' },
        { recipe_instructions: '1. Do This 2. Do That 3. Eat' }
      ]);
    });
};
