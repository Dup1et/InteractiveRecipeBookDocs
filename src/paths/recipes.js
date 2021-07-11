import merge from "lodash/merge";
import BadRequestResponse from "../components/responses/common/errors/BadRequestResponse";
import ForbiddenResponse from "../components/responses/common/errors/ForbiddenResponse";
import InternalServerErrorResponse from "../components/responses/common/errors/InternalServerErrorResponse";
import UnauthorizedResponse from "../components/responses/common/errors/UnauthorizedResponse";
import NotFoundResponse from "../components/responses/common/errors/NotFoundResponse";
import endpoint from "../core/endpoint";
import ShowRecipeResponse from "../components/responses/recipes/ShowRecipeResponse";
import ListRecipesResponse from "../components/responses/recipes/ListRecipesResponse";
import CreateRecipeResponse from "../components/responses/recipes/CreateRecipeRespose";
import UpdateRecipeResponse from "../components/responses/recipes/UpdateRecipeResponse";
import EmptyResponse from "../components/responses/common/EmptyResponse";
import RecipeId from "../components/parameters/RecipeId";

const recipes = ({ tags }) => (
	merge(
		endpoint({
			path: "/recipes",
			method: "get",
			tags,
			responses: [
				ListRecipesResponse,
				BadRequestResponse,
				InternalServerErrorResponse,
			]
		}),
		endpoint({
			path: "/recipes/",
			method: "post",
			tags,
			responses: [
				CreateRecipeResponse,
				BadRequestResponse,
				UnauthorizedResponse,
				ForbiddenResponse,
				InternalServerErrorResponse,
			]
		}),
		endpoint({
			path: "/recipes/{recipeId}",
			method: "get",
			tags,
			parameters: [
				RecipeId,
			],
			responses: [
				ShowRecipeResponse,
				BadRequestResponse,
				UnauthorizedResponse,
				ForbiddenResponse,
				NotFoundResponse,
				InternalServerErrorResponse,
			]
		}),
		endpoint({
			path: "/recipes/{reciepId}",
			method: "patch",
			tags,
			parameters: [
				RecipeId,
			],
			responses: [
				UpdateRecipeResponse,
				BadRequestResponse,
				UnauthorizedResponse,
				ForbiddenResponse,
				NotFoundResponse,
				InternalServerErrorResponse,
			]
		}),
		endpoint({
			path: "/recipes/{recipeId}",
			method: "delete",
			tags,
			parameters: [
				RecipeId,
			],
			responses: [
				EmptyResponse,
				BadRequestResponse,
				UnauthorizedResponse,
				ForbiddenResponse,
				NotFoundResponse,
				InternalServerErrorResponse,
			]
		}),
	)
);

export default recipes;