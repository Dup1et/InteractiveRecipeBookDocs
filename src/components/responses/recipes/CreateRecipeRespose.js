import RecipeExample from "../../examples/recipes/RecipeExample";
import RecipeSchema from "../../schemas/recipes/RecipeSchema";
import resourceResponse from "../common/resourceResponse";

const CreateRecipeResponse = resourceResponse({
	code: "201",
	description: "Create recipe",
	schema: RecipeSchema,
	example: RecipeExample
});

export default CreateRecipeResponse;