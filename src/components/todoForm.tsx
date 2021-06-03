import React, { useState } from "react";
import "./todoForm.css"

interface TodoFormProps {
	onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = props => {
	const [todo, setTodo] = useState("");

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(event.target.value);
	};

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		if (todo) {
			props.onAddTodo(todo);
			setTodo("");
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form-control">
				<label htmlFor="todo">New ToDo</label>
				<input
					type="text"
					name="todo"
					id="todo"
					onChange={inputChangeHandler}
					value={todo}
				/>
			</div>
			<button type="submit">Add</button>
		</form>
	);
};

export default TodoForm;
