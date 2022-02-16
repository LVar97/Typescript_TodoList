import { TodosActionTypes, TodosAction, TodosState } from "../../types/todo";

const initialState: TodosState = {
	todos: [],
	loading: false,
	error: null,
	page: 1,
	limit: 10,
}

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
	switch (action.type){
		case TodosActionTypes.FETCH_TODOS:
			return { ...state, loading: true, error: null}
		case TodosActionTypes.FETCH_TODOS_SUCCESS:
			return { ...state, loading: false, error: null, todos: action.payload}
		case TodosActionTypes.FETCH_TODOS_ERROR:
			return { ...state, loading: false, error: action.payload}
		case TodosActionTypes.SET_TODO_PAGE:
			return { ...state, page: action.payload}
		case TodosActionTypes.SET_TODO_CHANGE:
				return { 
					...state, 
					todos: state.todos.map(todo => {
						if (action.payload.id === todo.id) {
							todo.title = action.payload.title
						}
						return todo
					})
				}
		case TodosActionTypes.SET_TODO_DELETE:
			return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}
		case TodosActionTypes.SET_TODO_ADD:
			return { ...state, todos: [ action.payload, ...state.todos]}
		case TodosActionTypes.SET_TODO_COMPLETED:
			return { 
				...state, 
				todos: state.todos.map(todo => {
					if (action.payload.id === todo.id) {
						todo.completed = !todo.completed
					}
					return todo
				})
			}
		default:
			return state
	}
}