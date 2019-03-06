const { buffer, json, text, send } = require('micro')

module.exports = async (req, res) => {
  const js = await json(req)

  send(res, 200, js)
} 