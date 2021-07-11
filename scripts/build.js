import api from "../src";
import fs from "fs";
import process from "process";

const data = JSON.stringify(api, null, 2);

fs.writeFile(process.cwd() + "/api.json", data, { flag: "w" }, function (error) {
	if (error) {
		console.error(error);
		return;
	}
	console.log("Success!");
});