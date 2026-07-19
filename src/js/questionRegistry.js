import { defaultCheck, updateContent } from "./helper.js";
import { setupDragDrop } from "./logic/dragDropLogic.js";
import { setupClickBtn } from "./logic/neededLogic.js";
import { setupPick } from "./logic/pickLogic.js";

import { renderBaki } from "./render/baki.js";
import { renderGabung } from "./render/gabung.js";
import { renderNeeded } from "./render/needed.js";
import { renderPecah } from "./render/pecah.js";
import { renderPick } from "./render/pick.js";
import { renderSum } from "./render/sum.js";
import { renderSummery } from "./render/summery.js";

export let questionRegistry = {
	pick: {
		render: renderPick,
		setup: setupPick,
		check: defaultCheck,
	},
	needed: {
		render: renderNeeded,
		setup: setupClickBtn,
		check: defaultCheck,
	},
	pecah: {
		render: renderPecah,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(lastElement, numberPicked, currentData) {
			updateContent(lastElement.querySelector(".dialog p"), `Jadi, ${currentData.content.pelengkap} itu kita akan ambil dari ${currentData.answer}`)
			updateContent(lastElement.querySelectorAll(".eqn")[1], numberPicked)
		},

	},
	baki: {
		render: renderBaki,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(lastElement, numberPicked, currentData) {
			updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.options[1]} akan dipecahkan kepada ${currentData.content.pelengkap} dan ${currentData.answer}`)
			updateContent(lastElement.querySelectorAll(".pecah")[1], numberPicked)
		},

	},
	gabung: {
		render: renderGabung,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(lastElement, numberPicked, currentData) {
			updateContent(lastElement.querySelector(".dialog p"), `${currentData.content.options[0]} tambah ${currentData.content.pelengkap} akan dapat ${currentData.answer}`)
			updateContent(lastElement.querySelectorAll(".hasil")[0], numberPicked)
		},

	},
	sum: {
		render: renderSum,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(lastElement, numberPicked, currentData) {
			updateContent(lastElement.querySelector(".dialog p"), `Jadi, ${currentData.content.options[0] + currentData.content.pelengkap} tambah ${currentData.content.options[1] - currentData.content.pelengkap} akan dapat ${currentData.answer}`)
			updateContent(lastElement.querySelectorAll(".jumlah")[0], `=${numberPicked}`)
		},

	},
	summery: {
		render: renderSummery,
		setup: setupClickBtn,
		check: defaultCheck,
		afterCorrect(lastElement, numberPicked, currentData) {
			updateContent(lastElement.querySelector(".dialog p"), `Jadi, ${currentData.content.options[0]} tambah ${currentData.content.options[1]} akan dapat ${currentData.answer}`)
			updateContent(lastElement.querySelectorAll(".jumlahAkhir")[0], `${numberPicked}`)
		},

	}
}