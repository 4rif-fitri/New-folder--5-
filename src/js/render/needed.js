export function renderNeeded(data) {

	return `
		<div class="icon">
			<div class="circule"></div>
		</div>
		<div>
			<div class="dialog">
				<p>${data.text}</p>
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