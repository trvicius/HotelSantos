import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://dicasbarcelona.com.br/wp-content/uploads/2020/06/HOSTEL-NUT-Granada-.jpg"
                title="Conforto"
                description="Acomodações para toda familia."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Sonhe"
                description="Espaços ao ar livre."
            />
            <Card
                src="https://jupor.ai/wp-content/uploads/2019/08/Hostel-no-Rio-de-Janeiro.jpg"
                title="Lazer"
                description="Sala de jogos e piscinas para a diversão dentro e fora do Hotel."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Camas, ideal para quem ta de passagem"
                description="Interior moderno e acochegante"
                price="R$130/Noite"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Quarto tematizado LONDON"
                description="Interior inspirado em Londres"
                price="R$350/Noite"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Casal"
                description="Quarto ideal para o casal, com vista direta para o mar."
                price="R$70/Noite"
            />
            </div>
        </div>
    )
}

export default Home;