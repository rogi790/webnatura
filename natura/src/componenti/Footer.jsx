import React from "react";
import * as Costante from './Constante';
import logoNaturaItaliana from '../immagini/logoNaturaitalia.png';


function Footer() {



    return (
        <>

            <footer className="footer mt-5">
                <div className="row">
                    <div className=" col-5 " >
                        <img src={logoNaturaItaliana} className="rounded d-block my-auto" alt="." height={100} />
                    </div>
                    <div className=" col-7  text-primary my-auto fs-5"  >
                        PRIVACY | RESPONSABILITA' | ACCESSIBILITA' | CONTATTI
                    </div>
                </div>


                <div className="  bg-primary text-light ">
                    <img src="" className="rounded" alt="." />
                    {Costante.TESTO_HEADER_FOOTER}
                </div>

            </footer>


        </>
    )

}
export default Footer