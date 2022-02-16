import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
	todo: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>