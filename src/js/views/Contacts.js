import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Contacts = () => {

    const context = useContext(Context);

    const store = context.store;

    console.log(store)

    return (
        <div className="text-center mt-5">
            <h1>Agendita</h1>
            <div>
                <button>
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
                                <p>😁 {element.full_name}</p>
                                <p>📞 {element.phone}</p>
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