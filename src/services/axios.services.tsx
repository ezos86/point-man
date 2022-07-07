import axios from 'axios';

let baseUrl = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseUrl = 'http://api.timezonedb.com/v2.1'; // would be local URL if api is running locally or staging.
} else {
    baseUrl = 'http://api.timezonedb.com/v2.1';
}

const api = axios.create({
    baseURL: baseUrl,
    params: {
        key: 'B034SY22MXD0',
        format: 'json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong'
        )
);

export default api;
