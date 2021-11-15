import React, { useState, useEffect } from 'react'
import './Booked.css';
import { Button } from "@material-ui/core";
import BookedResult from "./BookedResult";
import { useHistory } from "react-router-dom";
import Search from './Search';
import api from './services/api'



function Booked() {
    const history = useHistory();
    const [rooms, setRooms] = useState([]);


    async function getRooms() {
        var response = await api.get("/rooms?reservado=false");

        console.log(response);


        setRooms(response.data)
    }

    
    useEffect(getRooms, [])

    console.log(rooms)
    return (
        <div>
            <div className='booked'>

                {
                    rooms.map(room => <BookedResult
                        img={room.img}
                        location={room.location}
                        title={room.title}
                        description={room.description}
                        star={room.star}
                        price={`R$ ${room.price} por noite`}
                        total="R$117 total"
                        id={room.id}
                        updateList={() => getRooms()}
                        key={room.id}
                    />)
                }

            </div>
        </div>
    )
}

export default Booked;