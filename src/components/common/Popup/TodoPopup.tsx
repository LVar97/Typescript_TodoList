import React,  {useState, useEffect, useRef, ChangeEvent} from "react";
import { ITodo } from "../../../Interfaces";
import "./TodoPopup.css";

type TodoPopupProps = {
	isOpen: boolean,
	onChange(title: string): void,
	onClose: () => void,
	todo: ITodo
}


export const TodoPopup: React.FC<TodoPopupProps> = ({isOpen, onChange, todo, onClose}) => {

	const [task, setTask] = useState<string>('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setTask(event.target.value);
  };

	useEffect(() => {
		setTask(todo.title)
	}, [isOpen]);

	const classes = ['popup'];
	if (isOpen) {
		classes.push('popup_opened');
	};

	const submitHandler = (event: React.MouseEvent) => {
		event.preventDefault();
		onChange(task);
		onClose();
		setTask('');
	}

	return (

		<div className={classes.join(' ')}>
			<div className="popup__container">
				<div className="popup__content">
				<button className="popup__close" aria-label="Close" type="button" onClick={onClose}/>
				<label className="todos">
					<input
							type="text"
							placeholder="Task..."
							name="task"
							value={task}
							onChange={handleChange}
						/>
						<button className="waves-effect waves-light btn mt2" aria-label="submit" type="submit" onClick={submitHandler}>Сохранить</button>
							
				</label>

				</div>

				
			</div>
			

		</div>
	);

}