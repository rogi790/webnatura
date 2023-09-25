import React, { useEffect, useState } from "react";
import immagineItinerarioTuristico from "../immagini/immagineItinerarioTuristico.jpg"
import immaginiItinerarioEscursionistico from "../immagini/immagineItinerarioEscursionistico.jpg"
import immaginiItinerarioPerEsperti from "../immagini/immaginiItinerarioPerEsperti.jpg"
import CardEscursioniClassic from "./CardEscursioniClassic";



function CardDescrizioneEsplora(props) {

    const [showTextDescrizione, setShowTextDescrizione] = useState(false)
    console.log(props)
    return (

        <div className="card">
            <div className="card-body text-start">
                <div className="row text-danger ms-1">
                    ITINERARI
                </div>

                <CardEscursioniClassic immagine={immagineItinerarioTuristico} />

                <CardEscursioniClassic immagine={immaginiItinerarioEscursionistico} />

                <CardEscursioniClassic immagine={immaginiItinerarioPerEsperti} />



                <div className="row text-danger ms-1">
                    VEDI TUTTI GLI ITINERARI
                </div>

            </div>

        </div >
    )

}

export default CardDescrizioneEsplora