import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import "./style.css";

export const renderSite = (page, element = document.querySelector("#app")) => {
	element.innerHTML = "";

	element.append(Navbar());

	const notification = document.createElement("div");
	notification.id = "notification";
	element.append(notification);

	const mainContent = document.createElement("main");
	mainContent.classList.add("main-content");
	mainContent.append(page);
	element.append(mainContent);

	element.append(Footer());

	return element;
};

export const firstRender = (app) => {
	return renderSite(Home(), app);
};

export const renderPage = (pageName) => {
	const mainContent = document.querySelector(".main-content");
	mainContent.innerHTML = "";
	mainContent.append(pageName);
};
