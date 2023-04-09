import { gql } from "graphql-tag";

export const ToDo = gql`
  type ToDo {
    id: ID!
    title: String!
    completed: Boolean!
  }
`;
