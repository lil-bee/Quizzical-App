import { Box, Button, IconButton, Typography } from "@mui/material";
import { ToggleButton } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import getQuestion from "../api/get-question";
import { useQuery } from "react-query";
import { decode } from "html-entities";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import blobBawah from "../assets/blob_bawah.svg";
import blobAtas from "../assets/blob_atas.svg";

function Question() {
	const navigate = useNavigate();
	const [answers, setAnswers] = useState([]);

	const [newData, setNewData] = useState([]);
	const [newCorrectAnswer, setNewCorrectAnswer] = useState([]);
	const [cekJawaban, setCekJawaban] = useState(false);
	const [errMessage, setErrMessage] = useState("");

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

	const { data, status, refetch } = useQuery(
		"question-list",
		() => getQuestion(),
		{
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
		}
	);

	console.log(answers);
	console.log(newCorrectAnswer);

	const compareArr = (a, b) => {
		let corAns = 0;
		for (let i = 0; i < a.length; i++) {
			if (a[i] === b[i]) corAns++;
		}
		return corAns;
	};
	function checkArr(arr) {
		if (arr.length === 0) return false;
		if (arr.length !== 5) return false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == undefined) return false;
		}
		return true;
	}

	if (status === "loading") {
		return <Typography alignSelf="center">loading...</Typography>;
	}

	return status === "success" && data.length > 0 ? (
		<>
			<IconButton
				onClick={() => navigate("/")}
				sx={{ position: "absolute", m: "70px 0 0 40px" }}>
				<ArrowBackIcon />
			</IconButton>
			<Box
				sx={{
					height: "100vh",
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
						height: "100vh",
						display: "flex",
						gap: "20px",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Typography variant="title">Quizzical Question</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
							gap: "30px",
							mb: "20px",
						}}>
						{newData.map((item, index) => (
							<>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "start",
										alignItems: "start",
									}}
									key={index}>
									<Typography sx={{ mb: "2px" }} variant="question">
										{decode(item.question)}
									</Typography>
									<div style={{ display: "flex", flexDirection: "row" }}>
										{item.answers.map((answer, idx) => (
											<>
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
																	border: "none",
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
																	opacity:
																		answer == newCorrectAnswer[index] ? 1 : 0.5,
																	backgroundColor:
																		answer == newCorrectAnswer[index]
																			? "#94D7A2"
																			: null,
																},
															}),
														}}
														aria-label="left aligned">
														<Typography variant="pilihanJawaban">
															{decode(answer)}
														</Typography>
													</ToggleButton>
												</ToggleButtonGroup>
											</>
										))}
									</div>
								</div>
								<hr
									style={{
										width: "100%",
										border: "0.79px solid #DBDEF0",
										marginTop: "-10px",
										marginBottom: "-15px",
									}}
								/>
							</>
						))}
					</Box>
					{!cekJawaban && (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								gap: "15px",
							}}>
							{errMessage && (
								<Typography variant="pilihanJawaban">{errMessage}</Typography>
							)}
							<Button
								onClick={() => {
									if (!checkArr(answers)) {
										setErrMessage("please select all answer choices");
									} else {
										setErrMessage("");
										setCekJawaban(true);
									}
								}}
								variant="question">
								Check Answers
							</Button>
						</div>
					)}

					{cekJawaban && (
						<>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									gap: "15px",
								}}>
								<Typography variant="question">
									You scored {compareArr(answers, newCorrectAnswer)}/5 correct
									answers
								</Typography>
								<Button
									onClick={() => {
										setCekJawaban(false);
										setErrMessage("");
										setAnswers([]);
										refetch();
									}}
									variant="question">
									Play Again
								</Button>
							</div>
						</>
					)}
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
	) : (
		<Typography>error </Typography>
	);
}
export default Question;
