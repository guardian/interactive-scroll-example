const $ = selector => document.querySelector(selector)
const $$ = selector => [].slice.apply(document.querySelectorAll(selector))

const listItems = $$('.name-list__item')

// function to check whether element is in top area of the screen

const isInView = element => {
	return element.getBoundingClientRect().top < window.innerHeight*2/3
} 

// code we want to run periodically to check all items

const checkItems = () => {

	console.log('checkItems called')

	const listItemsInView = listItems.filter( element => isInView(element) )

	const lastElementInView = listItemsInView.slice(-1)[0]

	listItems.forEach( element => {
		if(element !== lastElementInView) {
			element.classList.remove('name-list__item--hl')
		}
	})

	if(lastElementInView) { 
		lastElementInView.classList.add('name-list__item--hl')
	}

	// code runs itself again on next frame (ie a few milliseconds after)

	window.requestAnimationFrame(checkItems)

}

// kicks off our code initially

window.requestAnimationFrame(checkItems)