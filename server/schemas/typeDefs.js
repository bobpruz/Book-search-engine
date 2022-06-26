const { gql } = require("apollo-server-express");

// create types and queries from models and controller
const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    savedBooks: [Book]
    bookCount: int
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
