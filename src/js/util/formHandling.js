
const formHandling = () => {
	const form = document.getElementById('form');
	const emailInput = form.getElementsByClassName('email')[0];
	const submitInput = form.getElementsByClassName('submit-button')[0];

	form.onsubmit = function(){
		
		
		if(validateEmail(emailInput)) {
			sendData();
		} else {
			emailInput.classList.add('error');
			submitInput.classList.add('error');
		}

		return false;
	};
};
const validateEmail = (field) => {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(field.value)) {
		return (true)
	}
	return (false)
};

const sendData = () => {
	console.log('sent');
};

export default formHandling;