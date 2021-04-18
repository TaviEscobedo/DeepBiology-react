import React,{useState,useEffect} from 'react'
import CardClases from './CardClases'
import Loader from './Loader'
import Navbar from './Navbar';

const  Home=()=> {

    const [clases, setClases] = useState([])
    const [word, setWord] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const cargaClases= async()=>{
        const res= await fetch("http://localhost:3050/clases");
        const data=await res.json();
        setClases(data);
        setIsLoading(false);
    }
    
    const filtrar=()=>{
        if (!word) {
          return clases
          }
         return clases.filter(c => c.titulo.toLowerCase().includes(word.toLowerCase()))
    }
    useEffect(()=>{
        cargaClases();
    },[])

    return (
        <>
        <Navbar/>
        <div className="container pt-4">
           
            <div className="input-group  mb-4 float-right">
                <input type="text" className="form-control col-4 offset-8 buscador" 
                placeholder="Busca una clase..." 
                style={{borderRadius:"19px", padding:"11px 19px",width:'350px',
                background:'#ECECEC',border:'none'}}
                onChange={e=>setWord(e.target.value)} >
              
                </input> 
            </div>

            <div className="row d-flex justify-content-center">
             
             {
                 (isLoading)? <Loader/>:
                 filtrar().map((c,idx)=>(

                    <CardClases key={idx} c={c} />

                 ))
             }
                    
    
            </div>
           
        </div>
      </>
    )
}
export default  Home;