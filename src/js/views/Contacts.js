import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Fotito from "../../img/rigo-baby.jpg"

export const Contacts = () => {

    const { store, actions } = useContext(Context);
    const { deleteContact } = actions;
    const navigate = useNavigate();

    return (
        <div className="text-center mt-5">
            <div>
                <button className="btn-add" onClick={() => navigate(`/add-contacts/`)}>
                    Añadir contacto
                </button>
                <ul>
                    {
                        store.contacts.map((element) => {
                            return (
                                <li key={element.id}>
                                    <div className="contactBox container">
                                        <div className="row">
                                            <div className="col">
                                                <img src={Fotito} className=" rounded-circle img-thumbnail"/>
                                            </div>
                                            <div className="col-8">
                                                <p className="nameBox">{element.full_name}</p>
                                                <p className="addressBox"><i className="info-icon fa-solid fa-map-pin"></i>{element.address}</p>
                                                <p className="phoneBox"><i className="info-icon fa-solid fa-mobile-screen"></i>{"(+34) " + element.phone}</p>
                                                <p className="emailBox"><i className="info-icon fa-solid fa-at"></i>{element.email} </p>
                                            </div>
                                            <div className="col">
                                                <button className="btn-contact" onClick={() => {navigate(`edit-contacts/${element.id}`)}}><i className="fa-solid fa-user-pen"></i></button>
                                                <button className="btn-contact" onClick={() => {deleteContact(element.id);}}><i className="fa-solid fa-user-slash"></i></button>
                                            </div>
                                        </div>
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

