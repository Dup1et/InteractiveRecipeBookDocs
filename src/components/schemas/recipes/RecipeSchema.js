const RecipeSchema = {
	type: "object",
	properties: {
		type: {
			type: "string"
		},
		id: {
			type: "string"
		},
		attributes: {
			type: "object",
			properties: {
				title: {
					type: "string"
				},
				description: {
					type: "string"
				},
				preview: {
					type: "string"
				},
				cooking_time: {
					type: "integer"
				},
				portions: {
					type: "integer"
				},
			}
		}
	}
};

export default RecipeSchema;