import React,{useState,useEffect} from 'react'

const Video=({id})=> {

  
    const [clase, setClase] = useState({})
    
    useEffect(()=>{

      cargarData()
    },[]);


    const cargarData=async ()=>{
        const res= await fetch(`http://localhost:3050/clases/${id}`);
        const data=await res.json();
       
         setClase(data);

    }
    return (    
    <div className="pb-4">
     
         <iframe title="A 3D model" width="100%" height="480" 
          src={clase.link}
         frameBorder="0"
         allow="fullscreen"
         mozallowfullscreen="true" webkitallowfullscreen="true"
       >  
       </iframe>
      
     
  
    </div>
    )
}
export default Video;