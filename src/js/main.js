import { questionRegistry } from "./questionRegistry.js";

let json = [
	{
		text: "Pilih nombor paling besar",
		type: "pick",
		options: [8, 5],
		answer: 8
	},
	{
		text: "8 perlukan berapa untuk jadi 10",
		type: "needed",
		content: {
			pelengkap: 2,
			options: [8, 5],
		},
		options: [2, 3, 5],
		answer: 2
	},
	{
		text: "2 itu kita akan ambil dari __",
		type: "pecah",
		options: [6, 5, 4],
		content: {
			pelengkap: 2,
			options: [8, ""],
		},
		answer: 5
	},
	{
		text: "5 akan dipecahkan kepada 2 dan __",
		type: "baki",
		options: [2, 3, 5],
		content: {
			pelengkap: 2,
			baki: 3,
			options: [8, 5],
		},
		answer: 3
	},
	{
		text: "8 tambah 2 akan dapat __",
		type: "gabung",
		options: [10, 11, 12],
		content: {
			baki: 3,
			pelengkap: 2,
			options: [8, 5],
		},
		answer: 10
	},
	{
		text: "10 tambah 3 akan dapat?",
		type: "sum",
		options: [13, 11, 12],
		content: {
			baki: 3,
			pelengkap: 2,
			options: [8, 5],
		},
		answer: 13
	},
	{
		text: "8 tambah 5 akan dapat __",
		type: "summery",
		options: [13, 11, 12],
		content: {
			baki: 3,
			pelengkap: 2,
			options: [8, 5],
		},
		answer: 13
	},
]

let state = {
	lenghtDialog: json.length,
	index: 0,
	numberPicked: null,
	elementPicked: null,
	currentData: null,
	isReset: false,
	question: null
}

let ui = {
	barFill: document.querySelector(".barFill"),
	viewport: document.getElementById("viewport"),
	btnCheck: document.querySelector(".btnCheck"),
	btnNext: document.querySelector(".btnNext"),
	btnContinue: document.querySelector(".btnContinue"),
	footer: document.querySelector("footer"),
	textFooter: document.querySelector(".textFooter"),
}

function showWrong() {
	ui.btnContinue.classList.remove("green", "red");

	ui.textFooter.textContent = "SALAH"
	ui.footer.classList.add("soft-red")
	ui.textFooter.classList.add("textRed")
	ui.btnContinue.classList.remove("hidden")
	ui.btnCheck.classList.add("hidden")
	ui.textFooter.classList.remove("hidden")
}

function showCorrect() {
	ui.btnContinue.classList.remove("green", "red");

	ui.textFooter.textContent = "BETUL"

	ui.footer.classList.add("soft-green")
	ui.textFooter.classList.add("textGreen")
	ui.textFooter.classList.remove("hidden")
	ui.btnContinue.classList.remove("hidden")
	ui.btnCheck.classList.add("hidden")
}


let hanldeContinue = () => {

	ui.textFooter.classList.toggle("hidden")
	ui.btnContinue.classList.toggle("hidden")
	ui.btnCheck.classList.toggle("hidden")
	ui.footer.classList.remove("soft-green", "soft-red")

	if (state.numberPicked == state.currentData.answer) {
		main()
	} else {
		let allElements = document.querySelectorAll(".higlight");
		let lastElement = allElements[allElements.length - 1];
		lastElement.classList.remove("higlight");
	}
	
	ui.barFill.style.width = `${(state.index / state.lenghtData) * 100}%`
	state.numberPicked = null;
	state.isReset = false
}

let hanldeCheck = () => {
	if (state.numberPicked == null || state.isReset == true) return
	state.isReset = true

	if (state.question.check(state.numberPicked, state.currentData)) {

		let lastElement = document.querySelector(".content:last-child");

		showCorrect()

		state.question.afterCorrect?.(lastElement, state.numberPicked, state.currentData);

	} else {
		showWrong()
	}
}

function getQuestion(type) {
	const question = questionRegistry[type];

	if (!question) {
		throw new Error(`Unknown question type: ${type}`);
	}

	return question;
}

let main = (data = json[state.index++]) => {

	state.currentData = data
	state.question = questionRegistry[state.currentData.type];

	const lastContent = document.querySelector(".content:last-child");

	if (lastContent) {
		lastContent.querySelectorAll(".btnAns, .eqn").forEach(el => {
			el.style.pointerEvents = "none";
		});
	}

	let dialog = document.createElement("div");
	dialog.className = "content fadeIn";

	dialog.innerHTML = state.question.render(data);
	wrapper.appendChild(dialog);

	state.question.setup(value => state.numberPicked = value, () => !state.isReset);
}

ui.btnCheck.addEventListener("click", hanldeCheck)
ui.btnContinue.addEventListener("click", hanldeContinue)

main()