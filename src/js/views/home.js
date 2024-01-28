import React from "react";
import "../../styles/home.css";
import { Contacts } from "./Contacts";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>La agendita de la abuela</h1>
		<p>
			Esta preciosa y simple agenda contiene los contactos de la abuela. <br></br>
			Ayúdala a crear, editar y eliminar sus contactos.
		</p>
		<a href="/contacts" className="btn btn-success">
			Abrir la agenda
		</a>
	</div>
);
