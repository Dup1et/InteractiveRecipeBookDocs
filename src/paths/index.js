import merge from "lodash/merge";
import recipes from "./recipes";

const paths = merge(
	recipes({ tags: ["recipes"] })
);

export default paths;