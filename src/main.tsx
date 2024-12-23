import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "App";
import ReduxProvider from "providers/ReduxProvider";
import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import Spinner from "shared/ui/Spinner";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: true,
			retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
			retry: false,
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<React.Suspense fallback={<Spinner />}>
		<ReduxProvider>
			<QueryClientProvider client={queryClient}>
				<Toaster />
				<App />
			</QueryClientProvider>
		</ReduxProvider>
	</React.Suspense>
);
