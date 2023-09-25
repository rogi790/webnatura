import React from "react";
import * as Costante from './Constante';
import logoNaturaItaliana from '../immagini/logoNaturaitalia.png'

function Header() {



    return (
        <>

            <div className="row col-12">

                <div className="  bg-primary text-light " >
                    <img src="" className="rounded text-center" alt="." height={100} />
                    {Costante.TESTO_HEADER_FOOTER}
                </div>


            </div>

            <div className="row mt-5">
                <div className="col-5 ">

                    <img src={logoNaturaItaliana} className="rounded text-center" alt="." height={100} />

                </div>

                <div className="col-1 text-end my-auto">

                    <div >
                        Facebook
                    </div>

                </div>
                <div className="col-1 text-end my-auto">

                    <div >
                        Facebook
                    </div>

                </div>
                <div className="col-1 text-end my-auto">

                    <div >
                        Facebook
                    </div>

                </div>
                <div className="col-1 text-end my-auto">

                    <div >
                        Facebook
                    </div>

                </div>
                <div className="col-1 text-end my-auto">

                    <div >
                        Facebook
                    </div>

                </div>
                <div className="col-1 text-end my-auto">

                    <div >
                        Facebook
                    </div>

                </div>





            </div>

            <div className="row col-12">

                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>


        </>
    )

}
export default Header