
//programmatically (using JS) a bingo board with 76 cells, numbered from 1 to 76.

const createNumbers = ()=> { 
    let bingoCardNode = document.getElementById("bingoCard")
    let numbers = 76
    for (let i = 1; i <= numbers; i++) {
        
        let eachNumber = document.createElement ("div")
        eachNumber.innerText = i
        eachNumber.classList.add("day")
        bingoCardNode.appendChild(eachNumber)


}



//Create a button to randomize a number from 1 to 76. The cell with same number should be highlighted in some way on the bingo board.

let random = Math.floor(Math.random() * 76)

console.log(random)

}

createNumbers()