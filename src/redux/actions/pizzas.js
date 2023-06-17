import axios from "axios";

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchPizzas = (sortBy,category) => (dispatch) => {
    dispatch(setLoaded(false));

    if(category === null && sortBy.type === 'popular'){
        axios.get('http://localhost:3001/getPizzas').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === null && sortBy.type === 'price'){
        axios.get('http://localhost:3001/getPizzaspricenull').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === null && sortBy.type === 'name'){
        axios.get('http://localhost:3001/getPizzasnamenull').then(({data}) => {
            dispatch(setPizzas(data));
         });
    }; 


    if(category === 0 && sortBy.type === 'popular'){
        axios.get('http://localhost:3001/getPizzasSort0').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 0 && sortBy.type === 'price'){
        axios.get('http://localhost:3001/getPizzasSort0price').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 0 && sortBy.type === 'name'){
        axios.get('http://localhost:3001/getPizzasSort0name').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };


    if(category === 1 && sortBy.type === 'popular'){
        axios.get('http://localhost:3001/getPizzasSort1').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 1 && sortBy.type === 'price'){
        axios.get('http://localhost:3001/getPizzasSort1price').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 1 && sortBy.type === 'name'){
        axios.get('http://localhost:3001/getPizzasSort1name').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };


    if(category === 2 && sortBy.type === 'popular'){
        axios.get('http://localhost:3001/getPizzasSort2').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 2 && sortBy.type === 'price'){
        axios.get('http://localhost:3001/getPizzasSort2price').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 2 && sortBy.type === 'name'){
        axios.get('http://localhost:3001/getPizzasSort2name').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };


    if(category === 3 && sortBy.type === 'popular'){
        axios.get('http://localhost:3001/getPizzasSort3').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 3 && sortBy.type === 'price'){
        axios.get('http://localhost:3001/getPizzasSort3price').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 3 && sortBy.type === 'name'){
        axios.get('http://localhost:3001/getPizzasSort3name').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };


    if(category === 4 && sortBy.type === 'popular'){
        axios.get('http://localhost:3001/getPizzasSort4').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 4 && sortBy.type === 'price'){
        axios.get('http://localhost:3001/getPizzasSort4price').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };
    if(category === 4 && sortBy.type === 'name'){
        axios.get('http://localhost:3001/getPizzasSort4name').then(({data}) => {
            dispatch(setPizzas(data));
         });
    };

};

export const setPizzas = (items) =>({
    type: 'SET_PIZZAS',
    payload: items,
});