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
				${data.options.map(option => `
					<div class="option soft-box btnAns">
						<h2>${option}</h2>
					</div>`).join('')}
			</div>
	</div>
    `
}