import React from "react";
import "../../styles/home.css";
import { Contacts } from "./Contacts";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>La agendita de la abuela</h1>
		<Contacts></Contacts>
	</div>
);
