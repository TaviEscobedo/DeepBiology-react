const isAuthenticate=()=>{
    const tk=localStorage.getItem('token');
    if(!tk){
      return false;
    }else{
      return true;
    }
  }

  module.exports=isAuthenticate;