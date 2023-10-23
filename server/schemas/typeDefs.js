const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    employeeID: Int!
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
    SearchUsers(firstName: String, lastName: String, employeeID: Int, email: String): [User]
 
  }

  type Mutation {
    addUser(
      employeeID: Int!
      firstName: String!
      lastName: String!
      email: String!
      admin: Boolean!
      rootUser: Boolean!
      password: String!
    ): Auth

    addMessage(
      title: String!
      text: String!
    ): Message

    login(email: String!, password: String!): Auth
  }

  
`;

module.exports = typeDefs;
