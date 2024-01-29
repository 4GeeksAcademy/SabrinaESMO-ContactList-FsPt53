import React , {useEffect, useContext, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";

export const EditContacts = () => {
	const {id} = useParams()

	const { actions, store } = useContext(Context);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const contact = store.contacts.find( p => p.id == id )
		if (!contact) return
		setName(contact.full_name)
		setEmail(contact.email)
		setAddress(contact.address)
		setPhone(contact.phone)
	}, [store.contacts])

	const updateContact = () => {
		actions.updateContact(
			{
				"full_name": name,
				"email": email,
				"agenda_slug": "sesmodev_agenda",
				"address": address,
				"phone": phone,
			}, id)

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
			<label for="exampleFormControlInput2" className="form-label col-auto">Correo electrónico</label>
			<input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control col-auto" id="exampleFormControlInput2"></input>
		</div>
		<div className="mb-3 formInput container row">
			<label for="exampleFormControlInput3" className="form-label col-auto">Número de teléfono</label>
			<input value={phone} onChange={e => setPhone(e.target.value)} type="text"  className="form-control col-auto" id="exampleFormControlInput3"></input>
		</div>
		<div className="mb-3 formInput container row">
			<label for="exampleFormControlInput4" className="form-label col-auto">Dirección</label>
			<input value={address} onChange={e => setAddress(e.target.value)} type="text"className="form-control col-auto" id="exampleFormControlInput4"></input>
		</div>
		<button onClick={updateContact} type="button" className="btn btn-primary">Actualizar contacto</button>
	</div>
);};