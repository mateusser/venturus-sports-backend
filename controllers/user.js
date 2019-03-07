const { send, json } = require('micro') 
const { User } = require('../models/user_schema')

const getUser = async (req, res) => {
  const users = await User.query()

  send(res, 200, users)
}

const createUser = async (req, res) => {
  const usr = await json(req)
  const user = await User.query().insert({ ...usr, isActive: true })
  send(res, 200, user)
}

const updateUser = async (req, res) => {
  const usr = await json(req)
  const user = await User.query().patchAndFetchById(usr.id, usr)
  send(res, 200, user)
}

module.exports = {
  getUser,
  createUser,
  updateUser
}
