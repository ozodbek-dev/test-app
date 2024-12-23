import axios from "axios";
import storage from "./storage";
import envConfing from "./config/env.config";
const axiosInterceptor = axios.create({
	baseURL: envConfing.API_ROOT,
	timeout: 30000, // 30 seconds
});

axiosInterceptor.defaults.headers.common["Accept"] = "application/json";
axiosInterceptor.interceptors.request.use(
	configs => {
		const password = storage.get("password") || "";
		if (password) {
			throw new Error("Authorization Required!");
		}
		return configs;
	},
	error => {
		return Promise.reject(error);
	}
);

const api = axiosInterceptor;

export default api;
