const express = require('express')
const lobbiesApi = require('./api/lobbies')

const server = port => {
  const app = express()

  app.post('/lobbies', (req, res) => {
    lobbiesApi.create().then(id => res.send({ id }))
  })

  app.get('/lobbies/:id', (req, res) => {

  })

  app.listen(port, () => console.log('tic tac toe server is listening on port', port))
}

module.exports = server
