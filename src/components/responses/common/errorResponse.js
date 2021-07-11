import response from "../../../core/response";
import Error from "../../schemas/common/Error";

const errorResponse = ({
	code,
	title,
	detail
}) => (
	response({
		code,
		description: title,
		schema: Error,
		example: {
			errors: [
				{
					code,
					title,
					...(detail && { detail })
				}
			]
		}
	})
);

export default errorResponse;