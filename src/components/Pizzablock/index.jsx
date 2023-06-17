import React from "react";
import classNames from "classnames";
import Button from "../Button";

function PizzaBlock({id, name, imageUrl, price, types, sizes, onClickAddPizza,addedCount }) {
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26,30,40];
  const newsizes = sizes.split(' ')
  const [activType, setActiveType] = React.useState(Number(types[0]));
  const [activSize, setActiveSize] = React.useState(Number(newsizes[0]));

  const onSelectType = (index) => {
    setActiveType(index);

  };
  const onSelectSize = (index) => {
    setActiveSize(index);
    
  };   

  const prices = () => {
    switch (availableSizes[activSize]) {
      case 26:
        price+=0
        break;
      case 30:
        price+=50
        break;
      case 40:
        price+=120
        break;
      default:
        price+=0
        break;
    }
    switch (availableTypes[activType]) {
      case 'тонкое':
        price+=0
        break;
      case 'традиционное':
        price+=25
        break;
      default:
        price+=0
        break;
    }     
    return price
  }

  const onAddPizza = () =>{
    const obj ={
      id: id+availableTypes[activType]+availableSizes[activSize],
      name,
      imageUrl,
      price,
      size: availableSizes[activSize],
      type: availableTypes[activType],
    }
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activType === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activSize === index,
                disabled: !sizes.includes(index),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {
            prices(price)
        } ₽</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  ); 
}

PizzaBlock.defaultProps = {
    name:'___', 
    price:0, 
    types:[],
    sizes:[],
};

export default PizzaBlock;
