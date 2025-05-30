import "./Footer.css";

export const Footer = () => {
	const footerContainer = document.createElement("footer");
	footerContainer.innerText = `Cyan Lázuli ${new Date().getFullYear()}`;
	return footerContainer;
};
