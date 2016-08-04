// define the variable state as an array with three
// more arrays that represent the rows and columns of the tic tac toe board.
const state = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
// defines the variable X to 1
const X = 1
// defines the variable O to 2
const O = 2
// defines the variable cellValues as an object
// with the key vallue pairs ex. 0 is the key and the empty string
// is the value associated with that key
// formula to get through each cell
const cellValues = {0: '', 1: 'X', 2: 'O'}
// defined the variable playerTurnand intialized it to x that can be accessed anywhere in the program and reference whose turn it is.
let playerTurn = X
// drawBoard is a function (=> means function) that contains a for loop.
// This functon draws the board visualy on the screen
let winner = false

const drawBoard = () => {
  // i classified row.. length of the state array is 3.
  // initializer, condition, incrementer/afterthought.
  for (let i = 0; i < state.length; i++) {
    // j classified columns
    for (let j = 0; j < state[i].length; j++) {
      // the value col is equal to the value of row i and column j.
      // joins the columns and rows together to munipulate
      const col = state[i][j]
      // selects against a css selector in this case refers to the table and table rows the nth child of i+1 and the table data nth child j+1 (represents which cell we are in on the table/tic tac toe board)
      const cell = document.querySelector(
        // child has to start at 1 so add in 1 to the value
        `table tr:nth-child(${i + 1}) td:nth-child(${j + 1})`
      )
      // the textContent will become the value stored in each cell which is referenced by the col value. if col=0 we get back an empty string.  If col = 1 we get back an 'X'. If col = 2 we get back an 'O'
      cell.textContent = cellValues[col]
    }
  }
  // the message that is below the board will be set to whomevers turn it currently is and that uses string interpolation on the cell values based on the player turns.
  document.querySelector('.message').textContent = `It's ${cellValues[playerTurn]}'s turn.`
}
// the play function where we pass in a row, column, and player when we call it.  Based on the row and column we know exactly where the x[i] and y[j] coordinates are and set = to where that player is.
const play = (row, col) => {
  if (state [row][col] === 0) {
      // will disable turn once click. Says that if the state of the row and column starts it has no player
    state[row][col] = playerTurn
    // player now has turn to click.
    if (checkForWinner()) {
      winner =
      alert(playerTurn = 'PLAYER WINS!!!')
    }
    playerTurn = playerTurn === X ? O : X
  }
}
// can keep the () empty if there is a function that is global.
const checkForWinner = () => {
  let arr = [
  [state[0][0], state[0][1], state[0][2]],
  [state[1][0], state[1][1], state[1][2]],
  [state[2][0], state[2][1], state[2][2]],
  [state[0][0], state[0][1], state[0][2]],
  [state[0][1], state[1][1], state[2][1]],
  [state[0][2], state[1][2], state[2][2]],
  [state[0][0], state[1][1], state[2][2]],
  [state[0][2], state[1][1], state[2][0]]
  ]

  for (let i = 0; i < arr.length; i++) {
    let won = arr[i].every(function (m) { return m === playerTurn })
    if (won) { return true }
  }
// initialize for the entire plays, it's the first function called when the DOM is laoded.
}

const init = () => {
  const rows = document.querySelectorAll('tr')
  // loop through the table rows
  for (let i = 0; i < rows.length; i++) {
    // loop through the table data (cells)
    const cols = rows[i].querySelectorAll('td')
    for (let j = 0; j < cols.length; j++) {
      // establishes that we can click on the table data in the current cell.
      cols[j].addEventListener('dblclick', (disable) => {
        // draws x or o in each cell and changes the player's turn
        play(i, j, playerTurn)
        drawBoard()
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', init)
