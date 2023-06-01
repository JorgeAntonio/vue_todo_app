import { reactive } from "vue";

const store = reactive({
  newTodo: "",
  todoList: [],
});

const addTodo = () => {
  store.todoList.push({
    title: store.newTodo,
    completed: false,
  });
  store.newTodo = "";
};

const removeTodo = (todo) => {
  const index = store.todoList.indexOf(todo);
  if (index !== -1) {
    store.todoList.splice(index, 1);
  }
};

const toggleTodoStatus = (index) => {
  const todo = store.todoList[index];
  if (todo && todo.completed !== undefined) {
    todo.completed = !todo.completed;

    if (todo.completed) {
      setTimeout(() => {
        removeTodo(todo);
      }, 3000);
    }
  }
};

export { store, addTodo, removeTodo, toggleTodoStatus };
