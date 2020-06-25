const User = require('./User');

// const users = [
//   { id: 1, name: 'maycon', email: 'maycon@hotmail.com.br' },
//   { id: 2, name: 'laiza', email: 'laiza@hotmail.com.br' },
// ];

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.find(id),
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email }),
  }
};