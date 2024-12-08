import React, { useEffect, useContext } from "react";
//import useParams to pull the unique id
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const style = {
    "maxWidth": "540px"
}

let planetBaseURL = "https://starwars-visualguide.com/assets/img/planets"

// fetch the unique planets info

const PlanetDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getSinglePlanet(params.id)
    }, []) 

    return (
        <>
            <div className="card mb-3" style={style}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={`${planetBaseURL}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.singlePlanet.name}</h5>
                            <p className="card-text">Climate:{store.singlePlanet.climate}</p>
                            <p className="card-text">Population: {store.singlePlanet.population}</p>
                            <p className="card-text">Orbital Period: {store.singlePlanet.orbital_period}</p>
                            <p className="card-text">Terrain: {store.singlePlanet.terrain}</p>
                            <p className="card-text">Gravity: {store.singlePlanet.gravity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlanetDetails;