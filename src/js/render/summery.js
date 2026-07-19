export function renderSummery(data){
	return `
		<div class="icon">
			<div class="circule"></div>
		</div>
		<div>
			<div class="dialog">
				<p>${data.text}</p>
			</div>

			<div>
				<div class="aaa">
					<h1 class="eqn">${data.content.options[0]}</h1>
					<h1>+</h1>
					<h1 class="eqn">${data.content.options[1]}</h1>
					<h1>=</h1>
					<h1 class="jumlahAkhir"></h1>
				</div>
			</div>

			<div class="options">
				<div class="option soft-box btnAns">
					<h2>${data.options[0]}</h2>
				</div>
				<div class="option soft-box btnAns">
					<h2>${data.options[1]}</h2>
				</div>
				<div class="option soft-box btnAns">
					<h2>${data.options[2]}</h2>
				</div>
			</div>
	</div>
    `
}