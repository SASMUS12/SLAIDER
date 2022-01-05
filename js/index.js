let images = [{
	url: "./images/slider_01.jpg",
	link: "Rostov-on-Don, admiral",
	city: "Rostov-on-Don,<br> LCD admiral",
	area: "81 m<sup>2</sup>",
	time: "3.5 months",
}, {
	url: "./images/slider_02.jpg",
	link: "Sochi Thieves",
	city: "Sochi<br> Thieves",
	area: "105 m<sup>2</sup>",
	time: "4 months",
}, {
	url: "./images/slider_03.jpg",
	link: "Roctov-on-Don Patriotic",
	city: "Roctov-on-Don<br> Patriotic",
	area: "93 m<sup>2</sup>",
	time: "3 months",
}];

function initSlider() {
	if (!images || !images.length) return;

	let sliderImages = document.querySelector(".slider__images");
	let sliderArrows = document.querySelector(".dots");
	let sliderDots = document.querySelector(".slider__dots");
	let sliderLinks = document.querySelector(".projects-list")

	let mobileImages = document.querySelector(".mobile__images");
	let mobileArrows = document.querySelector(".projects__mobile__image");

	initImages();
	initArrows();
	initDots();
	changeLinks();
	initItems();
	changeItems();

	function initImages() {
		images.forEach((image, index) => {
			let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
			let mobileImageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;

			sliderImages.innerHTML += imageDiv;
			mobileImages.innerHTML += mobileImageDiv;
		});
	}

	function initArrows() {
		sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
			arrow.addEventListener("click", function () {
				let curNumber = +sliderImages.querySelector(".active").dataset.index;
				let nextNumber;
				if (arrow.classList.contains("left__arrow")) {
					nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
				} else {
					nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
			});
		});

		mobileArrows.querySelectorAll(".mobile__arrow").forEach(arrow => {
			arrow.addEventListener("click", function () {
				let curNumber = +mobileImages.querySelector(".active").dataset.index;
				let nextNumber;
				if (arrow.classList.contains("mobile__arrow__right")) {
					nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
				} else {
					nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
			});
		});
	}

	function initDots() {
		images.forEach((image, index) => {
			let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
			sliderDots.innerHTML += dot;
		});
		sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
			dot.addEventListener("click", function () {
				moveSlider(this.dataset.index);
			})
		})
	}

	function changeLinks() {
		images.forEach((image, index) => {
			let link = `<li class="projects-menu__item"><a class="projects-menu__link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].link}</a></li>`;
			sliderLinks.innerHTML += link;
		})

		sliderLinks.querySelectorAll(".projects-menu__link").forEach(link => {
			link.addEventListener("click", function () {
				moveSlider(this.dataset.index);
			})
		})
	}

	function initItems() {
		let sliderCity = document.querySelector(".city__item")
		let sliderArea = document.querySelector(".area__item")
		let sliderTime = document.querySelector(".time__item")

		let cityDiv = `<span class="projects__item__text">${images[0].city}</span>`;
		let areaDiv = `<span class="projects__item__text">${images[0].area}</span>`;
		let timeDiv = `<span class="projects__item__text">${images[0].time}</span>`;

		sliderCity.innerHTML = cityDiv;
		sliderArea.innerHTML = areaDiv;
		sliderTime.innerHTML = timeDiv;
	}

	function changeItems(index) {
		let city = document.querySelector(".city__item")
		city.innerHTML = `<span class="projects__item__text">${images[index].city}</span>`;

		let area = document.querySelector(".area__item")
		area.innerHTML = `<span class="projects__item__text">${images[index].area}</span>`;

		let time = document.querySelector(".time__item")
		time.innerHTML = `<span class="projects__item__text">${images[index].time}</span>`;
	}

	function moveSlider(index) {
		sliderImages.querySelector(".active").classList.remove("active");
		sliderImages.querySelector(".n" + index).classList.add("active");

		sliderDots.querySelector(".active").classList.remove("active");
		sliderDots.querySelector(".n" + index).classList.add("active");

		sliderLinks.querySelector(".active").classList.remove("active");
		sliderLinks.querySelector(".n" + index).classList.add("active");

		mobileImages.querySelector(".active").classList.remove("active");
		mobileImages.querySelector(".n" + index).classList.add("active");

		changeItems(index);
	}

}

document.addEventListener("DOMContentLoaded", initSlider);