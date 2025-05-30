import { content } from "../constants/constants";
import { router } from "../router";
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

	const heroHand = document.createElement('div')
	heroHand.classList.add('hero-hand')
	heroHand.innerText = '👋'

	const heroHearth = document.createElement('div')
	heroHearth.classList.add('hero-hearth')
	heroHearth.innerText = '❤️'

	heroImageContainer.append(heroImage, heroHand, heroHearth);

	const heroText = document.createElement("p");
	heroText.classList.add("hero-text");
	heroText.textContent = content.HomeText;

	const heroButton = document.createElement("a");
	heroButton.classList.add("hero-button");
	heroButton.href = "trabajos";
	heroButton.textContent = "Ver trabajos";
	heroButton.addEventListener('click', (e) => {
		e.preventDefault()
		router('/trabajos');
	})

	container.append(h1, heroImageContainer, heroText, heroButton);
	return container;
};
