import errorResponse from "../errorResponse";

const InternalServerErrorResponse = errorResponse({
	code: "500",
	title: "Internal Server Error",
});

export default InternalServerErrorResponse;