const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    employeID: Int!
    firstName: String!
    lastName: String!
    email: String!
    admin: Boolean!
    rootUser: Boolean!
  }

  type Message {
    id: String!
    user: User!
    conversation: Conversation!
    title: String!
    text: String!
    createdAt: Date!
  }

  type Conversation {
    id: String!
    participants: [User]!
    messages: [Message]!
  }

  scalar Date

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
 
  }

  type Mutation {
    addUser(
      employeID: Int!
      firstName: String!
      lastName: String!
      email: String!
      admin: Boolean!
      rootUser: Boolean!
    ): Auth

    addMessage(
      title: String!
      text: String!
    ): Message
  }
`;

module.exports = typeDefs;
