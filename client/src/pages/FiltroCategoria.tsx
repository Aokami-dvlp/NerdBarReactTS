import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import CardDrink from '../components/CardDrink';

export interface IDrink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}



const FiltroCategoria = () => {

  const [selected, setSelected] = useState<string>();
  const [categories, setCategories] = useState<string[]>([]);
  const [drink, setDrink] = useState<any>([]);

      useEffect(() => {
          axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
          .then((res) => {
            setCategories(res.data.drinks.map((drink: any) => drink.strCategory))})
            .catch((err) => console.log(err));       

      }, []);

      useEffect(() => {
        axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+selected)
        .then((res) => {setDrink(res.data.drinks)})
        .catch((err) => console.log(err));
      }, [selected]);



  function creaSelect() {
    return categories.map((category) => {
      return <option key={category} value={category} >{category}</option>;
    });
  };


  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <h1>Filtro Categoria</h1>

        <select className='m-4' value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
          <option disabled selected> -- Seleziona una Categoria -- </option>
          {creaSelect()}
        </select>
      </div>
      <div className='d-flex justify-content-evenly flex-wrap'>
        {drink && drink.map((drink: IDrink) => { return <CardDrink key={drink.idDrink} drink={drink}/> })}
      </div>
    </>
  )
}

export default FiltroCategoria