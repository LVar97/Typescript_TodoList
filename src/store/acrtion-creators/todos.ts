import axios from "axios";
import { Dispatch } from "react";
import { TodosActionTypes, TodosAction } from "../../types/todo";
import { ITodo } from '../../Interfaces';


export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodosAction>) => {
		try {
			dispatch({type: TodosActionTypes.FETCH_TODOS});
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
				params: {
					_page: page,
					_limit: limit,
				}
			});

			setTimeout(() => {
				dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data}
			)}, 500);
		} catch (e) {
			dispatch({
				type: TodosActionTypes.FETCH_TODOS_ERROR, 
				payload: 'Произошла ошибка при загрузки списка дел'})
		}
	}
};

export function setTodoPage (page: number): TodosAction {
	return {type: TodosActionTypes.SET_TODO_PAGE, payload: page}
}

export function setTodoChange (todo: ITodo): TodosAction {
	return {type: TodosActionTypes.SET_TODO_CHANGE, payload: todo}
}

export function setTodoDelete (todo: ITodo): TodosAction {
	return {
		type: TodosActionTypes.SET_TODO_DELETE, 
		payload: todo
	}
}

export function setTodoAdd (todo: ITodo): TodosAction {
	return {type: TodosActionTypes.SET_TODO_ADD, payload: todo}
}

export function setTodoCompleted (todo: ITodo): TodosAction {
	return {type: TodosActionTypes.SET_TODO_COMPLETED, payload: todo}
}
