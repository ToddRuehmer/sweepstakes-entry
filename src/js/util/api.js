import axios from 'axios';

const api = (function () {
    const setUpAxios = () => {
        axios.interceptors.response.use(undefined, function (error, res) {
            const message = error.response.data.ExceptionMessage;
            const errorEvent = new CustomEvent("httpError", { detail: message });
            window.dispatchEvent(errorEvent);
            return Promise.reject(error);
        })
    }

    const getAuthToken = () => {
        return axios(`${process.env.API_URL}/auth/issueToken`, {
            method: 'POST'
        }).then((jwt) => {
            localStorage.setItem('jwt', jwt.data)
            axios.defaults.headers.common['AccessToken'] = jwt.data;
        });
    }

    const getStore = (storeId) => {
        return axios(`${process.env.API_URL}/store/index?storeId=${storeId}`);
    }

    const getPrize = (gameId, email) => {
        const body = {
            emailAddress: email,
            gameId: gameId
        }

        return axios(`${process.env.API_URL}/game/getPrize`, {
            method: 'POST',
            data: body
        });
    }


    const claimPrize = (prizeId, email) => {
        const body = {
            emailAddress: email,
            prizeId: prizeId
        }

        return axios(`${process.env.API_URL}/prize/claimPrize`, {
            method: 'POST',
            data: body
        });
    }

    const submitEmail = (email) => {
        const body = {
            emailAddress: email
        }

        return axios(`${process.env.API_URL}/email/saveEmail`, {
            method: 'POST',
            data: body
        });
    }


    return {
        setUpAxios: setUpAxios,
        getAuthToken: getAuthToken,
        submitEmail: submitEmail,
        getStore: getStore,
        getPrize: getPrize,
        claimPrize: claimPrize
    };
}());
export default api;