let slides = document.getElementsByClassName("slider__slide");
let navDots = Array.from(document.getElementsByClassName("slider__navlink"));

let nextButton = document.getElementById("nav-button--next");
let prevButton = document.getElementById("nav-button--prev");

let currentSlide = 0;
let nextSlide = 0;

function changeSlide(newSlide) {
	function parseNextSlide() {
		nextSlide = (nextSlide + slides.length) % slides.length;
	}

	function toggleClasses(className, ...elementArr) {
		if (elementArr.length === 0) return;

		elementArr.forEach((element) => {
			element.classList.toggle(className);
		});
	}

	nextSlide = newSlide;
	parseNextSlide();
	toggleClasses(
		"active",
		slides[currentSlide],
		navDots[currentSlide],
		slides[nextSlide],
		navDots[nextSlide]
	);

	currentSlide = nextSlide;
}

// Handler
nextButton.addEventListener("click", () => {
	changeSlide(currentSlide + 1);
});

prevButton.addEventListener("click", () => {
	changeSlide(currentSlide - 1);
});

navDots.forEach((bullet, bulletIndex) => {
	bullet.addEventListener("click", () => {
		console.log(currentSlide, bulletIndex);
		if (currentSlide !== bulletIndex) {
			changeSlide(bulletIndex);
		}
	});
});
