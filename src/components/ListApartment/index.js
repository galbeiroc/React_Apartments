import React from 'react';
import ItemApartment from '../ItemApartment'
import './ListApartment.sass';

const ListApartment = ({apartments}) => {
    
    return (
        <div className="table-container table">
            <div className="flex-table header">
                <div className="flex-row first">No. Apartment</div>
                <div className="flex-row">Meters</div>
                <div className="flex-row">Price</div>
            </div>
            {/*Go through the matrix to show all the data*/}
            {
                apartments.map((apartment, index) => {
                    return <ItemApartment apartment={apartment} key={index}/>
                }
                )
            }
        </div>
    )
}

export default ListApartment
