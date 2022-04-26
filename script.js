const container = document.querySelector('.container');

// Create 4x4 grid of divs
for (let i = 0; i < 4; i++) {
    let mainDiv = document.createElement('div');
    for (let j = 0; j < 4; j++) {
        let div = document.createElement('div');
        mainDiv.appendChild(div);
    }
    container.appendChild(mainDiv);
}