const selector = {
	ACCORDION: '.js-accordion',
	ACCORDION_HEAD: '.js-accordion-head',
	ACCORDION_BODY: '.js-accordion-body',
	ACCORDION_CONTENT: '.js-accordion-content',
}

const state = {
	ACCORDION_OPENED: 'is-opened',
}

const initAccordion = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll(selector.ACCORDION_HEAD), (item) => {
      item.addEventListener('click', clickListener)
    }
  );
}

const clickListener = function(e) {
	const accordion = this.closest(selector.ACCORDION)
	const accordionBody = accordion.querySelector(selector.ACCORDION_BODY)
	const height = accordion.querySelector(selector.ACCORDION_CONTENT).offsetHeight

	if (accordion.hasClass(state.ACCORDION_OPENED)) {
		accordion.classList.remove(state.ACCORDION_OPENED)
		accordionBody.removeAttribute('style')
	} else {
		accordion.classList.add(state.ACCORDION_OPENED)
		accordionBody.style.height = `${height}px`
	}
}

export default initAccordion
