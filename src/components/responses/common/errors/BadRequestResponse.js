import errorResponse from "../errorResponse";

const BadRequestResponse = errorResponse({
	code: "400",
	title: "Bad Request",
});

export default BadRequestResponse;