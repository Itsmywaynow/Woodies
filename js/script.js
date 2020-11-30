const burger = document.querySelector('.burger')
const menu = document.querySelector('.main-nav')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const signBtn = document.querySelector('.sign-btn')
const signIcon = document.querySelector('.sign-icon')

burger.addEventListener('click', (event) => {
	event.preventDefault()
	toggleMenu()
	if (menu.contains('visible')) {
		window.addEventListener('click', event => {
			toggleMenu()
		})
	}
})

closeAuth.addEventListener('click', () => {
	modalAuth.classList.toggle('is-open')
})

signBtn.addEventListener('click', toggleAuth)

signIcon.addEventListener('click', toggleAuth)

burger.addEventListener('click', event => {  // позволяет по клику за пределами окна авторизации закрыть это самое окно
	if(event.target.classList.contains('visible')) {
		toggleMenu()
	}
})

modalAuth.addEventListener('click', event => {  // позволяет по клику за пределами окна авторизации закрыть это самое окно
	if(event.target.classList.contains('is-open')) {
		toggleAuth()
	}
})

function toggleAuth() {
	modalAuth.classList.toggle('is-open')
}

function toggleMenu() {
	menu.classList.toggle('visible')
}




$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
   			
	});
});




