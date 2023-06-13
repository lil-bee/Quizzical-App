import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import blobBawah from "../assets/blob_bawah.svg";
import blobAtas from "../assets/blob_atas.svg";

function Start() {
	const navigate = useNavigate();

	return (
		<>
			<Box
				sx={{
					height: "100vh",
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<img
					style={{
						marginTop: "auto",
					}}
					src={blobBawah}
					alt=""
				/>
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
				<img
					style={{
						marginBottom: "auto",
					}}
					src={blobAtas}
					alt=""
				/>
			</Box>
		</>
	);
}
export default Start;
