import response from "../../../core/response";

const resourceListResponse = ({
	code,
	description,
	schema,
	example
}) => (response({
	code,
	description,
	schema: {
		type: "object",
		required: [
			"data"
		],
		properties: {
			data: {
				type: "array",
				items: schema
			}
		}
	},
	...(example && { 
		example: {
			data: [example]
		}
	})
}));

export default resourceListResponse;