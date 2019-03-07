const { send } = require('micro')
const { router, get, post, put, patch, del, head, options } = require('microrouter')
const { createUser, getUser, updateUser } = require('./controllers/user')

const notfound = async (req, res) => { send(res, 404, 'Route not found') }

module.exports = router(
  get('/user', getUser),
  post('/user', createUser),
  patch('/user', updateUser),
  // All other routes return 404
  get('/*', notfound),
  post('/*', notfound),
  put('/*', notfound),
  patch('/*', notfound),
  del('/*', notfound),
  head('/*', notfound),
  options('/*', notfound)
)
