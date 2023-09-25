import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom';
import * as Costante from './Constante';
import { setOggettoCasuale } from "../store/slices/randomObjectSlice";
import { setObjectDescription } from "../store/slices/objectDescriptionSlice"
import "./randomObject.css"
import areeMarineImmagine from "../immagini/areeMarineImmagine.jpg"
import parchiImmagine from "../immagini/parchiImmagine.jpg"

function RandomObjectBar(props) {

    const dispatch = useDispatch()
    const history = useHistory()

    const randomObjectForAll = useSelector((state) => state.randomObject)
    const [styleVariable, setStyleVariable] = useState("")

    useEffect(() => {
        console.log("sto dentro il controllo")
        if (randomObjectForAll.type === "PN") {
            console.log("sto dentro l'if")
            setStyleVariable("div-with-bg-parchi")
        }
        if (randomObjectForAll.type === "AMP") {
            console.log("sto dentro l'else")
            setStyleVariable("div-with-bg-marine")
        }

    }, [randomObjectForAll])

    async function aperturaDettaglio(card) {
        await fetch('http://localhost:8080/findAllObjectByColumAndRow?colun=id&key=' + card.objectIdString)
            .then((response) => response.json())
            .then((response) => {
                dispatch(setObjectDescription(response))
            })

        if (card.type === "PN") {
            history.push(Costante.DETTAGLIO_PARCHI)
        } else if (card.type === "AMP") {
            history.push(Costante.DETTAGLIO_AREE_MARINE)
        }

    }

    return (

        <div className="row col-12 p-3" id={styleVariable}>
            <div className="mb-3 h2 text-center mt-3">
                <h3><b> {randomObjectForAll.it.nome} </b></h3>
            </div>
            <div className="mb-3 mx-auto text-center mt-3">
                {randomObjectForAll.it.descrizione}
            </div>
            <button className="col-1 btn btn-success" onClick={() => aperturaDettaglio(randomObjectForAll)} >Leggi di più</button>
            <br></br>
            <br></br>
        </div >

    )

}

export default RandomObjectBar