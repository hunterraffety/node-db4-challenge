const recipeDB = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return recipeDB('recipes');
}

function getShoppingList(recipe_id) {
  //
}

function getInstructions(recipe_id) {
  //
}
