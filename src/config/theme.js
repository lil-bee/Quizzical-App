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
		question: {
			fontWeight: 700,
			fontSize: "16px",
			color: "#293264",
		},
		pilihanJawaban: {
			fontWeight: 500,
			fontSize: "11px",
			color: "#293264",
			textTransform: "capitalize",
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
		MuiToggleButton: {
			styleOverrides: {
				root: {
					color: "#4D5B9E",
					margin: "5px 35px 0 0",
					padding: "2px 8px",
					width: "max-content",
					borderStyle: "none",
					border: "0.79px solid !important",
					borderRadius: "13px!important",
					"&.Mui-selected": {
						//	backgroundColor: "#D6DBF5",
						borderStyle: "none",
					},
					"&:hover": {
						backgroundColor: "#D6DBF5",
					},
				},
			},
		},
	},
});
