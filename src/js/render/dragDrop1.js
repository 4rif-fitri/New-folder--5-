export function renderDragDrop1(data){
    return `
        <div class="icon">
            <div class="circule"></div>
        </div>
        <div>
            <div class="dialog">
                <p>${data.text}</p>
            </div>
            
            <div>
                <div class="aaa grid-6">
                    <h1 class="col-2 dropZone1 zone"></h1>
                    <h1>+</h1>
                    <h1 class="dropZone2 zone"></h1>
                    <h1>=</h1>
                    <h1 class="dropZoneAns zone"></h1>
                </div>
            </div>
            
            <div class="options desh grid-4 zone">
                
                <div class="option soft-square btnAns">
                    <h3>${data.options[0]}</h3>
                </div>
                <div class="option soft-square btnAns">
                    <h3>${data.options[1]}</h3>
                </div>
                <div class="option soft-square btnAns">
                    <h3>${data.options[2]}</h3>
                </div>
                <div class="option soft-square btnAns">
                    <h3>${data.options[3]}</h3>
                </div>

            </div>
        </div>
    `
}