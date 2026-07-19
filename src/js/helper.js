export function updateContent(element,text){
	element.textContent = text
}
export function defaultCheck(picked, data){
	return picked == data.answer;
}



export function defaultOnCorrect(ui) {
	showCorrect(ui);
};