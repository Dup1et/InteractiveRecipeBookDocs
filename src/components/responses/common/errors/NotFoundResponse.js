import errorResponse from "../errorResponse";

const NotFoundResponse = errorResponse({
	code: "404",
	title: "Not Found",
});

export default NotFoundResponse;