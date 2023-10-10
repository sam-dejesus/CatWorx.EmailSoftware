const User = require('../models/User')
const Message = require('../models/Message')
const Conversation = require('../models/Conversation')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () =>{
            return await User.find({})
        }


    },

    Mutation: {

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this username address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
    }


}

module.exports = resolvers;