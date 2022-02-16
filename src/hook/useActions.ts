import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodosActionCreators from "../store/acrtion-creators/todos";

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(TodosActionCreators, dispatch);
};