// Create 16x16 gird of square divs
// Add 16 square div elements
const gridContainer = document.querySelector('.grid-container');

const width = 16;
for (i = 0; i < width; i++) {
    const row = document.createElement('div');
    row.classList.add('row-container');
    gridContainer.appendChild(row);
    for (j = 0; j < width; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}
    


