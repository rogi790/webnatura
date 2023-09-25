import React, { useEffect, useState } from "react";



function CardDescrioneClassic(props) {

    const [showTextDescrizione, setShowTextDescrizione] = useState(false)
    console.log(props)
    return (

        <div className="card">
            <div className="card-body text-start">
                {showTextDescrizione ?
                    <p className="card-text">{props.testo}</p> :
                    <p className="card-text">{props.testo.slice(0, 500)}</p>
                }
                {showTextDescrizione ?
                    <b className="card-text" onClick={() => setShowTextDescrizione(!showTextDescrizione)}>leggi di meno</b> :
                    <b><p className="bt" onClick={() => setShowTextDescrizione(!showTextDescrizione)}>leggi di più</p></b>
                }
            </div>

        </div>
    )

}

export default CardDescrioneClassic

