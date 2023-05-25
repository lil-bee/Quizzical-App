import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#4D5B9E",
		},
		background: {
			default: "#F5F7FB",
		},
	},
	typography: {
		title: {
			fontWeight: 700,
			fontSize: "32px",
			color: "#293264",
		},
	},
	shape: {
		borderRadius: "15px",
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "start" },
					style: {
						backgroundColor: "#4D5B9E",
						color: "#F5F7FB",
						fontSize: "16px",
						fontWeight: "500",
						":hover": {
							backgroundColor: "#313D79",
						},
						borderRadius: "8px",
						width: "193px",
						height: "52px",
						// Tambahkan properti gaya lainnya sesuai kebutuhan Anda
					},
				},
			],
			styleOverrides: {
				root: {
					textTransform: "capitalize",
				},
			},
		},
	},
});
