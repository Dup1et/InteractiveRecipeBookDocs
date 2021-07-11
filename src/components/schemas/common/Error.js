const Error = {
	type: "object",
	properties: {
		errors: {
			type: "array",
			items: {
				type: "object",
				required: [
					"status",
					"title"
				],
				properties: {
					status: {
						type: "string"
					},
					title: {
						type: "string"
					},
					detail: {
						type: "string"
					}
				}
			}
		}
	}
};

export default Error;