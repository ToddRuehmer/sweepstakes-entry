// css import
import '../css/style.scss';
import api from './util/api';
import dateFunctions from './util/dateFunctions';
import loadView from './util/loadView';
import formHandling from './util/formHandling';

api.setUpAxios();
const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
loadApp();
function loadApp() {
	const played = playedWithinLastDay();
	if(played) {
		return;
	} else {
		loadView('entry-form');
		formHandling();
	}
}
function playedWithinLastDay() {
    const lastPlayed = localStorage.getItem('lastPlayed');
    if (lastPlayed) {
        const lastPlayedDate = new Date(lastPlayed);
        if (dateFunctions.isSameDay(new Date(), lastPlayedDate)) {
            errorText.innerText = 'You have already played today, please come back tomorrow',
            error.style.display = 'block';
            return true;
        }
    }
    return false;
}