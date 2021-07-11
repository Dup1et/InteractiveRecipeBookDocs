import RecipeExample from "../../examples/recipes/RecipeExample";
import RecipeSchema from "../../schemas/recipes/RecipeSchema";
import resourceResponse from "../common/resourceResponse";

const ShowRecipeResponse = resourceResponse({
	code: "200",
	description: "Show recipe",
	schema: RecipeSchema,
	example: RecipeExample
});

export default ShowRecipeResponse;