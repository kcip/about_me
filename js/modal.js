//modal
const body = document.getElementById('body');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('close');
const modalOverlay = document.getElementById('modal');
const modalWrapper = document.querySelector('.modal--wrapper');

openModalBtn.addEventListener('click', (e)=> {
	e.preventDefault();
	addModal();
});
closeModalBtn.addEventListener('click', (e)=> {
	e.preventDefault();
	removeMondal();
	const clearStyles = setTimeout(clear, 1000);
	clearStyles();

});
const addModal = ()=> {
	body.classList.add('modal--open');
	modalOverlay.classList.add('open');
	modalWrapper.classList.add('scaleup');
}

const removeMondal = ()=> {
	modalWrapper.classList.add('close');
	modalOverlay.classList.add('fade');	
}
function clear(){
	body.classList.remove('modal--open');
	body.classList.remove('fade');

	modalOverlay.classList.remove('open');
	modalOverlay.classList.remove('fade');
	modalWrapper.classList.remove('scaleup');
	modalWrapper.classList.remove('close');
}













