import errorResponse from "../errorResponse";

const UnauthorizedResponse = errorResponse({
	code: "401",
	title: "Unauthorized",
});

export default UnauthorizedResponse;