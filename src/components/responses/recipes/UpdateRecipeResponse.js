import RecipeExample from "../../examples/recipes/RecipeExample";
import RecipeSchema from "../../schemas/recipes/RecipeSchema";
import resourceResponse from "../common/resourceResponse";

const UpdateRecipeResponse = resourceResponse({
	code: "200",
	description: "Update recipe",
	schema: RecipeSchema,
	example: RecipeExample
});

export default UpdateRecipeResponse;