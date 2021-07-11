import response from "../../../core/response";

const resourceResponse = ({
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
			data: schema
		}
	},
	...(example && { 
		example: {
			data: example
		}
	})
}));

export default resourceResponse;