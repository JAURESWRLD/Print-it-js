const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let index = 0;

const leftArrow = document.querySelector('#banner .arrow_left');
const rightArrow = document.querySelector('#banner .arrow_right');
const dotsContainer = document.querySelector('.dots')
const imgElement  = document.querySelector('.banner-img');
const txtElement = document.querySelector('#banner p');



function createDots() {
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        
        if (i === 0) dot.classList.add('dot_selected');
       
        dot.addEventListener('click', () => {
            updateCarousel(i);
        });

        dotsContainer.appendChild(dot);
    });
}
createDots();


function updateCarousel() {
    // 1. Changer l'image et le texte
    imgElement.src = "./assets/images/slideshow/" + slides[index].image;
    txtElement.innerHTML = slides[index].tagLine;

	const allDots = document.querySelectorAll('.dot');
    // 2. Changer le bullet point actif
    allDots.forEach(dot => dot.classList.remove("dot_selected"));
    allDots[index].classList.add("dot_selected");
}

// Clic flèche droite
leftArrow.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Clic flèche gauche
rightArrow.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});
