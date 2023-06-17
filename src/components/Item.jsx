import React, { useState } from "react";


function Item({id_item, name, imageUrl, price, sizes, types, category }) {
  
  const [prices,setPrices] = useState("");
  const [imageUrls,setImageUrls] = useState("");
  const [names,setNames] = useState("");
  const [type,setTypes] = useState("");
  const [size,setSizes] = useState("");
  const [categorys,setCategorys] = useState("");

  const obj = {
    id : id_item,
    name: names === "" ? name : names,
    imageUrl: imageUrls === "" ? imageUrl : imageUrls,
    price: prices === "" ? price : prices,
    sizes: size === "" ? sizes : size,
    types: type === "" ? types : type,
    category: categorys === "" ? category : categorys,
  }
  const saveHandler = () => {
    fetch(`http://localhost:3001/savePizzas?pizzas=${obj.id + "," + obj.name +","+obj.imageUrl +","+ obj.price +","+ obj.sizes +","+ obj.types + "," + obj.category}`, {
      method: 'POST'
    })
    window.location.reload();
  }
  const deleteHandler = () => {
    fetch(`http://localhost:3001/deletePizzas?pizzas=${obj.id}`, {
      method: 'POST'
    })
    window.location.reload();
  }
  
  
  return (
    <div className="item">
      <picture>
        <img src={imageUrl} alt={name} />
        <input type="file" name="photo-name" onChange={(e)=>setImageUrls(e.target.value)}/>
      </picture>
      <input type="text" placeholder={name} onChange={(e)=>setNames(e.target.value)} className="inputName" />
      <div className="itemType">
      <select name="itemTypes" id="" onChange={(e)=>setTypes(e.target.value)}>
          {types !== '0' || types !== '1' || types !== '0 1' ? <option value="" selected>Вид теста</option> : <option value="" >Вид теста</option>}
          {types === '0' ? <option value="0" selected>Тонкое</option> : <option value="0" >Тонкое</option>}
          {types === '1' ? <option value="1" selected>Традиционное</option> : <option value="1" >Традиционное</option>}
          {types === '0 1' ? <option value="0 1" selected>Тонкое и Традиционное</option> : <option value="0 1" >Тонкое и Традиционное</option>}
        </select>
      </div>
      <div className="itemsize">
        <select name="itemSizes" id="" onChange={(e)=>setSizes(e.target.value)}>
          {sizes !== '26' || sizes !== '30' || sizes !== '40' || sizes !== '26 30' || sizes !== '26 40' || sizes!== '30 40' || sizes !== '26 30 40' ? <option value="" >Размеры пиццы</option> : <option value="" >Размеры пиццы</option> }
          {sizes === '26' ? <option value="0" selected>26см</option> : <option value="0">26см</option>}
          {sizes === '30' ? <option value="1" selected>30см</option> : <option value="1">30см</option>}
          {sizes === '40' ? <option value="2" selected>40см</option> : <option value="2">40см</option>}
          {sizes === '26 30' ? <option value="0 1" selected>26см 30см</option> : <option value="0 1">26см 30см</option>}
          {sizes === '26 40' ? <option value="0 2" selected>26см 40см</option> : <option value="0 2">26см 40см</option>}
          {sizes === '30 40' ? <option value="1 2" selected>30см 40см</option> : <option value="1 2">30см 40см</option>}
          {sizes === '26 30 40' ? <option value="0 1 2" selected>26см 30см 40см</option> : <option value="0 1 2">26см 30см 40см</option>}
        </select>
      </div>
      <div className="itemcategory">
        <select name="itemCategorys" id="" onChange={(e)=>setCategorys(e.target.value)}>
          {category !== '0' || category !== '1' || category !== '2' || category !== '3' || category !== '4' ? <option value="" selected>Категория</option> : <option value="" >Категория</option>}
          {category === '0' ? <option value="0" selected>Мясная</option> : <option value="0" >Мясная</option>}
          {category === '1' ? <option value="1" selected>Вегетарианская</option> : <option value="1" >Вегетарианская</option>}
          {category === '2' ? <option value="2" selected>Гриль</option> : <option value="2" >Гриль</option>}
          {category === '3' ? <option value="3" selected>Острая</option> : <option value="3" >Острая</option>}
          {category === '4' ? <option value="4" selected>Закрытая</option> : <option value="4" >Закрытая</option>}
        </select>
      </div>
      <input type="" placeholder={price} onChange={(e)=>setPrices(e.target.value)} className="inputValue"/>
      <div className="tools">
        <button onClick={saveHandler}>Сохранить</button>
        <button onClick={deleteHandler}>Удалить</button>
      </div>
    </div>
  );
}
export default Item;
