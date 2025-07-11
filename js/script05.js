$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})
})
