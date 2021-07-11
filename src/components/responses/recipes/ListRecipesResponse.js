import RecipeExample from "../../examples/recipes/RecipeExample";
import RecipeSchema from "../../schemas/recipes/RecipeSchema";
import resourceListResponse from "../common/resourceListResponse";

const ListRecipesResponse = resourceListResponse({
	code: "200",
	description: "Get all recipes",
	schema: RecipeSchema,
	example: RecipeExample
});

export default ListRecipesResponse;