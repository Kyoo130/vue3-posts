import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

// development : http://localhost:3000/posts/
// production : http://localhost:5001/posts/
// http://127.0.0.1:5173/
// http://localhost:3000
