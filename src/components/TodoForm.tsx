import React, {useState, useRef} from "react";

interface TodoFormProps {
	onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {

	// const [title, setTitle] = useState<string>('');
	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value)
	// }

	const ref = useRef<HTMLInputElement>(null)

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter'){
			// console.log(ref.current!.value)
			props.onAdd(ref.current!.value);
			ref.current!.value = ''
			// setTitle('');
		}
	}

	return (
		<div className="input-field mt2">
			<input 
			// onChange={changeHandler}
			onKeyPress={keyPressHandler}
			// value={title} 
			ref={ref}
			type="text" 
			id="title" 
			placeholder="Введите название дела"/>
			<label htmlFor="title" className="active">Введите название дела</label>
		</div>
	)
}