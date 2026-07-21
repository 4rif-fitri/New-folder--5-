export function renderPick(data) {
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
					<h1 class="eqn">${data.options[0]}</h1>
					<h1>+</h1>
					<h1 class="eqn">${data.options[1]}</h1>
				</div>
			</div>

		</div>        
    `
}