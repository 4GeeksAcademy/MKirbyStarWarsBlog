const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			personDetails: {
				description: "",
				properties: {}
			},
			vehicles: [],
			VehicleDetails: {
				description: "",
				properties: {}
			},
			planets: [],
			PlanetDetails: {
				description: "",
				properties: {}
			},
			favorites: []
		},

		
		actions: {

		getPeople: async () => {
			const response = await fetch("https://www.swapi.tech/api/people/");
			if (!response.ok) {
				throw new Error(response.status, response.statusText);
			}
			const data= await response.json();
			setStore({people: data.results})
		},

		getPersonDetails: async (id) => {
			const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
			if (!response.ok) {
				throw new Error(response.statusText, response.statusText);
			}
			const data = await response.json();
			const store = getStore();
			
			const updatedPersonDetails = {
				...store.personDetails,
				[id]: {
					description: data.result.description,
					properties: { ...data.result.properties }
				}
			};
		
			setStore({ personDetails: updatedPersonDetails });
		},
		



		getVehicles: async () => {
			const response = await fetch("https://www.swapi.tech/api/vehicles/");
			if (!response.ok) {
				throw new Error(response.status, response.statusText);
			}
			const data= await response.json();
			setStore({vehicles: data.results})
		},

		getVehicleDetails: async (id) => {
			const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
			if (!response.ok) {
				throw new Error(`${response.status} - ${response.statusText}`);
			}
			const data = await response.json();
			const store = getStore();
			
			const updatedVehicleDetails = {
				...store.vehicleDetails,
				[id]: {
					description: data.result.description,
					properties: { ...data.result.properties }
				}
			};
		
			setStore({ vehicleDetails: updatedVehicleDetails });
		},
				

		getPlanets: async () => {
			const response = await fetch("https://www.swapi.tech/api/planets/");
			if (!response.ok) {
				throw new Error(response.status, response.statusText);
			}
			const data= await response.json();
			setStore({planets: data.results})
		},

		getPlanetDetails: async (id) => {
			const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
			if (!response.ok) {
				throw new Error(response.statusText, response.statusText);
			}
			const data = await response.json();
		
			const store = getStore();
			
			const updatedPlanetDetails = {
				...store.PlanetDetails,
				[id]: {
					description: data.result.description,
					properties: { ...data.result.properties }
				}
			};
		
			setStore({ PlanetDetails: updatedPlanetDetails });
		},
		

		AddFavorite: (favItem) => {
		const store = getStore();
		store.favorites.push(favItem);
		setStore(store)
		console.log(store.favorites)
		},

		deleteFavorite: (deletedItem) => {
			const store = getStore();
			const updatedFavorites = store.favorites.filter(item => item !== deletedItem);
			setStore({
				favorites: updatedFavorites,
			});
		},
		

		}
	};
};

export default getState;
