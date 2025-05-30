export const Statement = () => {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.classList.add("main-h1");
	h1.textContent = "Mi statement:";

	const statementText = document.createElement('p')
	statementText.innerText = "Soy una artista plástica..."
	statementText.style.marginTop = ".5rem"

	container.append(h1, statementText);
	return container;
};
