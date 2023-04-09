import { addToDo, updateToDo, deleteToDo } from "../dataSources/ToDoDataSource";

export const Mutation = {
  addToDo: (_, { title }) => addToDo(title),
  updateToDo: (_, { id, completed }) => updateToDo(id, completed),
  deleteToDo: (_, { id }) => deleteToDo(id),
};
