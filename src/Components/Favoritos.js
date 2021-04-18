import React, {useEffect,useState} from 'react';
import { Link,useParams } from 'react-router-dom'
import './Favoritos.css'

import Navbar from './Navbar'

const Favoritos = () => {


    const [favs, setFavs] = useState([])
    // let { slug } = useParams();
    const getFavoritos = async ()=>{
        let id_user=localStorage.getItem('id')
        const res = await fetch(`http://localhost:3050/favoritos?id_user=${id_user}`)
        const data= await res.json();
        // console.log("favoritos por usuario",data);
        setFavs(data)
        // console.log("estado favs",favs);
    }

    const eliminarFav= async (id)=>{
        // console.log(id);
             const res= await  fetch('http://localhost:3050/favoritos/' + id, {
            method: 'DELETE',
            })
            const resJson= await res.json();
            // console.log(resJson)
            getFavoritos();
    }

    useEffect(() => {
        getFavoritos();
        
    }, [])

    return (
        <>
          <Navbar/>
            <div className="container">
                <div className="row ">
                    
                    <div className="col ">
                    <h1 className="text-center titulo_favoritos">Mis clases favoritas</h1>
                    <div className="row d-flex justify-content-center">
                        {
                            favs.length>0 ? (
                                favs.map(f=>(
                                   
                                    <div className="card text-white  m-4 tarjeta" key={f.idfavoritos}>
                                        <Link  to={`/clases/${f.id_clase}`} className="link_clase"   >
                                            <div className="card-body">
                                                <h3 className="card-title text-white">{f.titulo}</h3> 
                                            </div>
                                        </Link> 

                                        <div className="card-footer pr-3 footer-tarjeta" >
                                            {/* <i className="far fa-bookmark fa-2x float-right " style={{color:'#333333',cursor:'pointer'}} 
                                            // onClick={()=>favoritos(c)}
                                            ></i> */}
                                            <i className="fas fa-bookmark  float-right" style={{color:'#333333',cursor:'pointer'}}
                                            onClick={()=>eliminarFav(f.idfavoritos)}
                                            >
                                            </i> 
                                             {/* el icono con color */}
                                        </div>
                                    </div>
                                ))
                            ): <div>Aún no tienes favoritos 😕😕</div>
                        }
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Favoritos
