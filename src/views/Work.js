import { ModalWork } from "../components/ModalWork";
import { pieces } from "../constants/constants";
import './Work.css'

export const Work = () => {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.classList.add("main-h1");
	h1.textContent = "Galería con mi arte";

	const galleryContainer = document.createElement('div')
	galleryContainer.classList.add('gallery-container')

	for (const piece in pieces) {
		const pieceCard = document.createElement('div')
		pieceCard.classList.add('piece-img')

		const pieceImg = document.createElement('img')
		pieceImg.src = `/images/${pieces[piece]}`
		pieceImg.addEventListener('click', () => {
			container.prepend(ModalWork(pieces[piece]))
		})

		pieceCard.append(pieceImg)

		galleryContainer.append(pieceCard)
	}


	container.append(h1, galleryContainer);
	return container;
};
