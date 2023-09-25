import React, { useEffect, useState } from "react";

function CardEscursioniClassic(props) {


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.immagine} className="img-fluid rounded-start" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text">
                            ITINERARIO ESCURSIONISTICO
                            SENTIERO DELLA SILA
                            APERTO
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardEscursioniClassic