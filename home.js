$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
		   $('.navbar').addClass("sticky");
		}else{
		   $('.navbar').removeClass("sticky");
		}
		
		if(this.scrollY > 500 && !$('.navbar .menu').hasClass("active")) {
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});


	//slide-up script

	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0}, 'slow');
	});


	//toggle menu/navbar script

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");

		if ($('.navbar .menu').hasClass("active")) {
        	   $('.scroll-up-btn').removeClass("show");
		   $('body').css("overflow", "hidden");
    		} else {
        	   if ($(window).scrollTop() > 500) {
             	   	$('.scroll-up-btn').addClass("show");
        	   }
		   $('body').css("overflow", "auto");
    		}
	});


	//owl carousel script

	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			1000: {
				items: 3,
				nav: false,
			}
		}
	});
});


const seconds = document.querySelector(".seconds .number"),
      minutes = document.querySelector(".minutes .number"),
      hours = document.querySelector(".hours .number"),
      days = document.querySelector(".days .number");

let secValue = 20,
    minValue = 42,
    hourValue = 11,
    dayValue = 34;

    const timeFunction = setInterval(() => {
	secValue--;

	if(secValue === 0) {
	 minValue--;
  	 secValue = 60;
	}

	if(minValue === 0) {
	 hourValue--;
  	 minValue = 60;
	}

	if(hourValue === 0) {
	 dayValue--;
  	 hourValue = 24;
	}

	if(dayValue === 0){
	 clearInterval(timeFunction);
	}

	seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
	minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
	hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
	days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

    }, 1000);


//video popup

function toggle(){
	var sneak = document.querySelector(".sneak")
	sneak.classList.toggle("active");
	var video = document.querySelector("video")
	var banner = document.querySelector(".short-content .banner")

	banner.classList.toggle("active");
	video.pause();
	video.currentTime= 0;

	if (!sneak.classList.contains("active")) {
        video.muted = true;
    	}
}


//for bg audio

window.addEventListener('click',() => {
	document.getElementById("bgMusic").play();

});



//for button-slide
const initSlider = () => {
	const imageList = document.querySelector(".slider .image-list");
	const slideButtons = document.querySelectorAll(".slider .slide-button");
	const sliderScrollbar = document.querySelector(".package .slider-scrollbar");
	const scrollbarThumb = document.querySelector(".scrollbar-thumb");
	const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


	scrollbarThumb.addEventListener("mousedown", (e) => {
		const startX = e.clientX;
		const thumbPosition = scrollbarThumb.offsetLeft;


 		const handleMouseMove = (e) => {
			const deltaX = e.clientX - startX;
			const newThumbPosition = thumbPosition + deltaX;
			const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;



		 	const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
			const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft


			scrollbarThumb.style.left = `${boundedPosition}px`;
			imageList.scrollLeft = scrollPosition; 
		}
	
		const handleMouseUp = () => {
			document.removeEventListener("mousemove" , handleMouseMove);
			document.removeEventListener("mouseup" , handleMouseUp);
		}	

	});


	slideButtons.forEach(button => {
		button.addEventListener("click", () => {
			const direction = button.id === "prev-slide" ? -1 : 1;
			const scrollAmount = imageList.clientWidth * direction;
			imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
		});
	});

	const handleSlideButtons = () => {
		slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
		slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
	}

	const updateScrollThumbPosition = () => {
		const scrollPosition = imageList.scrollLeft;
		const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
		scrollbarThumb.style.left = `${thumbPosition}px`;
	}


	imageList.addEventListener("scroll", () => {
		handleSlideButtons();
		updateScrollThumbPosition();
	})


} 


window.addEventListener("load", initSlider);





























