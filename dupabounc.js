const objects = document.querySelectorAll('main > .bouncing')

const velocityX = 4, velocityY = 4
let width, height

const reset = () => {
	width = window.innerWidth
	height = window.innerHeight

	objects.forEach(el => {
		el.style.left = '50vw'
		el.style.top = '50vh'

		el.velocityX = 2 * (Math.random() - 0.5) * velocityX
		el.velocityY = 2 * (Math.random() - 0.5) * velocityY
	})
}

const bounce = el => {
	let rect = el.getBoundingClientRect()

	let left = rect.x
	let top = rect.y

	if (left + rect.width >= width || left <= 0) el.velocityX = -el.velocityX
	if (top + rect.height >= height || top <= 0) el.velocityY = -el.velocityY

	el.style.left = rect.x + el.velocityX + 'px'
	el.style.top = rect.y + el.velocityY + 'px'
}

const frame = () => {
	objects.forEach(el => bounce(el))

	window.requestAnimationFrame(frame)
}

if ((new URLSearchParams(window.location.search)).has('gay')) {
	document.querySelector('body').style.background =
		'linear-gradient(#e74d5c, #ec7d6d, #f6bf71, #47ed8d, #3ec0d4, #746de8'
}

reset()

window.addEventListener('resize', reset)
window.requestAnimationFrame(frame)
