import axios from "axios";

async function getQuestion() {
	try {
		const response = await axios.get(
			"https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
		);
		console.log(response);

		return Array.isArray(response.data.results) ? response.data.results : [];
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

export default getQuestion;
