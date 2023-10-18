const WINNING_COMBINATIONS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];

const cellArr = document.querySelectorAll('td');
const table = document.querySelector('table')


let counter = 0;

function clickCounter () { 
    counter += 1; 
}

for (let cell of cellArr) {
    cell.addEventListener('click', onCellClick);

}



let crossMoves = [];
let zeroMoves = [];


function onCellClick(event) {


    const cellId = event.target.dataset.cell; 
   
    if (isCellEmpty(event.target.className) === false) {
        return; 
    }
    clickCounter(); 
  
  
    if (counter % 2 === 0) {
        event.target.classList.add('zero-svg');
        zeroMoves.push(Number(cellId));
        winnerSearch(zeroMoves);

    } else {
        event.target.classList.add('cross-svg');  
        crossMoves.push(Number(cellId));     
        winnerSearch(crossMoves);

    }
}



function winnerSearch(array) {

    for (let combination of WINNING_COMBINATIONS) {
        const isWinner = checkCombination(combination, array); 

        if (isWinner === true) {
        
            console.log('Win');
            return; 
        }
        
    }

}
        


function checkCombination(combination, moves) {
    let nonWinningCombinations = [];

    for (let cell of combination) {
           
        if (!moves.includes(cell)) {
            nonWinningCombinations = combination;

            return false;
        } 

    }
    return true; 
}

function isCellEmpty(className) {
if (className === "") {

    return true ; 
    }
    return false; 
    
 }



