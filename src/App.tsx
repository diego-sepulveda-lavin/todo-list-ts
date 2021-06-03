import { useState } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (text: string) => {
		setTodos(prevTodos => [...prevTodos, { id: Math.random(), text: text }]);
	};

	const deleteTodo = (id: number) => {
		let filteredTodos = todos.filter(todo => todo.id !== id);
		setTodos(filteredTodos);
	};

	return (
		<div className="App">
			<h1>My ToDos</h1>
			<TodoForm onAddTodo={addTodo} />
			<TodoList onDeleteTodo={deleteTodo} items={todos} />
		</div>
	);
};

export default App;
