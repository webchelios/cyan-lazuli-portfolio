export const NoPage = () => {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.classList.add("main-h1");
	h1.textContent = "404 not found";

	container.append(h1);
	return container;
};
