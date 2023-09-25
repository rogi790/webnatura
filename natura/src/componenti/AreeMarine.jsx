import React, { useEffect, useState } from "react";
import * as Costante from './Constante';
import { setOggettoCasuale } from "../store/slices/randomObjectSlice";
import { setColorNavBar, setDescription, setGraficPageLoad, setTitle } from "../store/slices/graficPageLoadSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setListaOggetti } from "../store/slices/listObjectSlice"
import { range } from 'lodash';
import { setObjectDescription } from "../store/slices/objectDescriptionSlice"
import { useHistory } from 'react-router-dom';
import areeMarineImmagine from "../immagini/areeMarineImmagine.jpg"
import RandomObjectBar from "./RandomObjectBar";
import logoAreaMarina from "../immagini/logoAreeMarine.jpg"


function AreeMarine() {

    const dispatch = useDispatch()
    const history = useHistory()
    const randomObjectForAll = useSelector((state) => state.randomObject)
    const listaOggettiAreeMarine = useSelector((state) => state.listObject)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [listaTagliata, setListaTagliata] = useState([])
    const recordsPerPage = 9;
    const [npage, setNpage] = useState([])


    useEffect(() => {
        setNpage(range(Math.ceil(listaOggettiAreeMarine.length / recordsPerPage)));
        setListaTagliata(listaOggettiAreeMarine.slice(currentPage * recordsPerPage, recordsPerPage * (currentPage + 1)))
    }, [listaOggettiAreeMarine])
    useEffect(() => {
        setListaTagliata(listaOggettiAreeMarine.slice(currentPage * recordsPerPage, recordsPerPage * (currentPage + 1)))
    }, [currentPage])

    async function riempimentoListaAreeMarine() {

        await fetch('http://localhost:8080/findByType?type=AMP')
            .then((response) => response.json())
            .then((response) => {
                dispatch(setListaOggetti(response))
            })

    }
    useEffect(() => { riempimentoCampoCasuale() }, [])
    useEffect(() => { riempimentoListaAreeMarine() }, [])





    async function riempimentoCampoCasuale() {

        await fetch('http://localhost:8080/findOneObjectRandomicByColumAndRow?colun=type&key=AMP')
            .then((response) => response.json())
            .then((response) => {
                dispatch(setOggettoCasuale(response))
            })
    }

    function ricercaPerParola() {

        setListaTagliata(listaOggettiAreeMarine.filter((val) => {
            if (searchTerm === "") {
                return val;
            }
            else if (val.it.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
            }
        })
        )
        setNpage(range(Math.ceil(listaTagliata.length / recordsPerPage)))

    }

    async function aperturaDettaglioAreeMarine(card) {
        await fetch('http://localhost:8080/findAllObjectByColumAndRow?colun=id&key=' + card)
            .then((response) => response.json())
            .then((response) => {
                dispatch(setObjectDescription(response))
            })

        history.push(Costante.DETTAGLIO_AREE_MARINE)
    }

    return (
        <>


            <RandomObjectBar />

            <div className="row bg-info text-white m-3 p-3" >

                <div className="row col-3">

                    <img src={logoAreaMarina} className="rounded" />

                </div>



                <div className="row col-9 text-center">

                    <p>
                        <h4>ESPLORA LE AREE MARINE PROTETTE</h4>
                        <br></br>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                        Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                        Aliqua. Ultricies Mi Eget Mauris Pharetra
                    </p>

                    <div className="row">
                        <div className="col-10">
                            <input className=" form-control" type="text" placeholder="Search..." onChange={e => { setSearchTerm(e.target.value) }} />
                        </div>
                        <div className="col-2 text-start">
                            <button className=" btn btn-dark" onClick={() => ricercaPerParola()}>Cerca</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row col-12 justify-content-center">
                <div className="col-8 text-start m-5">

                    <div className="col-12 p-3">
                        <Link className='link' to={Costante.HOME} >Home</Link>/Aree marine protette
                    </div>

                    <h3>SELEZIONA UNO DELLE 27 AREE MARINE PROTETTE
                        PER SAPERNE DI PIÙ</h3>

                    <br></br>
                    <br></br>

                    <p>In Italia esistono 871 aree protette, per un totale di oltre 3 milioni di ettari tutetati a
                        terra, circa 2.850mila ettari a mare e 658 chilometri di costa.</p>


                    <div className="cardsList">
                        {listaTagliata?.map(card =>
                            <button onClick={() => aperturaDettaglioAreeMarine(card.objectIdString)} style={{ border: "none", background: "none", padding: 0 }}>
                                <div className="card" style={{ width: 300, haigth: 400 }} key={card.objectIdString}>
                                    <img src={areeMarineImmagine} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <p className="card-text">{card.it.nome}</p>
                                    </div>
                                </div>
                            </button>
                        )}
                    </div>

                    <br></br>
                    <br></br>

                    <nav aria-label="...">
                        <ul className='pagination justify-content-center'>

                            {npage.map(a =>
                                <li className='page-item' key={a}>
                                    <button className='btn btn-info' onClick={() => setCurrentPage(a)}>{a + 1}</button>
                                </li>
                            )
                            }

                        </ul>
                    </nav >

                </div>
            </div>
        </>
    )

}
export default AreeMarine