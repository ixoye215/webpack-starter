import './styles.css';
import { Todo, TodoList, crearTodoHtml } from './classes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender Javascript');

// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml( tarea );

todoList.todos.forEach(todo => {
    crearTodoHtml( todo );
});

console.log(todoList);