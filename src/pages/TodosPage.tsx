import React,  {useState, useEffect} from "react";
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { TodoPopup } from "../components/common/Popup/TodoPopup";
import { useActions } from "../hook/useActions";
import { ITodo } from '../Interfaces';

export const TodosPage: React.FC = () => {

  const [todo, setTodo] = useState<ITodo>({
    userId: 1,
    id: 1,
    title: '',
    completed: false
  });

  const [isOpen, setIsOpen] = useState(false);
  const {setTodoAdd, setTodoDelete, setTodoChange, setTodoCompleted} = useActions();

  const isTodoPopupOpened = (todo: ITodo) => {
    setIsOpen(!isOpen);
    setTodo(todo);
  }
 
  const isTodoPopupClosed = () => {
    setIsOpen(!isOpen);
  }

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      userId: 1,
      id: Date.now(),
      title,
      completed: false
    }
    setTodoAdd(newTodo);
  }

  const changeTodo = (title: string) => {
    const changeTodo: ITodo = {
      userId: todo.userId,
      id: todo.id,
      title,
      completed: todo.completed
    }
    setTodoChange(changeTodo);
  }


  const toggleHandler = (todo: ITodo) => {
    setTodoCompleted(todo);
  }

  const removeHandler = (todo: ITodo) =>  {
    const shouldRemove = window.confirm('Вы уверены?')
    if (shouldRemove) {
      setTodoDelete(todo);
    }
  }

	return (
		<div className="spiner">
			<TodoForm onAdd={addTodo}/>
			<TodoList 
			onToggle={toggleHandler}
      onOpen={isTodoPopupOpened}
			onRemove={removeHandler}
			/>
      <TodoPopup 
      isOpen={isOpen}
      onClose={isTodoPopupClosed}
      onChange={changeTodo}
      todo={todo}
      />
		</div>
	)
};