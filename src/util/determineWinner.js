const didWin = (row, letter) => {
  if (row.every(col => col === letter)) {
    return letter
  }
}

const determineWinner = board => {
  let winner

  const letters = ['x', 'o']

  // check for horizontal wins
  board.forEach(row => {
    letters.forEach(l => {
      if (winner) return
      winner = didWin(row, l)
    })
  })

  if (winner) return winner

  const flippedBoard = [[], [], []]
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      flippedBoard[i][j] = board[j][i]
    }
  }
  // check for vertical wins
  flippedBoard.forEach(col => {
    letters.forEach(l => {
      if (winner) return
      winner = didWin(col, l)
    })
  })

  if (winner) return winner

  // check for diagonal wins
  const ul2lr = [board[0][0], board[1][1], board[2][2]]
  const ll2ur = [board[2][0], board[1][1], board[0][2]]
  letters.forEach(l => {
    if (winner) return
    winner = didWin(ul2lr, l)
  })

  if (winner) return winner

  letters.forEach(l => {
    if (winner) return
    winner = didWin(ll2ur, l)
  })

  return winner
}

module.exports = determineWinner
