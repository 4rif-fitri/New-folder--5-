export function renderTrueFalse(data){
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
                    <h1 class="eqn">${data.content.nums[0]}</h1>
                    <h1>+</h1>
                    <h1 class="eqn">${data.content.nums[1]}</h1>
                    <h1>=</h1>
                    <h1 class="eqn ans">${data.content.nums[2]}</h1>
                </div>
            </div>

            <div class="options grid-2">
                <div class="option soft-box btnAns">
                    <h2>True</h2>
                </div>
                <div class="option soft-box btnAns">
                    <h2>False</h2>
                </div>
            </div>
        </div>
    `
}