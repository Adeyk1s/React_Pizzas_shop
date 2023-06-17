import React from "react";
import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaLoadingBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";


const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" ,order: 'asc' },
  { name: "цене", type: "price", order: 'asc' },
  { name: "алфавиту", type: "name", order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const handleAddPizzaToCart = obj => {
      dispatch(addPizzaToCart(obj));
  }
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category,sortBy,dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
        activeCategory={category} 
        onClickCategory={onSelectCategory} 
        items={categoryNames} 
        />
        <SortPopup 
        activeSortType={sortBy.type}
        items={sortItems} 
        onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock 
                id={obj.id_item}
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id_item}
                addedCount={cartItems[obj.id_item] && cartItems[obj.id_item].items.length}
                {...obj} 
              />
            ))
          : Array(12).fill(0).map((_,index)=> <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
