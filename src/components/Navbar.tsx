import React from "react";
import {NavLink} from "react-router-dom"
import logo from "../icons/to-do.png";

export const Navbar: React.FunctionComponent = () => (
	<nav>
		<div className="nav-wrapper purple darken-2 px1">
			<a href="/" className="brand-logo lm">
				ToDoList
			</a>
			<ul className="right hide-on-med-and-down">
				<li className="ls"><NavLink to="/">Главная</NavLink></li>
				<li className="ls"><NavLink to="/about">Список дел</NavLink></li>
			</ul>
		</div>
</nav>
)