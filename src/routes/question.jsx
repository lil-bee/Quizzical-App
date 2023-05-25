import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Question() {
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
					<Typography variant="title">Quizzical Question</Typography>
					<Button onClick={() => navigate("/")} variant="start">
						Back
					</Button>
				</Box>
			</Box>
		</>
	);
}
export default Question;
