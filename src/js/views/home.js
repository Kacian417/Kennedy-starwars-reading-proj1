import React, { useContext } from "react";
import "../../styles/home.css";
import CharacterCardList from "./CharacterCardList.jsx";
import PlanetCardList from "./PlanetCardList.jsx";
import VehicleCardList from "./VehicleCardList.jsx";
import { Context } from "../store/appContext.js";
   
let characterBaseURL = "https://starwars-visualguide.com/assets/img/characters"
let planetBaseURL = "https://starwars-visualguide.com/assets/img/planets"
let vehicleBaseURL = "https://starwars-visualguide.com/assets/img/vehicles"

export const Home = () => {
    const {store, actions} = useContext(Context);
    return(
        <>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="my-5">
                        <h1>Characters</h1>
                        <CharacterCardList 
                            array={store.allCharacters} 
                            imageURL={characterBaseURL}
                        />
                    </div>
                    <div className="my-5">
                        <h1>Planets</h1>
                        <PlanetCardList 
                            array={store.allPlanets} 
                            imageURL={planetBaseURL}
                        />
                    </div>
                    <div className="my-5">
                        <h1>Vehicles</h1>
                        <VehicleCardList 
                            array={store.allVehicles}
                            imageURL={vehicleBaseURL}
                        />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
};
