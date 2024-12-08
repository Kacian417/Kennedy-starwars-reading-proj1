import React, { useEffect, useContext } from "react";
//import useParams to pull the unique id
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const style = {
    "maxWidth": "540px"
}

let vehicleBaseURL = "https://starwars-visualguide.com/assets/img/vehicles"

// fetch the unique characters info

const VehicleDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getSingleVehicle(params.id)
    }, []) 

    return (
        <>
            <div className="col-2"></div>
            <div className="card mb-3" style={style}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={`${vehicleBaseURL}/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.singleVehicle.name}</h5>
                            <p className="card-text">Model:{store.singleVehicle.model}</p>
                            <p className="card-text">Passengers: {store.singleVehicle.passengers}</p>
                            <p className="card-text">Vehicle Class: {store.singleVehicle.vehicle_class}</p>
                            <p className="card-text">Crew: {store.singleVehicle.crew}</p>
                            <p className="card-text">Manufacturer: {store.singleVehicle.manufacturer}</p>
                        </div>
                    </div>
                </div>
                </div>
        </>
    );
}

export default VehicleDetails;