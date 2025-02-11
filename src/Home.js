import React, { useState, useEffect } from 'react'
import './Home.css';
import CarouselHome from './Carousel'
import Card from './Card'
import api from './services/api'
import Carousel from "react-elastic-carousel";

// ES7 snippets to do 'rfce'

function Home() {
    const [rooms, setRooms] = useState([]);
    async function getRooms() {
        var response = await api.get("/rooms?reservado=true");

        //console.log(response);

        setRooms(response.data)
    }

    useEffect(getRooms, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2  },
        { width: 768, itemsToShow: 3, itemsToScroll: 3  },
        { width: 1200, itemsToShow: 4, itemsToScroll: 4  },
      ];

    return (
        <div className='home'>
            <CarouselHome />

            <div className='home__section'>
            <Card
                src="https://s2.glbimg.com/owGGkt7NP8YnUUmVQ2luKHMAMV4=/0x0:639x423/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/g/l/VbPsVeSjiBvjbow4hAEA/piscina-hotel.jpg"
                title="Piscina ao ar livre"
                description="Diversão para toda familia."
            />
            <Card
                src="https://exp.cdn-hotels.com/hotels/1000000/700000/692500/692420/bd263dfe_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
                title="Jacuzzi"
                description="Aproveite nossa jacuzzi para relaxar e esquecer todos os seus problemas."
            />
            <Card
                src="http://www.falandodeviagem.com.br/imagens2/Old_Harbour_01.jpg"
                title="Restaurante"
                description="Restaurante tradicional da cidadade de Santos, com grande varieade de pratos."
            />
            </div>
            <div className='home__section'>
            <Carousel breakPoints={breakPoints}>
                {
                    rooms.map(room => <Card
                        src={room.img}
                        title={room.title}
                        description={room.description}
                        price={`R$ ${room.price} por noite`}
                        key={room.id}
                    />)
                }
            </Carousel>
            </div>
        </div>
    )
}

export default Home;