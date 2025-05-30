import { renderPage } from "./App";
import { Bio } from "./views/Bio";
import { Blog } from "./views/Blog";
import { Cv } from "./views/Cv";
import { Home } from "./views/Home";
import { NoPage } from "./views/NoPage";
import { Statement } from "./views/Statement";
import { Work } from "./views/Work";

export const router = async (route) => {
	switch (route) {
		case "/":
			renderPage(Home());
			break;
		case "/statement":
			renderPage(Statement());
			break;
		case "/trabajos":
			renderPage(Work());
			break;
		case "/blog":
			renderPage(Blog());
			break;
		case "/bio":
			renderPage(Bio());
			break;
		case "/cv":
			renderPage(Cv());
			break;
		default:
			renderPage(NoPage());
			break;
	}
};

export const paths = [
	{
		route: "/",
		name: "Inicio",
	},
	{
		route: "/statement",
		name: "Statement",
	},
	{
		route: "/trabajos",
		name: "Trabajos",
	},
	{
		route: "/blog",
		name: "Blog",
	},
	{
		route: "/bio",
		name: "Bio",
	},
	{
		route: "/cv",
		name: "CV",
	},
];
