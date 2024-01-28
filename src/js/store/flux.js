const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					"id": "123",
					"full_name": "Dave Bradley",
					"email": "dave@gmail.com",
					"agenda_slug": "my_super_agenda",
					"address": "47568 NW 34ST, 33434 FL, USA",
					"phone": "7864445566"
				},
				{
					"id": "321",
					"full_name": "Dave Bradley",
					"email": "dave@gmail.com",
					"agenda_slug": "my_super_agenda",
					"address": "47568 NW 34ST, 33434 FL, USA",
					"phone": "7864445566"
				},
			]
		},
		actions: {
			getAllContacts: () => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda`).then(data => data.json())
					.then(data => data);
			},
			createContact: () => { },
			updateContact: () => { },
			deleteContact: () => { },
		}
	};
};

export default getState;
