import React,{useState , useEffect} from 'react'
import './Login.css'
import {Link, useHistory } from 'react-router-dom'
import Navbar from "./Navbar";
import Alert from './Alert'

const url = "http://localhost:3050/login"
const Login = () => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
   const [msg, setMsg] = useState(null)

   
   
    let history = useHistory();

    const handleChange=(e)=>{
       
        if(e.target.name==="email"){
            setEmail(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }
    }

    const enviarLogin= async (e)=>{
        
        e.preventDefault()
         let loginObj={
            email,
            password
         }
     
        //  console.log('loginOBj',loginObj);
//http://localhost:3050/login
            const res= await fetch(url,{
            method: 'POST',
            withCredentials: true,
            body: JSON.stringify(loginObj), // data can be `string` or {object}!
             headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            const data= await res.json();
            setMsg(data.message)
            // console.log("server responde:", data.message);
            
            //  console.log("tipo de data user",typeof(data.user));
            //  console.log("tipo de data message", typeof(data.message));
           
            
            // console.log("mensaje",msg);
          
    
            if(data.key)
            {
             localStorage.setItem('token',data.token)
            localStorage.setItem('user',data.user.name)
            localStorage.setItem('id',data.user.id)
            // console.log('localStorageTOKEN',localStorage.getItem('token'))
            }
            
    
            
         
        setEmail('')
        setPassword('')
       
        history.push('/clases')
    }

    useEffect(() => {
       console.log("desde el useEffect del login");
    //    return () => {
    //     setTimeout(() => {
    //         setMsg(null)
    //       }, 1000);
    //   };
    },[])
    return (
        <>
        <Navbar 
        // user={user.name}
        />
        <div className="container">
         
         <div className="row">

        <div className="col-md-4 mx-auto ">
            {
                 (msg)&& <Alert msg={msg}/>
                
            } 
            {/* <div className="container login">  */}
            <div className="card login"> 
            <form 
             onSubmit={enviarLogin} 
            >
                <h3 className="title text-center">Inicia Sesión</h3>


                <div className="form-group col">
                <label >Correo</label>
                <input type="email" className="form-control"  
                //onChange={(e)=>setEmail(e.target.value)}
                name="email"
                onChange={handleChange}
                value={email}
                autoFocus
                placeholder="Ingresa tu correo"/>
                </div>
                
                <div className="form-group col">
                <label >Contraseña</label>
                <input type="password" className="form-control" 
               // onChange={(e)=>setPassword(e.target.value)} 
               name="password"
                 onChange={handleChange}
                value={password}
                placeholder="Ingresa tu contraseña"/>
                </div>
            
            

                <div className="form-group col">    
                <button 
                 type="submit"
                 className="btn   btn-block"
                // onClick={(e)=>enviarLogin(e)}
                 >Iniciar sesión</button>
                <p className="link_registro">¿No tienes cuenta? 
                <Link to={'/registro'}>
                    <strong>Regístrate</strong> 
                </Link>
                </p>
                </div>
            
            </form>
</div>
</div>

</div>
        </div>
        </>
    )
}

export default Login
