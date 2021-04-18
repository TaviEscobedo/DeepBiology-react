import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Alert from './Alert';

const url = "http://localhost:3050/favoritos"
const CardClases=({c})=> {

  const [msg, setMsg] = useState(null)

    // const colors=["#ffb0be", "#e75151","#14b1ab","#ffc93c","#c70039","#560bad","#07689f","#00a8e8"]
   const favoritos= async(clase)=>{
    //  console.log("holi, me voy a favoritos weeey :D",clase);
     const favObj={
       id_clase: clase.id,
       titulo:clase.titulo,
       descripcion: clase.descripcion,
       link: clase.link,
       id_user: localStorage.getItem('id')
     }
    //  console.log("obejto q se va a favs",favObj);
     const res= await fetch(url,{
        method: 'POST',
         headers: {
                'Accept': 'application/json',
              'Content-type': 'application/json'
            },
        body: JSON.stringify(favObj)
           
      })
     const resJson=await res.json();
        // console.log("res",resJson);  
        setMsg(resJson.message)
        setTimeout(() => {
          setMsg(null)
        }, 800);
   }

   //hacer un método post con toda la info de la clase màs id del usuario:para crear favoritos
    return (
     <>
     
         
           <div className="card text-white  m-4"
            style={{maxwidth: '18rem',width:'330px',maxheight:'10rem',
            // background:`${colors[parseInt(Math.random()*8)]}`,
             background:'#01819E',
            border:'1px solid #cecece',borderRadius:'5px'
            }}>
               
              <Link  to={`/clases/${c.id}`} style={{ textDecoration:'none',height:'120px'}} key={c.id} >
                <div className="card-body">
                    <h3 className="card-title text-white">{c.titulo}</h3> 
                </div>
                {
                  (msg) && <Alert msg={msg}/> 
                
              }
             </Link> 
             
             <div className="card-footer pr-3" style={{background:'white',padding:'8px'}}>
                <i className="far fa-bookmark fa-2x float-right " style={{color:'#333333',cursor:'pointer'}} 
                onClick={()=>favoritos(c)}></i>
                {/* <i class="fas fa-bookmark"></i>  el icono con color */}
             </div>
            
           </div>
    
</>
    )
}
export default  CardClases;