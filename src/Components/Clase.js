import React,{useEffect,useState} from 'react'
import Comentario from './Comentario'
import Descargar from './Descargar'
import Video from './Video'
import {useParams} from 'react-router-dom';
import Loader from './Loader';
import Navbar from './Navbar';



const Clase=()=> {

    const {id}=useParams();
    const [clase, setClase] = useState({})
    const [comentarios, setComentarios] = useState([])
    const [mensaje,setMensaje]=useState('')
    const [isLoading, setIsLoading] = useState(true)
    

   
  

   const enviarMsje=async (e)=>{
       e.preventDefault()
     
       const res= await fetch("http://localhost:3050/comentarios",{
        method: 'POST',
         headers: {
                'Accept': 'application/json',
              'Content-type': 'application/json'
            },
        body: JSON.stringify({
            cuerpo_comentario:mensaje,
            id_clase:id,
            id_user: localStorage.getItem('id'),
            owner:localStorage.getItem('user')
        })
           
      })
     const formatoJson=await res.json();
        // console.log("res",formatoJson);     
         setMensaje("")
         cargaMsjes()
         
   }

   const cargarData=async ()=>{
    const res= await fetch(`http://localhost:3050/clases/${id}`);
    const data=await res.json();
    //  console.log('dataaa idd',data.id);
     setClase(data);
      setIsLoading(false)
}

const cargaMsjes= async()=>{
  const res = await fetch(`http://localhost:3050/comentarios?claseId=${id}`)
  const data= await res.json();
  //  console.log("coemntarios por clase",data);
  setComentarios(data);
}
      

       useEffect(()=>{
       
        cargarData()
        cargaMsjes()
      },[]);

    return (
        <>
       <Navbar/>
        <div className="container-fluid mt-4">
        <div className="row justify-content-center">
            <div className="col-md-7 col-12 overflow-auto" >
             { 
             isLoading? <Loader/>: 
             <Video id={id} />
             }
           
           {
             comentarios.length>0 &&(
               comentarios.map((co,idx)=>(

                   <Comentario key={idx} c={co} cm={cargaMsjes}/>
               ))
             )
           }
         
            </div>
            <div className="col-md-3 col-12 overflow-hidden">
                <h1 style={{color:'#383838'}}>
                  {clase.titulo}  
                  </h1>
                <p>
                   {clase.descripcion}
                  </p>
            
            <hr/>
            <Descargar desc={clase.descripcion}/>

            <form  
              style={{ width:"100%" }}
             onSubmit={(e)=>enviarMsje(e)}>

               <div className="input-group">
             
               <input type="text" 
               className="form-control" 
                 placeholder="Escribe aquí tu comentario..."  
                aria-describedby="basic-addon2"
                value={mensaje}
                onChange={(e)=>setMensaje(e.target.value)}
               />

                <div className="input-group-append">
                    <button className="btn btn-success" type="submit" 
                    style={{margin:"0"}}
                    >Comentar</button>
                </div>
               
                </div>
           </form>
            </div>
        </div>
        </div>
        </>
    )
}
export default Clase;