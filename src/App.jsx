import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Start from "./routes/start";
import Question from "./routes/question";
import { theme } from "./config/theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
	const [count, setCount] = useState(0);
	const queryClient = new QueryClient();

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
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<AppRoutes />
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;

