import React, {useState} from 'react'
import Sidebar from "./Sidebar";
import Axios from 'axios'

function SirketHakkimdaDuzenleme() {

    const[newSirket_adı,setNewSirket_adı]=useState("");
    const[newSirket_sektörü,setNewSirket_sektörü]=useState("");
    const[newSirket_amaci,setNewSirket_amaci]=useState("");
    const[newSirket_adresi,setNewSirket_adresi]=useState("");
    
    const update = (e) => {
        e.preventDefault();
        //Check for the Name TextInput
        if (!newSirket_adı.trim() || !newSirket_sektörü.trim() || !newSirket_amaci.trim() || !newSirket_adresi.trim()) {
          alert('Lütfen boş alan bırakmayınız!');
          return;
        }
        else{
          updateSirket();
          alert('Başarılı bir şekilde güncellendi!');
        }
      };

    const updateSirket = ()=>{
        Axios.put('http://localhost:3001/update/sirket',{sirket_adı:newSirket_adı, sirket_sektörü:newSirket_sektörü, sirket_amaci: newSirket_amaci, sirket_adresi: newSirket_adresi})
    }

    return (
        <div>
            <Sidebar/>
            <div className="content p-5">
                <h5 className="adminAlert">Şirket Bilgisi Güncelleme</h5>
                <div className="company-or-personal-card">
                  <form>
                      <h5>Sirket Adi</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_adı(event.target.value) }}></input>
                      <h5>Sirket Sektörü</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_sektörü(event.target.value) }}></input>
                      <h5>Sirket Amaci</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_amaci(event.target.value) }}></input>
                      <h5>Sirket Adresi</h5><input type="text" className="text" onChange={(event)=>{ setNewSirket_adresi(event.target.value) }}></input>   
                  </form>
                <button className="button" onClick={update}>Değiştir</button>
                </div>
            </div>
        </div>
    )
}

export default SirketHakkimdaDuzenleme
