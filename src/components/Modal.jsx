import React from "react";
import {ItemAdd} from "./index";

function Modal({activ, onClose}) {

    if(!activ){
        return null;
    }

    return(
            <div className="modalWrapper" onClick={onClose}>
            <div className="modalPizzas" onClick={ (event) => event.stopPropagation()}>
                <div className="cartAdd" >
                    <button className="closeModal" onClick={onClose}>Х</button>
                    <ItemAdd/>
                </div>
            </div>
            </div>
    )
}

export default Modal;