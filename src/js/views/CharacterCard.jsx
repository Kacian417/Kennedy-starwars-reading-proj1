import React from "react";
import { Link } from "react-router-dom";

const style = {
    width: "18rem",
    flexshrink: 0
}

const CharacterCard = ({ name, id, imageURL }) => {

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
                    <div className="d-flex justify-content-between">
                        <Link to={`/character_details/${id}`}>
                            <button 
                                className="btn btn-warning mt-2"
                                >Learn More!</button>
                        </Link>
                        <button className="bg-dark text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterCard;