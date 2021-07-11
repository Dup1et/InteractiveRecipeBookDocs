const ResourceIdentifier = {
	type: "object",
	required: [
		"type",
		"id"
	],
	properties: {
		type: {
			type: "string"
		},
		id: {
			type: "string"
		}
	}
};

export default ResourceIdentifier;