import paths from "./paths";

const api = {
	openapi: "3.0.0",

	info: {
		title: "InteractiveRecipeBookApi",
		description: "InteractiveRecipeBook api spec",
		version: "1.0.0"
	},

	servers: [
		{
			url: "irb.dev/v1"
		}
	],

	paths,
};

export default api;