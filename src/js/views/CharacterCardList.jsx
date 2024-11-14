import React from "react";
import CharacterCard from "./CharacterCard.jsx";
import PlanetCard from "./PlanetCard.jsx";



const CharacterCardList = ({array, imageURL}) => {
    return (
        <>
            <div className="d-flex gap-3 overflow-auto">
                {
                    array.map(item => {
                        return (
                            <CharacterCard 
                                key={item.uid}
                                id={item.uid}
                                name={item.name}
                                imageURL={imageURL}
                            />
                            
                        )
                        
                    })
                    
                }
            </div>
        </>
    );
}

export default CharacterCardList;