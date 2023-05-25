import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Start() {
	const navigate = useNavigate();

	return (
		<>
			<Box
				sx={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "30px",
					}}>
					<Typography variant="title">Quizzical</Typography>
					<Button onClick={() => navigate("/quiz")} variant="start">
						Start Quiz
					</Button>
				</Box>
			</Box>
		</>
	);
}
export default Start;
