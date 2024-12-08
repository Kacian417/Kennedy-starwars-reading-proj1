import React from "react";
import VehicleCard from "./VehicleCard.jsx";



const VehicleCardList = ({array, imageURL}) => {
    return (
        <>
            <div className="d-flex gap-3 overflow-auto">
                {
                    array.map(item => {
                        return (
                            <VehicleCard 
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

export default VehicleCardList;