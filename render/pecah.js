export function renderPecah(data){
	return `
		<div class="icon">
			<div class="circule"></div>
		</div>
		<div>
			<div class="dialog">
				<p>${data.text}</p>
			</div>

			<svg class="line-svg-qwe" viewBox="0 0 300 180">
				<line x1="150" y1="65" x2="75" y2="145" />
			</svg>

			<div>
				<div class="aaa">
					<h1 class="eqn">${data.content.options[0]}</h1>
					<h1>+</h1>
					<h1 class="eqn">${data.content.options[1]}</h1>
					<h1></h1>
					<h1></h1>
					<h1></h1>
					<h1 class="pecah">${data.content.pelengkap}</h1>
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