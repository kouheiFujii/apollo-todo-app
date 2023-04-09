import { mergeTypeDefs } from "@graphql-tools/merge";
import { Mutation } from "./Mutation";
import { Query } from "./Query";
import { ToDo } from "./Todo";

const typeDefs = mergeTypeDefs([Query, Mutation, ToDo]);

export default typeDefs;
