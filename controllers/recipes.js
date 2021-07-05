const recipes = require('../data/recipes');

module.exports.index = function (req, res) {
	res.render("recipes/index.ejs", { recipes });
}

module.exports.showRecipe = function (req, res) {
	id = req.params.id;
	recipe = recipes[id];
	res.render("recipes/show.ejs", { recipe });
}

module.exports.isRecipe = function (req, res, next) {
	if (0 <= req.params.id && req.params.id < recipes.length) {
		next();
	} else {
		req.flash("error", "Sorry. The recipe you're looking for doesn't exist.");
		res.redirect("/recipes");
	}
}