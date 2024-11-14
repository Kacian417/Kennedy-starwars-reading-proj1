import React from "react";
import { Link } from "react-router-dom";

const style = {
    width: "18rem",
    flexshrink: 0
}

const PlanetCard = ({ name, id, imageURL }) => {
    return (
        <>
            <div className="card bg-dark" style={style}>
                <img 
                src={
                    name === "Tatooine"
                    ?
                    "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                    :
                    `${imageURL}/${id}.jpg`} 
                    className="card-img-top" alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title text-white">{name}</h5>
                    <Link to={`/planet_details/${id}`}>
                    <button className="btn btn-warning mt-2">Learn More!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PlanetCard;