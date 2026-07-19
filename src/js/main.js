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

let lenghtDialog = json.length
let index = 0
let numberPicked = null
let elementPicked = null
let currentData = null
let isReset = false

let barFill = document.querySelector(".barFill")
let viewport = document.getElementById("viewport");
let btnCheck = document.querySelector(".btnCheck")
let btnNext = document.querySelector(".btnNext")
let btnContinue = document.querySelector(".btnContinue")
let footer = document.querySelector("footer")
let textFooter = document.querySelector(".textFooter")

let hanldeContinue = () => {

	textFooter.classList.toggle("hidden")
	btnContinue.classList.toggle("hidden")
	btnCheck.classList.toggle("hidden")
	footer.classList.remove("soft-green")
	footer.classList.remove("soft-red")

	if (numberPicked == currentData.answer) {
		moveQuestion()
	} else {
		let allElements = document.querySelectorAll(".higlight");
		let lastElement = allElements[allElements.length - 1];
		lastElement.classList.remove("higlight");
	}

	numberPicked = null;
	isReset = false
}

let hanldeCheck = () => {
	if (numberPicked == null || isReset == true) return
	isReset = true

	if (numberPicked == currentData.answer) {
		textFooter.textContent = "BETUL"
		footer.classList.add("soft-green")
		textFooter.classList.add("textGreen")
		btnContinue.classList.add("green")
		btnContinue.classList.remove("hidden")
		btnCheck.classList.add("hidden")
		textFooter.classList.remove("hidden")

		let lastElement = document.querySelector(".content:last-child");
		let question = questionRegistry[currentData.type];

		question.afterCheck?.(lastElement, numberPicked, currentData);

	} else {
		textFooter.textContent = "SALAH"
		footer.classList.add("soft-red")
		textFooter.classList.add("textRed")
		btnContinue.classList.add("red")
		btnContinue.classList.remove("hidden")
		btnCheck.classList.add("hidden")
		textFooter.classList.remove("hidden")
	}
}

let moveQuestion = (data = json[index++]) => {

	currentData = data

	const lastContent = document.querySelector(".content:last-child");

	if (lastContent) {
		lastContent.querySelectorAll(".btnAns, .eqn").forEach(el => {
			el.style.pointerEvents = "none";
		});
	}

	let dialog = document.createElement("div");
	dialog.className = "content fadeIn";

	let question = questionRegistry[data.type];
	dialog.innerHTML = question.render(data);
	wrapper.appendChild(dialog);

	question.setup(value => numberPicked = value,() => !isReset);
}

btnCheck.addEventListener("click", hanldeCheck)
btnContinue.addEventListener("click", hanldeContinue)

moveQuestion()