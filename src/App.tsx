import "assets/styles/index.css";
import AppRoutes from "routes/AppRoutes";
import envConfing from "shared/config/env.config";

function App() {
	console.log(envConfing.API_ROOT)
	return <AppRoutes />;
}

export default App;
