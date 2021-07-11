import merge from "lodash/merge";

const endpoint = ({
	path,
	method,
	tags = [],
	parameters = [],
	responses = []
}) => ({
	[path]: {
		[method]: {
			tags,
			parameters,
			responses: merge(...responses)
		}
	}
});

export default endpoint;