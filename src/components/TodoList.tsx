import React, { useEffect } from "react";
import { useTypedSelector } from "../hook/useTypesSelector";
import { ITodo } from '../Interfaces';
import { useActions } from "../hook/useActions";
import { Preloader } from "./common/Preloader/Preloader";

type TodoListProps = {
	onToggle(todo: ITodo): void,
	onOpen(todo: ITodo): void,
	onRemove(todo: ITodo): void
}

export const TodoList: React.FC<TodoListProps> = ({
	onToggle,
	onOpen,
	onRemove
}) => {
	const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
	const {fetchTodos, setTodoPage} = useActions();
	const pages = [1, 2, 3, 4, 5];

	useEffect(()=>{
		fetchTodos(page, limit);
	}, [page])

	if (loading) {
		return (<Preloader/>)
	}
	if (error) {
		return <h2>{error}</h2>
	}
	if (todos.length === 0) {
		return <p className="center">Пока дел нет</p>
	}

	const editHandler = (event: React.MouseEvent, todo: ITodo) => {
		event.preventDefault();
		onOpen(todo);
	}

	const removeHandler = (event: React.MouseEvent, todo: ITodo) => {
		event.preventDefault();
		onRemove(todo);
	}

	return (
		<>
		<ul>
			{todos.map(todo => {
				const classes = ['todo']
				if (todo.completed) {
					classes.push('completed');
				}

				return (
					<li className={classes.join(' ')} key={todo.id}>
						<label>
							<input 
								type="checkbox" 
								checked={todo.completed}
								onChange={onToggle.bind(null, todo)}
								id="checkbox"
							/>
							
							<span>{todo.title}</span>
							<div className="">
								<i className="material-icons px1"
								onClick={event => editHandler(event, todo)}
								>edit</i>
								<i className="material-icons red-text" 
								onClick={event => removeHandler(event, todo)}
								>delete</i>

							</div>
							
						</label>
						
					</li>
				)
			})}
		</ul>
		<ul className="pagination row">
			{pages.map(p => (
				<li
					className={`col s1 ${p === page ? "active" : "waves-effect"}`}
					key={p}
					onClick={() => setTodoPage(p)}			
				>{p}
				</li>
			))}
		</ul>
		</>
	)
}