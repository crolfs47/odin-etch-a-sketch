
const grid = document.querySelector('.grid');
const width = 16;
const gridWidth = 720;
const hoverColor = '#5C9A80'
const btnChangeSize = document.querySelector('#btn-change-size');
const btnEraser = document.querySelector('#btn-eraser');
const btnReset = document.querySelector('#btn-reset');
const btnRandomColor = document.querySelector('#btn-random-color');

function createGrid(width) {
    for (i = 0; i < width; i++) {
        const row = document.createElement('div');
        row.classList.add('row-container');
        grid.appendChild(row);
        for (j = 0; j < width; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            size = gridWidth / width;
            square.style.width = size + 'px';
            square.style.height = size + 'px';
        }
    }
}

createGrid(width);

function hover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = hoverColor;
        })
    })
}

hover();

function hoverRandom() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#' + randomColor;
        })
    })
}

function eraser() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'white';
        })
    })
}

function reset() {
    location.reload();
}

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

btnChangeSize.addEventListener('click', () => {
    let newWidth = prompt("Number of squares (100 or less):");
    if (newWidth > 100) {
        newWidth = prompt("Number must be 100 or less");
    }
    removeGrid();
    createGrid(newWidth);
    hover();
})

btnRandomColor.addEventListener('click', () => {
    hoverRandom();
})

btnEraser.addEventListener('click', () => {
    eraser();
})

btnReset.addEventListener('click', () => {
    reset();
})








