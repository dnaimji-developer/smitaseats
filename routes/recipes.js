const express = require('express');
const router = express.Router();
const { index, showRecipe, isRecipe } = require("../controllers/recipes.js");

router.get('/', index);

router.get("/:id", isRecipe, showRecipe);

module.exports = router;