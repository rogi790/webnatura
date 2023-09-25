import React, { useEffect, useState } from "react";
import * as Costante from './Constante';
import { setOggettoCasuale } from "../store/slices/randomObjectSlice";
import { setColorNavBar, setDescription, setGraficPageLoad, setTitle } from "../store/slices/graficPageLoadSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setListaOggetti } from "../store/slices/listObjectSlice"
import { useHistory } from 'react-router-dom';
import { setObjectDescription } from "../store/slices/objectDescriptionSlice"
import parchiImmagine from "../immagini/parchiImmagine.jpg"
import areeMarineImmagine from "../immagini/areeMarineImmagine.jpg"
import RandomObjectBar from "./RandomObjectBar";
import logoRegione from "../immagini/logoRegione.jpg"

function Regione() {

    const dispatch = useDispatch()
    const history = useHistory()
    const randomObjectForAll = useSelector((state) => state.randomObject)
    const listaRegione = useSelector((state) => state.listObject)
    const [listCard, setListCard] = useState([])
    const arreyRegioni = ['Abruzzo',
        'Basilicata',
        'Calabria',
        'Campania',
        'Emilia-Romagna',
        'Friuli Venezia Giulia',
        'Lazio',
        'Liguria',
        'Lombardia',
        'Marche',
        'Molise',
        'Piemonte',
        'Puglia',
        'Sardegna',
        'Sicilia',
        'Toscana',
        'Trentino-Alto Adige',
        'Umbria',
        'Valle D\'Aosta',
        'Veneto']
    const [regioneScelta, setRegioneScelta] = useState('')




    useEffect(() => { riempimentoCampoCasuale() }, [])

    async function riempimentoCampoCasuale() {
        const response = await fetch('http://localhost:8080/findOneObjectRandomic');
        if (response.ok) {
            dispatch(setOggettoCasuale(await response.json()))
        } else {
            throw new Error('Error: ' + response.status);
        }
    }

    useEffect(() => {
        fetch('http://localhost:8080/findAll')
            .then((response) => response.json())
            .then((response) => {
                dispatch(setListaOggetti(response))
            })
    }, [])

    useEffect(() => {


        setListCard(listaRegione.filter((val) => {
            if (val.regione.toLowerCase().includes(regioneScelta?.toLowerCase())) {
                return val
            }
        })
        )

    }, [regioneScelta])

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
        <>



            <RandomObjectBar />




            <div className="row bg-warning text-white m-3 p-3" >

                <div className="row col-3">

                    <img src={logoRegione} className="rounded" />

                </div>


                <div className="row col-9 text-center">

                    <h4>ESPLORA LE AREE NATURALI
                        NELLE DIVERSE REGIONI ITALIANE</h4>
                    <br></br>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                        Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                        Aliqua. Ultricies Mi Eget Mauris Pharetra
                    </p>


                </div>
            </div >

            <Link className='link' to={Costante.HOME} >Home</Link>/Espolora regioni

            <div className="row">
                <div className="col-3">
                    <h3><b>{regioneScelta}</b></h3>

                    {arreyRegioni.map(a =>
                        <div className='page-item' style={{ textAlign: 'left', marginTop: '10px' }} key={a}>
                            <button className='page-item' style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => setRegioneScelta(a)}>{a}</button>
                        </div>
                    )
                    }

                </div>
                <div className="col-9">

                    <div className="cardsList">

                        {listCard?.map(card =>
                            <button onClick={() => aperturaDettaglio(card)} style={{ border: "none", background: "none", padding: 0 }}>
                                <div className="card" style={{ width: 300, haigth: 400 }} key={card.codice}>
                                    <img src="" className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <p className="card-text">{card.it.nome}</p>
                                    </div>
                                </div>
                            </button>
                        )}
                    </div>

                </div>
            </div>

        </>
    )

}
export default Regione