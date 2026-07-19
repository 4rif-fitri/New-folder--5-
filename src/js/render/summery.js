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
				${data.options.map(option => `
					<div class="option soft-box btnAns">
						<h2>${option}</h2>
					</div>`).join('')}
			</div>
	</div>
    `
}