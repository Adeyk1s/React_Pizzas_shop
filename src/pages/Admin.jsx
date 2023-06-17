import axios from "axios";
import React, { useState, useEffect} from "react";
import { Item, PizzaLoadingBlock, Modal } from "../components";

function Admin() {
  
  const [data,setData] = useState(null);
  const [modalbtn, setModalBtn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/getPizzas')
    .then((response) => {
    setData(response.data);
    })
  }, [setData]);

  const visibleModal = () => {
    if(modalbtn == false){
      setModalBtn(true);
    } else {
    setModalBtn(false);
    }
  }


  return(
    <>
    
    <Modal activ={modalbtn} onClose={visibleModal}/>
    <div className="admin__wrapper">
      <div className="admin__header">
      <h1>ADMIN PANEL</h1> <button onClick={visibleModal}>Добавить</button>
      </div>
      <div className="listItem">
      {
        data ? data.map((obj) => (
          <Item
          key={obj.id_item}
          id_item={obj.id_item}
          {...obj} 
          />
        )) 
        :
        <PizzaLoadingBlock />
      }
      </div>  
    </div>

    
      
    </>
    
  )

}

export default Admin;