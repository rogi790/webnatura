import React, { useEffect, useState } from "react";
import * as Costante from './Constante';
import { setOggettoCasuale } from "../store/slices/randomObjectSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setListaOggetti } from "../store/slices/listObjectSlice"
import { useHistory } from 'react-router-dom';
import { setObjectDescription } from "../store/slices/objectDescriptionSlice"
import parchiImmagine from "../immagini/parchiImmagine.jpg"
import "./randomObject.css"
import logoParchi from "../immagini/logoParchi.jpg"
import logoAreaMarina from "../immagini/logoAreeMarine.jpg"
import logoRegione from "../immagini/logoRegione.jpg"
import RandomObjectBar from "./RandomObjectBar";


function Home() {

    const dispatch = useDispatch()
    const history = useHistory()

    const randomObjectForAll = useSelector((state) => state.randomObject)
    const graficPageLoadForAll = useSelector((state) => state.graficPageLoad)
    const [stileObjectGenerico, setStileObjectGenerico] = useState('')


    const codice = "codice";
    const [pagina, setPagina] = useState("VISITA ESPLORA CONOSCI")

    useEffect(() => { riempimentoCampoCasuale() }, [])

    useEffect(() => { riempimentoTuttaLaLista() }, [])

    async function riempimentoCampoCasuale() {

        const response = await fetch('http://localhost:8080/findOneObjectRandomic');
        if (response.ok) {
            dispatch(setOggettoCasuale(await response.json()))

        } else {
            throw new Error('Error: ' + response.status);
        }

    }

    async function riempimentoTuttaLaLista() {

        const response = await fetch('http://localhost:8080/findAll');
        if (response.ok) {
            dispatch(setListaOggetti(await response.json()))
        } else {
            throw new Error('Error: ' + response.status);
        }

    }



    return (
        <>

            <RandomObjectBar />


            <div className="row bg-primary text-white m-3 p-3" >

                <div className="row col-2 m-1">

                    <table class="table">
                        <tr>
                            <th scope="col">
                                <Link className='nav-link m-1 p-1' id=" botton-parchi" to={Costante.PARCHI} src={logoParchi}>
                                    <img src={logoParchi} className="rounded" width={100} />
                                </Link>
                            </th>
                            <th scope="col">
                                <Link className='nav-link  m-1 p-1' to={Costante.AREE_MARINE}>
                                    <img src={logoAreaMarina} className="rounded" width={100} />
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                <Link className='nav-link bg-warning m-1 p-1' to={Costante.REGIONE}>
                                    <img src={logoRegione} className="rounded" width={100} />
                                </Link>
                            </th>
                            <th scope="col">
                                <Link className='nav-link bg-danger m-1 p-1' to={'/*'}>

                                </Link>
                            </th>
                        </tr>

                    </table>

                </div >



                <div className="row col-9 text-center">

                    <p>
                        <h4>VISITA ESPLORA CONOSCI</h4>
                        <br></br>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                        Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                        Aliqua. Ultricies Mi Eget Mauris Pharetra
                    </p>

                    <div className="row">
                        <div className="col-10">
                            <input className=" form-control" type="text" placeholder="Search..." />
                        </div>
                        <div className="col-2 text-start">
                            <button className=" btn btn-dark" >Cerca</button>
                        </div>
                    </div>

                </div>
            </div >

            <div>
                <br></br>
                <h1 className="text-start"><b>LAST NEWS</b></h1>
            </div>
            <div>
                <br></br>
                <p className="text-start">Scopri tutte le ultime novità riguardo i parchi e aree marine protette</p>
                <br></br>
            </div>

            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">parchi Italiani più esplorati</p>
                    </div>
                </div>
            </button>

            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>
            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>

            <br></br>
            <br></br>

            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>
            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>
            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>

            <br></br>
            <br></br>

            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>
            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>
            <button style={{ border: "none", background: "none", padding: 0 }}>
                <div className="card" style={{ width: 300 }} >
                    <img src={parchiImmagine} className="card-img-top" alt="" />
                    <div className="card-body">
                        <p className="card-text">finta</p>
                    </div>
                </div>
            </button>

        </>
    )

}
export default Home