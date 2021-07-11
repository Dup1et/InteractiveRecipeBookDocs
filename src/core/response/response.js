const response = ({
	code,
	description,
	schema,
	example,
}) => ({
	[code]: {
		description,
		content: {
			"application/json": {
				schema,
				...(example && { example })
			}
		}
	}
});

export default response;