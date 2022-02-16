import { ITodo } from "../Interfaces";

export interface TodosState {
	todos: any[];
	loading: boolean;
	error: null | string;
	page: number;
	limit: number;
}


export enum TodosActionTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE',
	SET_TODO_CHANGE = 'SET_TODO_CHANGE',
	SET_TODO_DELETE = 'SET_TODO_DELETE',
	SET_TODO_ADD = 'SET_TODO_ADD ',
	SET_TODO_COMPLETED = "SET_TODO_COMPLETED"
}

interface FetchTodosAction {
	type: TodosActionTypes.FETCH_TODOS,
}

interface FetchTodosSuccessAction {
	type: TodosActionTypes.FETCH_TODOS_SUCCESS,
	payload: any[], //вместо any[] подставить интерфейс самого todo
}

interface FetchTodosErrorAction {
	type: TodosActionTypes.FETCH_TODOS_ERROR,
	payload: string,
}

interface SetTodoPage{
	type: TodosActionTypes.SET_TODO_PAGE,
	payload: number,
}

interface SetTodoChange{
	type: TodosActionTypes.SET_TODO_CHANGE,
	payload: ITodo
}

interface SetTodoDelete{
	type: TodosActionTypes.SET_TODO_DELETE,
	payload: ITodo,
}

interface SetTodoAdd{
	type: TodosActionTypes.SET_TODO_ADD,
	payload: ITodo,
}

interface SetTodoCompleted{
	type: TodosActionTypes.SET_TODO_COMPLETED,
	payload: ITodo, 
}

export type TodosAction = 
	FetchTodosAction 
	| FetchTodosErrorAction 
	| FetchTodosSuccessAction 
	| SetTodoPage
	| SetTodoChange
	| SetTodoDelete
	| SetTodoAdd
	| SetTodoCompleted
