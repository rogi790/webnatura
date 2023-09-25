import React, { useEffect, useState } from "react";



function CardDescrioneOrange(props) {

    const [showTextDescrizione, setShowTextDescrizione] = useState(false)

    return (

        <div className="card mt-3" id="card-sfondo-arancione-chiaro">
            <div className="card-body">
                <p className="card-text">
                    <div className="text-start">
                        <b className="text-warning fs-4">{props.titolo}</b>
                        <br></br>
                        {showTextDescrizione ?
                            <p>{props.testo}</p> :
                            <p>{props.testo.slice(0, 500)}</p>
                        }
                        {showTextDescrizione ?
                            <b onClick={() => setShowTextDescrizione(!showTextDescrizione)}>leggi di meno</b> :
                            <b onClick={() => setShowTextDescrizione(!showTextDescrizione)}>leggi di più</b>
                        }
                    </div>
                </p>
            </div >
        </div >

    )

}

export default CardDescrioneOrange