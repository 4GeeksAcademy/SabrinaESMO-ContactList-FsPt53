import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { AddContactsForm } from "./AddContactsForm";

export const Contacts = () => {

    const {store, actions} = useContext(Context);
    const {deleteContact} = actions;
    const navigate = useNavigate();

    return (
        <div className="text-center mt-5">
            <div>
                <button onClick={() => navigate(`/add-contacts/`)}>
                    Añadir contacto
                </button>
            </div>
            <div>
                <ul>
                    {
                        store.contacts.map((element) => {
                            return (
                            <li key={element.id}>
                                <div className="contactBox container">
                                <p>Nombre: {element.full_name}</p>
                                <p>Dirección: {element.address}</p>
                                <p>Teléfono: {element.phone}</p>
                                <p>Correo: {element.email} </p>
                                <button onClick={() => {deleteContact(element.id);}}>X</button>
                                <button onClick={() => {navigate(`edit-contacts/${element.id}`)}}>Editar</button>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

