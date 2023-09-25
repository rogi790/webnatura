import React, { useEffect, useState } from "react";
import * as Costante from './Constante';
import { setOggettoCasuale } from "../store/slices/randomObjectSlice";
import immagineParcho from "../immagini/parchiImmagine.jpg"
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { setColorNavBar, setDescription, setGraficPageLoad, setTitle } from "../store/slices/graficPageLoadSlice";
import { useDispatch, useSelector } from "react-redux";
import areeMarineImmagine from "../immagini/areeMarineImmagine.jpg"
import "./randomObject.css"
import immagineMappa from "../immagini/mappaImmagineAreeMarine.JPG"
import logoAreaMarina from "../immagini/logoAreeMarine.jpg"
import CardDescrioneClassic from "./CardDescrizioneClassic";
import CardDescrizoneOrange from "./CardDescrizioneOrange";
import CardDescrizioneClassicIcon from "./CardDescrizioneClassicIcon";
import CardDescrizioneGreenIcon from "./CardDescrizioneGreenIcon";

function DettaglioAreeMarine() {

    const dispatch = useDispatch()

    const randomObjectForAll = useSelector((state) => state.randomObject)
    const graficPageLoadForAll = useSelector((state) => state.graficPageLoad)
    const oggettoDettagio = useSelector((state) => state.objectDescription)
    const [showTextStoriaGeografia, setShowTextStoriaGeografia] = useState(false)
    const [showTextDescrizione, setShowTextDescrizione] = useState(false)
    const [showTextFloraFauna, setShowTextFloraFauna] = useState(false)

    function changeBooleanTo(boolean, metodName) {
        console.log("sono dentro il metodo")
        if (metodName === "setShowTextStoriaGeografia") {
            console.log("sono dentro if 1")
            setShowTextStoriaGeografia(!boolean)

        }
        if (metodName === "setShowTextDescrizione") {
            console.log("sono dentro if 2")
            setShowTextDescrizione(!boolean)

        }
        if (metodName === "setShowTextFloraFauna") {
            console.log("sono dentro if 3")
            setShowTextFloraFauna(!boolean)

        }

    }

    return (
        <>


            <div className="row col-12 m-5"  >

                <div className="col-12">
                    <img src={areeMarineImmagine} className="rounded col-12 " height={500} />
                </div >
                <div className="row  text-white bg-info ">

                    <div className="col-12">
                        <h2 className="text-start"><b>{oggettoDettagio[0].it.nome}</b></h2>
                    </div>


                </div>


                <div className="row text-start mt-3">
                    <p> <Link className='link' to={Costante.HOME} >Home</Link> / Aree marine protette / <b> {oggettoDettagio[0].it.nome}</b></p>
                </div >
                <br></br>
                <div className="row"  >
                    <p></p><p className="col-4 bg-info fs-4 text-white" style={{ borderRadius: "0px 0px 30px 5px" }}>PARCHI E AREE PROTETTE</p>
                    <b className="fs-3 text-info col-8 text-start">{oggettoDettagio[0].regione}</b>
                </div>
                <div className="row  text-start" >
                    <h1><b>{oggettoDettagio[0].it.nome}</b></h1>
                </div >
                <div className="row col-8 mt-3 ">
                    <img src={immagineMappa} className="rounded " alt="." />
                </div>
                <div className="row p-2 mt-4">
                    <div className="col-1 ">
                        <img src={logoAreaMarina} className="rounded" width={50} />
                    </div>
                    <div className="col-2 text-info text-start fs-3 ">
                        <b>L'AREA</b>
                    </div>

                </div>


                <div className="row">
                    <div className="col-5 ">

                        <CardDescrioneClassic testo={oggettoDettagio[0].it.descrizione} />

                        <div className="text-warning text-start fs-3 mt-3">
                            <b>CONOSCI</b>
                        </div>

                        <CardDescrizoneOrange titolo="STORIA E GEOGRAFIA" testo={oggettoDettagio[0].it.storiaGeografia} />

                        <CardDescrizoneOrange titolo="FLORA E FAUNA" testo={oggettoDettagio[0].it.floraFauna} />





                    </div>
                    <div className="col-3  ">


                        <CardDescrizioneClassicIcon oggettoDettagio={oggettoDettagio[0]}></CardDescrizioneClassicIcon>

                        <div className="text-success text-start fs-3 mt-3">
                            <b>VISITA</b>
                        </div>

                        <CardDescrizioneGreenIcon oggettoDettagio={oggettoDettagio[0]} />



                    </div >
                </div >




            </div >







        </>
    )

}
export default DettaglioAreeMarine