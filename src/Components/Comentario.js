import React from 'react'

 const Comentario=({c,cm})=> {
   

  const eliminar=async(id)=>{
    // console.log('id de comentario',id);
   const res=await fetch(`http://localhost:3050/comentarios/${id}`,{method:'DELETE'});
   const resJson= await res.json();
  //  console.log(resJson)
   cm();
  }

 

    return (
        <div className=" m-4 d-flex " style={{background:'#ededed', padding:'8px',border:"1px solid #eee",borderRadius:"8px"}}>
            
            <div style={{borderRadius:'50%',background:'#ddd',width:'50px',height:'50px'}} 
            className="d-flex justify-content-center align-items-center">
              <i className="far fa-user fa-2x"></i>
              </div> 
              <div className="ml-3">
                  <strong >{c.owner } </strong> 
                <span className=" d-flex align-items-center justify-content-start ">
                    {c.cuerpo_comentario}
                </span>
              </div>
            
  
          <span className="ml-auto d-flex align-items-center " style={{cursor:"pointer"}}
          data-toggle="tooltip" data-placement="right" title="Eliminar"
          onClick={
            (localStorage.getItem('id')==c.id_user)? ()=>eliminar(c.id):()=>console.log("no está permitido")
            
          }
          >
          <i className="fas fa-times-circle fa-2x text-danger "></i>
          </span>
        </div>
    )
}
export default Comentario;