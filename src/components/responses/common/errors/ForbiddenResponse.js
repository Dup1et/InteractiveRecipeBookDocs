import errorResponse from "../errorResponse";

const ForbiddenResponse = errorResponse({
	code: "403",
	title: "Forbidden",
});

export default ForbiddenResponse;