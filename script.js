const container = document.querySelector('.container');

function createGrid(verticalSquares, horizontalSquares) {
    container.textContent = '';
    for (let i = 0; i < verticalSquares; i++) {
        let mainDiv = document.createElement('div');
        for (let j = 0; j < horizontalSquares; j++) {
            let div = document.createElement('div');
            div.classList.add('grid');

            // Set currect div size by total allowed
            containerWidth = parseInt(getComputedStyle(document.querySelector('.container')).width);
            containerHeight = parseInt(getComputedStyle(document.querySelector('.container')).height);
            div.style.width = containerWidth/horizontalSquares + "px";
            div.style.height = containerHeight/verticalSquares + "px";

            div.addEventListener('mouseover', () => { // Add hover effect to each pixel
                div.style.backgroundColor = 'yellow';
            })
    
            mainDiv.appendChild(div);
        }
        container.appendChild(mainDiv);
    }
}

createGrid(16, 16);

let gridSizeButton = document.getElementById('gridSizeButton');
gridSizeButton.addEventListener('click', () => {
    let size = prompt("Enter size under 100");
    while (size>=100) {
        size = prompt("This is bigger than 100, please enter a lower number");
    }
    createGrid(size, size);
})