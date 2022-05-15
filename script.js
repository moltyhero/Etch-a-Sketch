const container = document.querySelector('.container');

function createGrid(verticalSquares, horizontalSquares) {
    for (let i = 0; i < verticalSquares; i++) {
        let mainDiv = document.createElement('div');
        for (let j = 0; j < horizontalSquares; j++) {
            let div = document.createElement('div');
            div.classList.add('grid');
            div.textContent = 'a'; // For testing

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

