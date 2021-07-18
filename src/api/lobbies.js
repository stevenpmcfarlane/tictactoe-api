const { v4: uuid } = require('uuid')

const create = () => {
  const id = uuid()
  // insert into db

  return id
}

module.exports = {
  create
}
