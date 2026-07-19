import { renderPick } from "./render/pick.js";
import { renderNeeded } from "./render/needed.js";
import { renderPecah } from "./render/pecah.js";
import { renderBaki } from "./render/baki.js";
import { renderGabung } from "./render/gabung.js";
import { renderSum } from "./render/sum.js";
import { renderSummery } from "./render/summery.js";

import { setupPick } from "./logic/pickLogic.js";
import { setupClickBtn } from "./logic/neededLogic.js";


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
		text: "Jadi, 2 itu kita akan ambil dari __",
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
		text: "7 tambah 3 akan dapat __",
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
		text: "Jadi, 10 tambah 3 akan dapat?",
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
		text: "Jadi, 10 tambah 3 akan dapat?",
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

let pickedElement

function renderQuestion(data) {
	switch (data.type) {

		case "pick":
			return renderPick(data)
		case "needed":
			return renderNeeded(data)
		case "pecah":
			return renderPecah(data)
		case "baki":
			return renderBaki(data)
		case "gabung":
			return renderGabung(data)
		case "sum":
			return renderSum(data)
		case "summery":
			return renderSummery(data)
	}
}

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


		if (currentData.type == "pecah") {
			let allElements = document.querySelectorAll(".content");
			let lastElement = allElements[allElements.length - 1];
			lastElement.querySelector(".dialog p").textContent = `Jadi, 2 itu kita akan ambil dari ${currentData.answer}`
			let eqn2 = lastElement.querySelectorAll(".eqn")[1]
			eqn2.textContent = numberPicked
		} else if (currentData.type == "baki") {
			let allElements = document.querySelectorAll(".content");
			let lastElement = allElements[allElements.length - 1];
			lastElement.querySelector(".dialog p").textContent = `5 akan dipecahkan kepada 2 dan ${currentData.answer}`
			let eqn2 = lastElement.querySelectorAll(".pecah")[1]
			eqn2.textContent = numberPicked
		} else if (currentData.type == "gabung") {
			let allElements = document.querySelectorAll(".content");
			let lastElement = allElements[allElements.length - 1];
			lastElement.querySelector(".dialog p").textContent = `7 tambah 3 akan dapat ${currentData.answer}`
			let eqn2 = lastElement.querySelectorAll(".hasil")[0]
			eqn2.textContent = numberPicked
		} else if (currentData.type == "sum") {
			let allElements = document.querySelectorAll(".content");
			let lastElement = allElements[allElements.length - 1];
			lastElement.querySelector(".dialog p").textContent = `7 tambah 3 akan dapat ${currentData.answer}`
			let eqn2 = lastElement.querySelectorAll(".jumlah")[0]
			eqn2.textContent = `=${numberPicked}`
		} else if (currentData.type == "summery") {
			let allElements = document.querySelectorAll(".content");
			let lastElement = allElements[allElements.length - 1];
			lastElement.querySelector(".dialog p").textContent = `7 tambah 3 akan dapat ${currentData.answer}`
			let eqn2 = lastElement.querySelectorAll(".jumlahAkhir")[0]
			eqn2.textContent = `${numberPicked}`
		}

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

	const dialog = document.createElement("div");
	dialog.className = "content fadeIn";
	dialog.innerHTML = renderQuestion(data);
	wrapper.appendChild(dialog);

	if (data.type == "pick") {
		setupPick((value) => numberPicked = value,
			() => !isReset)
	} else if (data.type == "needed") {
		setupClickBtn((value) => numberPicked = value,
			() => !isReset)
	} else if (data.type == "pecah") {
		setupClickBtn((value) => numberPicked = value,
			() => !isReset)
	} else if (data.type == "baki") {
		setupClickBtn((value) => numberPicked = value,
			() => !isReset)
	}else if (data.type == "gabung") {
		setupClickBtn((value) => numberPicked = value,
			() => !isReset)
	} else if (data.type == "sum") {
		setupClickBtn((value) => numberPicked = value,
			() => !isReset)
	} else if (data.type == "summery") {
		setupClickBtn((value) => numberPicked = value,
			() => !isReset)
	}

}

btnCheck.addEventListener("click", hanldeCheck)
btnContinue.addEventListener("click", hanldeContinue)
moveQuestion()