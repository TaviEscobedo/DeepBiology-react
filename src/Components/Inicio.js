import Navbar from './Navbar'
import './Inicio.css'

const Inicio = () => {
    return (
        <>
         <Navbar/>
        <div className="container">
            <div className="row justify-content-center">
               <div className="col-10 d-flex align-items-center caja">
                    <div className="texto_entrada">
                        <h1 className="text-center">Tus laboratorios de biología más
                            interactivos</h1>
                    </div>
                    <div className="inicio">
                        
                    </div>
               </div>
            </div>
        </div>
        </>
    )
}

export default Inicio
