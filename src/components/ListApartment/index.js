import React from 'react';
import './ListApartment.sass';

const ListApartment = ({apartments}) => {
    
    return (
        <div className="table-container table">
            <div className="flex-table header">
                <div className="flex-row first">No. Apartment</div>
                <div className="flex-row">Meters</div>
                <div className="flex-row">Price</div>
            </div>
            {
                apartments.map(apartment => (
                    <div className="flex-table row" key={apartment._id}>
                        <div className="flex-row" >{apartment.numApartment}</div>
                        <div className="flex-row">{apartment.meter}</div>
                        <div className="flex-row">{apartment.price}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListApartment
