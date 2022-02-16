import React from "react";

export const AboutPage: React.FC = () => {
	return(
		<>
			<h1 className="page-title">О приложении</h1>
			<ul className="collection">
				<li className="collection-item">Приложение содержит 2 страницы: главная и список todo</li>
				<li className="collection-item">Переход между страницами должен быть реализован через navbar</li>
				<li className="collection-item">На главной странице реализовано лого и краткое описание страницы. На странице для списка todo реализован интерактивный список</li>
				<li className="collection-item">Данные для списка запрошены с `https://jsonplaceholder.typicode.com/todos`</li>
				<li className="collection-item">Реализована возможность добавления/изменения/удаления todo</li>
				<li className="collection-item">реализована пагинация без перезагрузки страницы</li>
			</ul>
			<h3 className="page-title">В работе были использованны:</h3>
			<ul className="collection">
				<li className="collection-item">React</li>
				<li className="collection-item">Redux</li>
				<li className="collection-item">React router</li>
				<li className="collection-item">Typescript</li>
				<li className="collection-item">Axios</li>
				<li className="collection-item">Css библиотека <a href="https://materializecss.com/">Materializecss</a></li>
			</ul>
		</>
	)
}