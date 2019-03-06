const { send } = require('micro') 
const { User } = require('./models/user_schema')

module.exports = async (req, res) => {
  const users = await User.query()

  send(res, 200, users)
}
