import React from 'react';
import './Contato.css'

function Contato (){

    return(
       <div class="container">
           <header>
               <h2>Hotel Santos</h2>
                <p>Endereço: Av. Pinheiro Machado, 27</p>
                <p>CEP 11015-710</p>
                <br/>
            </header>
            <main>
                <h2>Telefones de contato</h2>
                <p> +55 (13) 3256-2626</p>
                <p>Whatsapp: (13) 97408-8545</p>
                <br/>
            </main>
            <main>
                <h2>Atendimento ao cliente</h2>
                <p>Segunda a Sábado</p>
                <p>07:00 às 23:00 horas</p>
                <br/>
            </main>
            <main>
                <h2>Redes Sociais e E-mail para contato</h2>
                <p>E-mail: hshoteis@hotelsantos.com.br</p>
                <p>Instagran: @HShoteis</p>
                <p>Facebook: HotelSantos013</p>
            </main>
        </div>
    )
};

export default Contato;