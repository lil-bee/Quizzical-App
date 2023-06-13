import { Box, Button, Typography } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import getQuestion from "../api/get-question";
import { useQuery } from "react-query";
import { decode } from "html-entities";
import { useState } from "react";

function Question() {
	const navigate = useNavigate();
	const [answers, setAnswers] = useState([]);

	const [newData, setNewData] = useState([]);
	const [newCorrectAnswer, setNewCorrectAnswer] = useState([]);
	const [cekJawaban, setCekJawaban] = useState(false);

	const handleChange = (questionIndex, selectedAnswer) => {
		const newAnswers = [...answers];
		newAnswers[questionIndex] = selectedAnswer;
		setAnswers(newAnswers);
	};

	function shuffleArray(array) {
		const newArray = [...array]; // Duplikat array yang ada
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Tukar elemen
		}
		return newArray;
	}

	const { data, status } = useQuery("question-list", () => getQuestion(), {
		onError: () => {
			console.log("hayuu error");
		},
		onSuccess: (data) => {
			console.log("bisa coo");

			const newArr = data.map(
				({ question, correct_answer, incorrect_answers }) => ({
					correct_answer,
					question,
					answers: shuffleArray([correct_answer, ...incorrect_answers]),
				})
			);
			const newCorr = data.map(({ correct_answer }) => correct_answer);
			setNewCorrectAnswer(newCorr);
			setNewData(newArr);
			console.log(newArr);
		},
		retry: false,
		refetchOnWindowFocus: false,
	});

	console.log(answers);
	console.log(newCorrectAnswer);

	if (status === "loading") {
		return <Typography>loading...</Typography>;
	}

	return status === "success" && data.length > 0 ? (
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

					{newData.map((item, index) => (
						<>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
								key={index}>
								<Typography variant="question">
									{decode(item.question)}
								</Typography>
								<div style={{ display: "flex", flexDirection: "row" }}>
									{item.answers.map((answer, idx) => (
										<ToggleButtonGroup
											value={answers[index]}
											exclusive
											onChange={(event, selectedAnswer) => {
												handleChange(index, selectedAnswer);
											}}
											sx={{
												display: "flex",
												flexDirection: "row",
											}}
											aria-label="text alignment">
											<ToggleButton
												key={index}
												value={answer}
												onClick={() => {
													console.log(index);
													console.log(answers[index]);
													console.log(newCorrectAnswer[index]);
													console.log(answer[index]);
													console.log(answer);
													console.log(cekJawaban);
												}}
												sx={{
													...(cekJawaban && {
														"&.Mui-selected": {
															//	backgroundColor: "#D6DBF5",
															borderStyle: "none",
															backgroundColor:
																answers[index] === newCorrectAnswer[index]
																	? "#94D7A2"
																	: "#F8BCBC",
															opacity:
																answers[index] !== newCorrectAnswer[index]
																	? 0.5
																	: 1,
														},
														"&:not(.Mui-selected)": {
															opacity: 0.5,
														},
													}),
												}}
												aria-label="left aligned">
												<Typography variant="pilihanJawaban">
													{decode(answer)}
												</Typography>
											</ToggleButton>
										</ToggleButtonGroup>
									))}
								</div>
							</div>
						</>
					))}
					<Button onClick={() => navigate("/")} variant="start">
						Back
					</Button>
					<Button
						onClick={() => {
							setCekJawaban(true);
							console.log(getQuestion());
						}}
						variant="start">
						test
					</Button>
				</Box>
			</Box>
		</>
	) : (
		<Typography>error paling bawah</Typography>
	);
}
export default Question;
