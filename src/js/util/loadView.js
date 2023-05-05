
const loadView = (view) => {
	const html = require('html-loader!../../views/' + view + '.html');

	document.getElementById(view).innerHTML = html.default;
};

export default loadView;