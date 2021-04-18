import React from 'react';
import {jsPDF} from 'jspdf';

const Descargar=({desc})=> {

const jsPdfGenerator=()=>{
    const doc= new jsPDF('p','pt');
     doc.text(20, 20, `${desc}`);
     
    doc.setFont('courier');
    // doc.setFontType('normal');
    doc.save('clase.pdf');
}

    return (
        <button className="btn btn-primary mb-4 "
         data-toggle="tooltip" data-placement="right" title="Descargar material"
         onClick={()=>jsPdfGenerator()}
         >Descargar</button>
    )
}
export default Descargar;
