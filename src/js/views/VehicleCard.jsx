import React from "react";
import { Link } from "react-router-dom";

const style = {
    width: "18rem",
    flexshrink: 0
}

const VehicleCard = ({ name, id, imageURL }) => {
    return (
        <>
            <div className="card bg-dark" style={style}>
                <img 
                src={
                    `${imageURL}/${id}.jpg`} 
                    className="card-img-top" alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title text-white">{name}</h5>
                    <Link to={`/vehicle_details/${id}`}>
                    <button className="btn btn-warning mt-2">Learn More!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default VehicleCard;