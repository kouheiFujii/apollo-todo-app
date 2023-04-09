import source from "../dataSources/ToDoDataSource";

export const Query = {
  todos: () => source.todos,
};
