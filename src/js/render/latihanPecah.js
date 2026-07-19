export function renderLatihanPecah(data){
	return `
		<div class="icon">
			<div class="circule"></div>
		</div>
		<div>
			<div class="dialog">
				<p>${data.text}</p>
			</div>

			<div class="bond">

				<div class="whole">
					<h1>${data.content.whole}</h1>
				</div>

				<svg class="line-svg" viewBox="0 0 300 180">
					<line x1="150" y1="65" x2="75" y2="145" />
					<line x1="150" y1="55" x2="225" y2="145" />
				</svg>

				<div class="parts">
					${data.content.part.map(part => `
						<div class="part"> ${part !== "" ? `<h1>${part}</h1>` : `<h1 class="circuleAns"></h1>`}
						</div>
					`).join("")}
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