import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Start from "./routes/start";
import Question from "./routes/question";
import { theme } from "./config/theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes";

function App() {
	const [count, setCount] = useState(0);

	//2 routes 1- start page 2- question page
	//MUI
	//React Router
	// fetch2a => axios? react query?

	//START PAGE

	//QUESTION PAGE
	//encoded2an disoalnya
	//bikin pilihan jawaban acak
	// bisa milih satu aje
	// logic cek

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<AppRoutes />
			</ThemeProvider>
		</>
	);
}

export default App;

