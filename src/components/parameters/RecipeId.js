import parameter from "../../core/parameter";

const RecipeId = parameter({
	in: "path",
	name: "recipeId",
	schema: {
		type: "integer",
	},
	required: true,
	description: "Recipe identifier"
});

export default RecipeId;