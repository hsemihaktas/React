import React, {useEffect, useState}from 'react'
import Axios from 'axios'
import Image from '../images/pp.png'


export default function Ekip() {

    const [valueList,setValueList]=useState([])

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get/Ekip`).then((response)=>{
      setValueList(response.data)
    });
},[]);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 wrapper">
            {valueList.map((val)=>{
            return(
                <div className="col">
                    <div className="company-or-personal-card">
                        <img src={Image} className="card-img-top company-or-personal-image" alt="..."/>
                        <div className="card-body" id="company-or-personal-card-body">
                            <h5>{val.ekip_isim}</h5>  
                            <h5>{val.ekip_soyisim}</h5>
                            <h5>{val.ekip_görev}</h5>    
                            <p id="connection-bar">
                                <a href={"https://github.com/"+ val.ekip_github} className="fab fa-github"></a>
                                <a href={"https://www.linkedin.com/in/"+ val.ekip_linkedin} className="fab fa-linkedin"></a>
                                <a href={"mailto:"+ val.ekip_mail} className="fas fa-envelope"></a>
                            </p>
                        </div>
                    </div>
                </div>    
            ) 
            })}
        </div>
    )
}

