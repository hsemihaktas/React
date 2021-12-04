import React, {useEffect, useState}from 'react'
import Axios from 'axios'
import Image from '../images/Ilan_Resmi.jpg'

export default function AllEstate() {

    const [valueList,setValueList]=useState([])

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get/aktif`).then((response)=>{
      setValueList(response.data)
    });
},[]);

    return (
        <div>
        {valueList.map((val)=>{
        return(
            <div className="estate-card" >
                <div className="row ">
                    <div className="col-md-4 resim" >       
                        <img src={Image} className="company-or-personal-image" alt="..." ></img>
                        <p className="resim-yazi">{val.ilan_ismi}</p>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body" id="company-or-personal-card-body">
                            <h5>İsmi: {val.ilan_ismi}</h5>  
                            <h5>Fiyatı: {val.ilan_fiyatı}</h5>
                            <h5>Özellikleri: {val.ilan_özellikleri}</h5>  
                            <h5>Yeri: {val.ilan_şehir}</h5>
                            <h5>Satış Türü: {val.ilan_satışTürü}</h5>  
                        </div>
                    </div>
                </div>
            </div>
        ) 
        })}
    </div>
    )
}

