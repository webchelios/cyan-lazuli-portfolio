export const Statement = () => {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.classList.add("main-h1");
	h1.textContent = "Mi statement:";

	container.append(h1);
	return container;
};
