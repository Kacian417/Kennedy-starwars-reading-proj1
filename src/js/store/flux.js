let baseURL = "https://www.swapi.tech/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allCharacters: [],
			allPlanets: [],
			allVehicles: [],
			singleCharacter: [],
			singlePlanet: [],
			singleVehicle: [],
			addFavorites: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm.background = color;
				// 	return elm;
				// });

				//reset the global store
			// 	setStore({ demo: demo });
			// }
			loadStarWars: () => {
				getActions().getAllCharacters();
				getActions().getAllPlanets();
				getActions().getAllVehicles();
			},

			getAllCharacters: () => {
				fetch(`${baseURL}/people`)
				.then(response => {
					if(!response.ok) {
						throw Error("Error retrieving info.")
					}
					return response.json();
				})
				.then(data => {
					setStore({allCharacters: data.results})
				})
				.catch(error => console.log("Error: ", error))
			},

			getAllPlanets: () =>{
				fetch(`${baseURL}/planets`)
			.then(response => {
				if(!response.ok) {
					throw Error("Error retrieving info.")
				}
				return response.json();
			})
			.then(data => {
				setStore({allPlanets: data.results})
			})
			.catch(error => console.log("Error: ", error))
		},

			getAllVehicles: () => {
				fetch(`${baseURL}/vehicles`)
				.then(response => {
					if(!response.ok) {
						throw Error("Error retrieving info.")
					}
					return response.json();
				})
				.then(data => {
					setStore({allVehicles: data.results})
				})
				.catch(error => console.log("Error: ", error))
			},

			getSingleCharacter: characterId => {
				fetch(`${baseURL}/people/${characterId}`)
				.then(response => {
					if(!response.ok) {
						throw Error("Error retrieving info.")
					}
					return response.json();
				})
				.then(data => {
					setStore({singleCharacter: data.result.properties})
				})
				.catch(error => console.log("Error: ", error))
			},
			getSinglePlanet: planetId => {
				fetch(`${baseURL}/planets/${planetId}`)
				.then(response => {
					if(!response.ok) {
						throw Error("Error retrieving info.")
					}
					return response.json();
				})
				.then(data => {
					setStore({singlePlanet: data.result.properties})
				})
				.catch(error => console.log("Error: ", error))
			},
			
			getSingleVehicle: vehicleId => {
				fetch(`${baseURL}/vehicles/${vehicleId}`)
				.then(response => {
					if(!response.ok) {
						throw Error("Error retrieving info.")
					}
					return response.json();
				})
				.then(data => {
					setStore({singleVehicle: data.result.properties})
				})
				.catch(error => console.log("Error: ", error))
			},

			addFavorite: id => {
				if (!favorite.includes(id)) setFavorite(favorite.concat(id));
				console.log(id);
			  },
			
			// this one does the exact opposite, it removes the favorite recipe id's
			removeFavorite: id => {
				let index = favorite.indexOf(id);
				console.log(index);
				let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
				setFavorite(temp);
			  },
			
			// this variable holds the list of favorite recipes, we will use it to render all the fav ecipes
			findfavorite: starwarsItem.filter(starwarsItem => favorite.includes(character.id, vehicle.id, planet.id)),
			
			// filtered list of recipes
			filtered: id.filter(starwarsItem => {
				if (searchTerm === "") {
				  return starwarsItem;
				} else if (starwarsItem.title.toLowerCase().includes(searchTerm.toLowerCase())) {
				  return starwarsItem;
				}
			  }),

			
		}
	};
};

export default getState;
