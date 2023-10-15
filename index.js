const WINNING_COMBINATIONS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];

const cellArr = document.querySelectorAll('td')

console.log(cellArr);

for (let cell of cellArr) {
    cell.addEventListener('click', onCellClick);
}

function onCellClick(event) {
    const cellId = event.target.dataset.cell; 
    console.log("click по", cellId); 
}

