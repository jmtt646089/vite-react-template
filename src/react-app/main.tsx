import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
	  	<h1 class="text-3xl font-bold underline">
    	Hello this is done by tailwind css in main.tsx!
		</h1>
		<App />
	</StrictMode>,
);
