import React, {useState} from 'react';
import './BookedResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import api from './services/api'

function BookedResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    id,
    updateList
}) {
    async function getReserva() {
        var response = await api.patch(`/RoomCO/${id}`, []);

        if (response.status == 200) alert(`${title} Check out efetuado com sucesso!`)
        
        updateList()
    }

    return (
        <div className='BookedResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="BookedResult__heart" />

            <div className='BookedResult__info'>
                <div className="BookedResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="BookedResult__infoBottom">
                    <div className="BookedResult__stars">
                        <StarIcon className="BookedResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='BookedResults__price'>
                        <h2>{price}</h2>
                        {/* <p>{total}</p> */}
                        <button className="reserva" onClick={getReserva}>Check out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookedResult;