export function renderPecahTerbalik(data) {
	return `
				<div class="icon">
			<div class="circule"></div>
		</div>
		<div>
			<div class="dialog">
				<p>
					${data.text}
				</p>
			</div>
			<div class="bond">

				<svg class="line-svg invert" viewBox="0 0 300 180">
					<line x1="215" y1="80" x2="150" y2="170" />
					<line x1="85" y1="80" x2="150" y2="170" />
				</svg>

				<div class="parts">
					<div class="part">
						<h1>${data.content.part[0]}</h1>
					</div>

					<div class="part">
						<h1>${data.content.part[1]}</h1>
					</div>
				</div>

				<div class="whole">
					<h1 class="circuleAns">${data.content.whole}</h1>
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