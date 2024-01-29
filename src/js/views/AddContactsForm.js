import React , {useContext, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const AddContactsForm = () => {
	const { actions } = useContext(Context);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const navigate = useNavigate();

	const createContact = () => {
		actions.addContact(
			{
				"full_name": name,
				"email": email,
				"agenda_slug": "sesmodev_agenda",
				"address": address,
				"phone": phone,
			})

		navigate("/")
	}

	return (
	<div className="text-center mt-5">
		<h1>Formulario</h1>
		<div className="mb-3 formInput container row">
			<label for="exampleFormControlInput1" className="form-label col-auto">Nombre completo</label>
			<input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control col-auto" id="exampleFormControlInput1"></input>
		</div>
		<div className="mb-3 formInput container row">
			<label for="exampleFormControlInput1" className="form-label col-auto">Correo electrónico</label>
			<input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control col-auto" id="exampleFormControlInput2"></input>
		</div>
		<div className="mb-3 formInput container row">
			<label for="exampleFormControlInput1" className="form-label col-auto">Número de teléfono</label>
			<input value={phone} onChange={e => setPhone(e.target.value)} type="number" className="form-control col-auto" id="exampleFormControlInput2"></input>
		</div>
		<div className="mb-3 formInput container row">
			<label for="exampleFormControlInput1" className="form-label col-auto">Dirección</label>
			<input value={address} onChange={e => setAddress(e.target.value)} type="text" className="form-control col-auto" id="exampleFormControlInput2"></input>
		</div>
		<button onClick={createContact} type="button" className="btn btn-primary">Primary</button>
	</div>
);};