import React from 'react';
import './Contato.css'

function Contato (){

    return(
       <div className="global">
           <div className="end">
               <h2>Hotel Santos</h2>
                <p>Endereço: Av. Pinheiro Machado, 27</p>
                <p>CEP 11015-710</p>
           </div>
            <div className="tel">
                <h2>Telefones de contato</h2>
                <p> +55 (13) 3256-2626</p>
                <p>Whatsapp: (13) 97408-8545</p>
            </div>
            <div className="atend">
                <h2>Atendimento ao cliente</h2>
                <p>Segunda a Sábado</p>
                <p>07:00 às 23:00 horas</p>
            </div>
            <div className="redes">
                <h2>Redes Sociais e E-mail para contato</h2>
                    <p>E-mail: hshoteis@hotelsantos.com.br</p>
                    <p>Instagran: @HShoteis</p>
                    <p>Facebook: HotelSantos013</p>
            </div>
        </div>
    )
};

export default Contato;