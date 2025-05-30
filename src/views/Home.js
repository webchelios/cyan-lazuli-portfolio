import { content } from "../constants/constants";
import "./Home.css";

export const Home = () => {
	const container = document.createElement("div");
	container.classList.add("home-container");

	const h1 = document.createElement("h1");
	h1.classList.add("main-h1");
	h1.textContent = "Bienvenido 🥰";

	const heroImageContainer = document.createElement("div");
	heroImageContainer.classList.add("hero-img");

	const heroImage = document.createElement("img");
	heroImage.setAttribute("src", "/images/ceci-vectorizada.jpg");

	heroImageContainer.appendChild(heroImage);

	const heroText = document.createElement("p");
	heroText.classList.add("hero-text");
	heroText.textContent = content.HomeText;

	const heroButton = document.createElement("a");
	heroButton.classList.add("hero-button");
	heroButton.href = "/trabajos";
	heroButton.textContent = "Ver trabajos";

	container.append(h1, heroImageContainer, heroText, heroButton);
	return container;
};
