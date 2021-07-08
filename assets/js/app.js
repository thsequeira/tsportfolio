const seccionesPagina = new fullpage('#fullpage', {
	// ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
	autoScrolling: true, // Se activa el scroll.
	fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
	fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
	easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
	scrollingSpeed: 800, // Velocidad del scroll. Valores: en milisegundos.
	css3: true, // Si usara CSS3 o javascript.
	easingcss3: 'ease-out', // Curva de velocidad del efecto.
	loopBottom: false,
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
	navigation: true, // Muesta la barra de navegación.
	menu: '#menu', // Menu de navegación.
	anchors: ['Inicio', 'Proyectos', 'Contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
	navigationTooltips: ['', '', ''], // Tooltips que mostrara por cada boton.
	showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
	verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
	controlArrows: true, // Flechas del slide
	slidesNavigation: false, // Indicadores del slide
	afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto'){
			document.querySelector('.footer h2').style.opacity = 1;
		}
	}
});

const hamburger = document.getElementsById('hamburger');
const navUL = document.getElementsById('menu');

hamburger.addEventListener('click', () => {
	navUL.classList.toggle('show');
});