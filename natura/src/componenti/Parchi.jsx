import React, { useEffect, useState } from "react";
import * as Costante from './Constante';
import { setOggettoCasuale } from "../store/slices/randomObjectSlice";
import { setObjectDescription } from "../store/slices/objectDescriptionSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ReactPaginate from 'react-paginate';
import { range } from 'lodash';
import { useHistory } from 'react-router-dom';
import { setListaOggetti } from "../store/slices/listObjectSlice"
import parchiImmagine from "../immagini/parchiImmagine.jpg"
import "./randomObject.css"
import logoParchi from "../immagini/logoParchi.jpg"




function Parchi() {

    const dispatch = useDispatch()
    const history = useHistory()

    const randomObjectForAll = useSelector((state) => state.randomObject)
    const listaOggettiParchi = useSelector((state) => state.listObject)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [listaTagliata, setListaTagliata] = useState([])
    const recordsPerPage = 9;
    const [npage, setNpage] = useState([])


    useEffect(() => {
        setNpage(range(Math.ceil(listaOggettiParchi.length / recordsPerPage)));
        setListaTagliata(listaOggettiParchi.slice(currentPage * recordsPerPage, recordsPerPage * (currentPage + 1)))
    }, [listaOggettiParchi])
    useEffect(() => {
        setListaTagliata(listaOggettiParchi.slice(currentPage * recordsPerPage, recordsPerPage * (currentPage + 1)))
    }, [currentPage])

    async function riempimentoListaParchi() {

        await fetch('http://localhost:8080/findAllObjectByColumAndRow?colun=type&key=PN')
            .then((response) => response.json())
            .then((response) => {
                dispatch(setListaOggetti(response))
            })

    }
    useEffect(() => { riempimentoCampoCasuale() }, [])
    useEffect(() => { riempimentoListaParchi() }, [])
    async function riempimentoCampoCasuale() {

        await fetch('http://localhost:8080/findOneObjectRandomicByColumAndRow?colun=type&key=PN')
            .then((response) => response.json())
            .then((response) => {
                dispatch(setOggettoCasuale(response))
            })

    }

    function ricercaPerParola() {

        setListaTagliata(listaOggettiParchi.filter((val) => {
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

    async function aperturaDettaglioParchi(card) {
        await fetch('http://localhost:8080/findAllObjectByColumAndRow?colun=id&key=' + card)
            .then((response) => response.json())
            .then((response) => {
                dispatch(setObjectDescription(response))
            })

        history.push(Costante.DETTAGLIO_PARCHI)
    }


    return (
        <>

            <div className="row col-12 text-white m-3 p-3" id="div-with-bg-parchi">

                <div className="mb-3 h2 text-center m-1">

                    <h3><b> {randomObjectForAll.it.nome} </b></h3>
                </div>
                <div className="mb-3 mx-auto text-center">
                    {randomObjectForAll.it.descrizione}
                </div>
                <button className="col-1 btn btn-success" onClick={() => aperturaDettaglioParchi(randomObjectForAll.objectIdString)} >Leggi di più</button>
                <br></br>
                <br></br>

            </div >

            <div className="row bg-success text-white m-3 p-3" >

                <div className="row col-3">

                    <img src={logoParchi} className="rounded" />

                </div>



                <div className="row col-9 text-center">


                    <h4><b>ESPLORA I PARCHI NAZIONALI E
                        LE AREE NATURALI PROTETTE
                    </b></h4>
                    <br></br>
                    <p>
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
                        <Link className='link' to={Costante.HOME} >Home</Link>/Parchi e aree protette
                    </div>
                    <h3>SELEZIONA UNO DEI 24 PARCHI PER SAPERNE DI PIÙ</h3>

                    <br></br>
                    <br></br>

                    <p>In Italia esistono 871 aree protette, per un totale di oltre 3 milioni di ettari tutetati a
                        terra, circa 2.850mila ettari a mare e 658 chilometri di costa.</p>

                    <div className="cardsList ">
                        {listaTagliata?.map(card =>
                            <button onClick={() => aperturaDettaglioParchi(card.objectIdString)} style={{ border: "none", background: "none", padding: 0 }}>
                                <div className="cardsList">
                                    <div className="card" style={{ width: 300 }} key={card.objectIdString}>
                                        <img src={parchiImmagine} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <p className="card-text">{card.it.nome}</p>

                                        </div>
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
                                    <button className='btn btn-success' onClick={() => setCurrentPage(a)}>{a + 1}</button>
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
export default Parchi