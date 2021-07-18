const determineWinner = require('./determineWinner')

test('no winner on empty board', () => {
  const board = [['', '', ''], ['', '', ''], ['', '', '']]
  expect(determineWinner(board)).toBe(undefined)
})

test('x should win horizontal', () => {
  const board = [['x', 'x', 'x'], ['', '', ''], ['', '', '']]
  expect(determineWinner(board)).toBe('x')
})

test('x should win horizontal row 2', () => {
  const board = [['', '', ''], ['x', 'x', 'x'], ['', '', '']]
  expect(determineWinner(board)).toBe('x')
})

test('x wins vertical', () => {
  const flippedBoard = [['x', '', ''], ['x', '', ''], ['x', '', '']]
  expect(determineWinner(flippedBoard)).toBe('x')
})

test('x wins diagonal', () => {
  const board = [['x', '', ''], ['', 'x', ''], ['', '', 'x']]
  expect(determineWinner(board)).toBe('x')
})

test('o should win horizontal', () => {
  const board = [['o', 'o', 'o'], ['', '', ''], ['', '', '']]
  expect(determineWinner(board)).toBe('o')
})

test('o wins vertical', () => {
  const flippedBoard = [['o', '', ''], ['o', '', ''], ['o', '', '']]
  expect(determineWinner(flippedBoard)).toBe('o')
})

test('o wins diagonal', () => {
  const board = [['o', '', ''], ['', 'o', ''], ['', '', 'o']]
  expect(determineWinner(board)).toBe('o')
})
