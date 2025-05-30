import { firstRender } from "./App.js";
import { router } from "./router.js";

const app = document.querySelector("#app");

document.addEventListener("DOMContentLoaded", () => {
	const initialPath = window.location.pathname;
	router(initialPath);

	window.addEventListener("popstate", () => {
		const currentPath = window.location.pathname;
		router(currentPath);
	});
});

firstRender(app);
