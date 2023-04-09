let todos = [
  { id: "1", title: "Learn GraphQL", completed: false },
  { id: "2", title: "Create a ToDo App", completed: false },
];

export function addToDo(title: string) {
  // Add a new todo
}

export function updateToDo(id: string, completed: boolean) {
  // Update an existing todo
}

export function deleteToDo(id: string) {
  // Delete an existing todo
}

const dataSources = {
  todos,
  addToDo,
  updateToDo,
  deleteToDo,
};

export default dataSources;
