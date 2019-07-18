const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (error) {
    res.status(500).JSON({ message: 'nope' });
  }
});

module.exports = router;
