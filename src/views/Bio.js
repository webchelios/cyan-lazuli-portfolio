export const Bio = () => {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.classList.add("main-h1");
	h1.textContent = "Bio";

	const pBio = document.createElement('p')
	pBio.textContent = `Cyan Lázuli nació en 1991 en la provincia de Buenos Aires. Reside en el partido de la Matanza. Artista plástica, maquilladora artística, poeta y docente, se encuentra próxima a graduarse de profesora de Artes Visuales en la Escuela de arte Leopoldo Marechal donde se especializa en Pintura, pero además incursiona en el grabado, el dibujo, la instalación y el happening. Actualmente ingresó a la Licenciatura en Artes Visuales de la UNA y además cursó estudios en la carrera de Letras de la Universidad de Buenos Aires. Actualmente es una artista plástica y poeta emergente. Como poeta fue publicada por primera vez en el fanzine poético PUPO #02 por Ediciones del Ombligo y su primer poemario "Versos descarnados" fue publicado por la editorial Copo de Nieve.`
	pBio.style.maxWidth = "40rem"
	pBio.style.paddingTop = "1rem"

	container.append(h1, pBio);
	return container;
};
