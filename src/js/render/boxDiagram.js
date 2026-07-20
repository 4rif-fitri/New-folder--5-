export function renderBoxDiagram(data){
	return `
		<div class="icon">
			<div class="circule"></div>
		</div>
		<div>
			<div class="dialog">
				<p>${data.text}</p>
			</div>
			<div>
				<div class="grid">
					${Array.from({ length: data.content.numberOfBox })
					.map(() => `<div class="box"></div>`).join("")}
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

