const buttonSubmit = document.getElementById('btn-submit');
const inputEmail = document.getElementById('inpt-email');
const error = document.querySelectorAll('.error');

buttonSubmit.addEventListener('click', () => {
	const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const emailValue = inputEmail.value;
	if (!emailExp.test(emailValue) || emailValue === '') {
		error.forEach((el) => el.classList.add('show'));
		inputEmail.classList.add('unvalid');
	} else {
		error.forEach((el) => el.classList.remove('show'));
		inputEmail.classList.remove('unvalid');
	}
});
