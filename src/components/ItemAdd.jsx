import React, { useState } from "react";


function ItemAdd() {
  
  const [prices,setPrices] = useState("");
  const [imageUrls,setImageUrls] = useState("");
  const [names,setNames] = useState("");
  const [type,setTypes] = useState("");
  const [size,setSizes] = useState("");
  const [categorys,setCategorys] = useState("");

  const obj = {
    name: names,
    imageUrl: imageUrls,
    price: prices,
    sizes: size,
    types: type,
    category: categorys,
  }
  const AddHandler = () => {
    fetch(`http://localhost:3001/addPizzas?pizzas=${obj.name +","+obj.imageUrl +","+ obj.price +","+ obj.sizes +","+ obj.types + "," + obj.category}`, {
      method: 'POST'
    })
    window.location.reload();
  }
  
  
  
  return (
    <div className="item">
      <picture>
        <img src={imageUrls} alt="" />
        <input type="file" name="photo-name" onChange={(e)=>setImageUrls(e.target.value)}/>
      </picture>
      <input type="text" placeholder='Название' onChange={(e)=>setNames(e.target.value)} className="inputName" />
      <div className="itemType">
      <select name="itemTypes" id="" onChange={(e)=>setTypes(e.target.value)}>
          {type !== '0' || type !== '1' || type !== '0 1' ? <option value="" selected>Вид теста</option> : <option value="" >Вид теста</option>}
          {type === '0' ? <option value="0" selected>Тонкое</option> : <option value="0" >Тонкое</option>}
          {type === '1' ? <option value="1" selected>Традиционное</option> : <option value="1" >Традиционное</option>}
          {type === '0 1' ? <option value="0 1" selected>Тонкое и Традиционное</option> : <option value="0 1" >Тонкое и Традиционное</option>}
        </select>
      </div>
      <div className="itemsize">
        <select name="itemSizes" id="" onChange={(e)=>setSizes(e.target.value)}>
          {size !== '26' || size !== '30' || size !== '40' || size !== '26 30' || size !== '26 40' || size !== '30 40' || size !== '26 30 40' ? <option value="" >Размеры пиццы</option> : <option value="" >Размеры пиццы</option> }
          {size === '26' ? <option value="0" selected>26см</option> : <option value="0">26см</option>}
          {size === '30' ? <option value="1" selected>30см</option> : <option value="1">30см</option>}
          {size === '40' ? <option value="2" selected>40см</option> : <option value="2">40см</option>}
          {size === '26 30' ? <option value="0 1" selected>26см 30см</option> : <option value="0 1">26см 30см</option>}
          {size === '26 40' ? <option value="0 2" selected>26см 40см</option> : <option value="0 2">26см 40см</option>}
          {size === '30 40' ? <option value="1 2" selected>30см 40см</option> : <option value="1 2">30см 40см</option>}
          {size === '26 30 40' ? <option value="0 1 2" selected>26см 30см 40см</option> : <option value="0 1 2">26см 30см 40см</option>}
        </select>
      </div>
      <div className="itemcategory">
        <select name="itemCategorys" id="" onChange={(e)=>setCategorys(e.target.value)}>
          {categorys !== '0' || categorys !== '1' || categorys !== '2' || categorys !== '3' || categorys !== '4' ? <option value="" selected>Категория</option> : <option value="" >Категория</option>}
          {categorys === '0' ? <option value="0" selected>Мясная</option> : <option value="0" >Мясная</option>}
          {categorys === '1' ? <option value="1" selected>Вегетарианская</option> : <option value="1" >Вегетарианская</option>}
          {categorys === '2' ? <option value="2" selected>Гриль</option> : <option value="2" >Гриль</option>}
          {categorys === '3' ? <option value="3" selected>Острая</option> : <option value="3" >Острая</option>}
          {categorys === '4' ? <option value="4" selected>Закрытая</option> : <option value="4" >Закрытая</option>}
        </select>
      </div>
      <input type="" placeholder='Цена' onChange={(e)=>setPrices(e.target.value)} className="inputValue"/>
      <button className="addButton" onClick={AddHandler}>Добавить</button>
    </div>
  );
}
export default ItemAdd;
