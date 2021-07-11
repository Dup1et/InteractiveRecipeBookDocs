const UserSchema = {
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
				username: {
					type: "string"
				},
				avatar: {
					type: "string"
				}
			}
		}
	}
};

export default UserSchema;