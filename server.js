
import bcrypt from 'bcrypt'
import Hapi from 'hapi'
import Basic from 'hapi-auth-basic'
import hapireact from 'hapi-react'
let server
let engine = hapireact()
server = new Hapi.Server()
server.connection({port: 5000})
let users = {
  micharch54: {
    username: 'micharch54',
    password: '$2a$10$CX8f3dPAJqfWSeQCtdigXO7CgOUGvH5g6bwbyXNzKtXOHPzfHSxrS',
    name: 'Michael Archibald',
    id: '1'
  }
}

let validate = function (username, password, callback) {
  let user = users[username]
  if (!user) {
    return callback(null, false)
  }

  bcrypt.compare(password, user.password, function (err, isValid) {
    callback(err, isValid, { id: user.id, name: user.name })
  })
}

let viewOpts = {
  defaultExtension: 'js',
  engines: {
    js: engine
  },
  relativeTo: __dirname,
  path: '.views',
  layout: true,
  layoutPath: '.views/layout'
}
server.views(viewOpts)

server.register(Basic, function (err) {
  if (err) throw err
  server.auth.strategy('simple', 'basic', { validateFunc: validate })
  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: 'simple',
      handler: function (request, reply) {
        reply('hello, ' + request.auth.credentials.name)
      }
    }
  })
  server.start(function () {
    console.log('server running at: ' + server.info.uri)
  })
})
