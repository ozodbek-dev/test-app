interface IConfig {
	APP_NAME: string;
	API_ROOT: string;
	AUTH_SECRET?: string;
	AUTH_SECRET_EXPIRATION: string;
}

const envConfing: IConfig = {
	APP_NAME: "Test Admin panel",
	API_ROOT: import.meta.env.VITE_ROOT_API,
	AUTH_SECRET: import.meta.env.AUTH_SECRET,
	AUTH_SECRET_EXPIRATION: import.meta.env.AUTH_SECRET_EXPIRATION,
};

export default envConfing;
