import React, {useEffect, useState}from 'react'
import Axios from 'axios'
import Sidebar from "./Sidebar";

function EkipUyeDuzenle() {
    const [valueList,setValueList]=useState([])
    const [newEkip_github,setEkip_github]=useState("")

    useEffect(()=>{
        Axios.get(`http://localhost:3001/api/get/Ekip`).then((response)=>{
      setValueList(response.data)
    });
},[]);

    const ekipGüncelle = (ekip_id) =>{
        if (!newEkip_github.trim()) {
            alert('Lütfen boş alan bırakmayınız!');
            return;
        }
        else{
            Axios.put(`http://localhost:3001/update/ekip`,{ekip_github:newEkip_github,ekip_id:ekip_id})
            alert('Başarılı Bir Şekilde Değiştirildi! F5 Atmayı Unutmayın!');
        }
    }
    return (
        <div>
            <Sidebar/>
            <div className="content p-5">
                <h5 className="adminAlert">Ekip Üye Düzenle</h5>
                <div className="row row-cols-1 row-cols-md-3 g-4 wrapper">
                {valueList.map((val)=>{
                return(
                    <div className="col">
                        <div className="company-or-personal-card">
                            <div className="card-body" id="company-or-personal-card-body">
                                <h5>{val.ekip_isim} {val.ekip_soyisim}</h5> 
                                <input type="text" placeholder="Github Hesabını Yazınız" onChange={(event)=>{setEkip_github(event.target.value)}}></input>
                                <button className="button" onClick={()=>{ekipGüncelle(val.ekip_id)}}>Güncelle</button>
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

export default EkipUyeDuzenle
