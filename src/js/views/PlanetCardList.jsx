import React from "react";
import PlanetCard from "./PlanetCard.jsx";



const PlanetCardList = ({array, imageURL}) => {
    return (
        <>
            <div className="d-flex gap-3 overflow-auto">
                {
                    array.map(item => {
                        return (
                            <PlanetCard 
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

export default PlanetCardList;