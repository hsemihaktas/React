import React, {useEffect, useState}from 'react'
import Sidebar from "./Sidebar";
import Axios from 'axios'

function IlanSil() {

    const [valueList,setValueList]=useState([])
    const [newIlan_aktiflik,setNewIlan_aktiflik]=useState("")

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get`).then((response)=>{
      setValueList(response.data)
        });
    },[]);

    const updateAktiflik = (ilan_id) =>{
        if (!newIlan_aktiflik.trim()) {
            alert('Lütfen boş alan bırakmayınız!');
            return;
        }
        else{
            Axios.put(`http://localhost:3001/update/ilan`,{ilan_aktiflik:newIlan_aktiflik,ilan_id:ilan_id})
            alert('Başarılı Bir Şekilde Değiştirildi! F5 Atmayı Unutmayın!');
        }
    }

    return (
        <div>
            <Sidebar/>
                <div className="content p-5">
                <h5 className="adminAlert">İlan Aktiflik Değiştirme</h5>
                <div className="row row-cols-1 row-cols-md-3 g-4 wrapper">
                {valueList.map((val)=>{
                return(
                    <div className="col">
                        <div className="company-or-personal-card">
                            <div className="card-body" id="company-or-personal-card-body">
                                <h5>{val.ilan_ismi}-{val.ilan_aktiflik}</h5> 
                                <select className="select" onChange={(event)=>{setNewIlan_aktiflik(event.target.value)}} >
                                    <option>İlan Aktifliğini Değiştirmek için Lütfen Seç</option>
                                    <option value="Aktif">Aktif</option>
                                    <option value="Pasif">Pasif</option>
                                </select>   
                                <button className="button" onClick={()=>{updateAktiflik(val.ilan_id)}}>Değiştir</button>
                            </div>
                        </div>
                    </div>    
                ) 
                })}
            </div>
            </div>
        </div>
    )
}

export default IlanSil
