import { gql } from "graphql-tag";

export const Mutation = gql`
  type Mutation {
    addToDo(title: String!): ToDo!
    updateToDo(id: ID!, completed: Boolean!): ToDo!
    deleteToDo(id: ID!): ToDo!
  }
`;
