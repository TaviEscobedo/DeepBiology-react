import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import isAuthenticate from '../isAuthenticate'
import Logout from '../Logout'
import './Navbar.css'

export default function Navbar() {

  // const [favs, setFavs] = useState([])
  // // let { slug } = useParams();
  // const getFavoritos = async ()=>{
  //     let id_user=localStorage.getItem('id')
  //     const res = await fetch(`http://localhost:3050/favoritos?id_user=${id_user}`)
  //     const data= await res.json();
  //     // console.log("favoritos por usuario",data);
  //     setFavs(data)
  //     // console.log("estado favs",favs);
  // }
  
 
 
    return (
       
        <nav className="navbar navbar-light cabecera " >
         { isAuthenticate()?
          (<Link to={'/clases'} className="navbar-brand text-white font-weight-bold ml-4" style={{fontSize:'34px'}} >
            DeepBiology
          </Link>):
          (<Link to={'/'} className="navbar-brand text-white font-weight-bold ml-4" style={{fontSize:'34px'}} >
            DeepBiology
          </Link>)

         }
      
<div 

>
    {
         !isAuthenticate()?(<>
         <NavLink to={'/login'} type="button" className="btn navLLink  px-3 mr-4" activeClassName="btn-dark" >
         {/* <button type="button" className="btn   px-3 mr-4" activeClassName="btn-dark" > */}
           Iniciar sesión
           {/* </button> */}
       </NavLink>
       <NavLink to={'/registro'} type="button" className="btn navLLink px-4 mr-4 " activeClassName="btn-dark">
           {/* <button type="button" className="btn  px-4 mr-4 " activeClassName="btn-dark"> */}
             Regístrate
             {/* </button> */}
       </NavLink></>):
      (
        <>
        <div className="dropdown show ml-auto mr-4">
        <a className="btn btn-dark dropdown-toggle  "  role="button" href="#"
         id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" 
         aria-expanded="false"
       
         >
          {localStorage.getItem('user') }
        </a>

        <div className="dropdown-menu menu" 
        aria-labelledby="dropdownMenuLink"
        >
         
          <Link to="/favoritos" className="dropdown-item" href="#" >
          <i className="far fa-bookmark mr-2"></i>
            Mis favoritos </Link>
          <div className="dropdown-divider"></div>
          <Link to="/login" className="dropdown-item"  onClick={()=>Logout()}>Cerrar sesión</Link>
        </div>
    </div>
    </>
      )
       }
  
      
      
   
    </div> 
   

        </nav>
    )
}