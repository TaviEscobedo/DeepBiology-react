import React, {useState,useEffect} from 'react'
import '../Components/Registro.css'
import Alert from './Alert'
import Navbar from './Navbar'
// import {useHistory} from 'react-router-dom'

const url ="http://localhost:3050/registro"
 const Registro = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState(null)


    // let history = useHistory();

    const enviarRegistro= async (e)=>{
        e.preventDefault()
        
        const registro={
            username:name,
            email,
            password
        }
        // console.log("post registro",name, email, password);
     const res= await  fetch(url,{
            method: 'POST',
            body: JSON.stringify(registro), // data can be `string` or {object}!
             headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            });
            const data= await res.json()
            // console.log("respuesta de back: ",data.message);
            setMsg(data.message)
        //    console.log("estado msg front", msg);
           // data.key? history.push('/login'): history.push('/registro')
           setTimeout(() => {
            setMsg(null)
          }, 1000);
        setEmail('')
        setName('')
        setPassword('')
       
    }
useEffect(() => {
    console.log("useEffect desde registro");
},[])
    return (
        <>
        <Navbar/>
        <div className="container">
         
         <div className="row">

        <div className="col-md-6 mx-auto p-3">
           {
                (msg)&&  <Alert msg={msg}/>
                
            } 
            
            <div className="container register"> 

           
            <form onSubmit={enviarRegistro}>
                <h3 className="title text-center">Crea una cuenta</h3>


                <div className="form-group col">
                <label >Nombre de usuario</label>
                <input type="text" className="form-control" 
                    onChange={(e)=>{setName( e.target.value)}}
                    value={name}
                 placeholder="Ingresa tu nombre de usuario"/>
                </div>
                <div className="form-group col">
                <label >Correo</label>
                <input type="email" className="form-control" 
                 onChange={(e)=>{setEmail( e.target.value)}}
                 value={email}
                placeholder="Ingresa tu correo"/>
                </div>
                <div className="form-group col">
                <label >Contraseña</label>
                <input type="password" className="form-control"  
                 onChange={(e)=>{setPassword( e.target.value)}}
                 value={password}
                placeholder="Ingresa tu contraseña"/>
                </div>
            
            

                <div className="form-group col">    
                <button type="submit" className="btn   btn-block">Registrarse</button>
                </div>
            
            </form>
</div>
</div>

</div>
        </div>
        </>
    )
}
export default Registro;