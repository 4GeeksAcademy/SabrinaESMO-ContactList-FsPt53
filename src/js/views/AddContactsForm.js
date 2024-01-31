import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export const AddContactsForm = () => {
	const { actions } = useContext(Context);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const navigate = useNavigate();

	const createContact = async () => {
		await actions.addContact(
			{
				"full_name": name,
				"email": email,
				"agenda_slug": "sesmodev_agenda",
				"address": address,
				"phone": phone,
			})

		return navigate("/")
	}

	return (
		<div className="text-center mt-5 container position-relative">
			<h1>Añade los datos del contacto</h1>
			<div className="mb-3 formInput container row">
				<label for="exampleFormControlInput1" className="form-label col-auto">Nombre completo</label>
				<input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control col-auto" id="exampleFormControlInput1" placeholder="Elena Nito Delbosque"></input>
			</div>
			<div className="mb-3 formInput container row">
				<label for="exampleFormControlInput2" className="form-label col-auto">Correo electrónico</label>
				<input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control col-auto" id="exampleFormControlInput2" placeholder="pitufina@chiquitaperomatona.com"></input>
			</div>
			<div className="mb-3 formInput container row">
				<label for="exampleFormControlInput3" className="form-label col-auto">Número de teléfono</label>
				<input value={phone} onChange={e => setPhone(e.target.value)} type="number" className="form-control col-auto" id="exampleFormControlInput3" placeholder="000-000-000"></input>
			</div>
			<div className="mb-3 formInput container row">
				<label for="exampleFormControlInput4" className="form-label col-auto">Dirección</label>
				<input value={address} onChange={e => setAddress(e.target.value)} type="text" className="form-control col-auto" id="exampleFormControlInput4" placeholder="Avenida Arboleda Colorida nº147"></input>
			</div>
			<button className="btn btn-create " onClick={createContact} type="button">Crear contacto</button>
			<nav className="ms-4 position-absolute start-0">
				<Link to="/">Volver al inicio</Link>
			</nav>
		</div>
	);
};