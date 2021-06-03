import { Todo } from "../todo.model";
import "./todoList.css";

interface TodoListProps {
	items: Todo[];
	onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
	let content =
		props.items.length === 0 ? (
			<li>No todos yet!</li>
		) : (
			props.items.map(todo => {
				return (
					<li key={todo.id}>
						<span>{todo.text}</span>
						<button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
					</li>
				);
			})
		);
	return <ul>{content}</ul>;
};

export default TodoList;
