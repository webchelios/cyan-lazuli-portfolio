import './Statement.css'

export const Statement = () => {
	const container = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.classList.add("main-h1");
	h1.textContent = "Mi statement:";

	const statementText = document.createElement('p')
	statementText.innerText = `Soy Cyan Lázuli, oriunda de la provincia de Buenos Aires, Argentina. Tengo 34 años y estoy cerca de terminar el profesorado de Artes Visuales y comenzando la Licenciatura en Artes Visuales de la UNA. Anteriormente estudié Letras (otra de mis pasiones) pero me incliné finalmente por las Artes Plásticas, si bien hoy en día también me dedico a escribir poesía. En ese sentido soy una artista multifacética, ya que dedico mi labor artística tanto a las Artes Visuales (Pintura, Dibujo, Grabado, Instalación, Happening) como a la poesía y también la música. 

	Mis obras suelen surgir de las cosas que me gustan e interesan (en la mayoría de los casos suelo inspirarme en las artes en general; la música, la poesía, el cine, el diseño, la fotografía, etc.) como así también, éstas surgen de mis fantasías y situaciones cotidianas. Sin embargo, también busco interpelar y llamar a la reflexión al espectador de alguna manera, porque me resulta interesante la idea del arte no meramente como una creación individual del artista, sino también como algo que logra indagar en cuestiones más profundas de la vida y el mundo en general. 

	Soy una artista emergente, recientemente estoy dando a conocer mi obra y abrí una página de instagram dedicada exclusivamente a ella. Mi idea es darme a conocer en mi país y en el mundo, tengo varios proyectos de obras de grandes dimensiones en mente (en este caso instalaciones) que espero llevar a cabo en estos próximos años.`
	statementText.style.maxWidth = "60rem"

	statementText.style.marginTop = "1rem"

	container.append(h1, statementText);
	return container;
};
