import React, { useEffect } from 'react'
import { Badge, Button, Modal } from 'react-bootstrap'
import axios from 'axios';

interface IProps {
    show: boolean;
    onHide: () => void;
    queryParam: string;
}

interface IDrinkDetails {
    strDrink: string;
    strDrinkThumb: string;
    strIngredients: [string, string, string, string, string, string];
    strInstructionsIT?: string;
    strGlass: string;
}

const ModalDetails = (props:IProps) => {

    const [drinkDetails, setDrinkDetails] = React.useState<IDrinkDetails>({strDrink: '', strDrinkThumb: '', strGlass: '', strIngredients: ['', '', '', '', '', '']});
    const queryParam = props.queryParam.replace(" ", "_").toLowerCase();
    console.log(queryParam);

    useEffect(() => {
        if(queryParam){
            axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`)
            .then((res) => {
              setDrinkDetails({
                strDrink: res.data.drinks[0].strDrink, 
                strDrinkThumb: res.data.drinks[0].strDrinkThumb, 
                strIngredients : [
                res.data.drinks[0].strIngredient1, 
                res.data.drinks[0].strIngredient2, 
                res.data.drinks[0].strIngredient3, 
                res.data.drinks[0].strIngredient4, 
                res.data.drinks[0].strIngredient5, 
                res.data.drinks[0].strIngredient6
              ], 
                strInstructionsIT: res.data.drinks[0].strInstructionsIT,
                strGlass: res.data.drinks[0].strGlass})})
              .catch((err) => console.log(err));       
            }
        }, []);
    

  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {drinkDetails.strDrink}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex align-items-center flex-column'>
        <img src={drinkDetails.strDrinkThumb} alt={drinkDetails.strDrink} width={'250px'} />
        <div className='d-flex justify-content-center m-3'>
            {drinkDetails.strIngredients.map((ingredient) => {
             return <Badge className='m-1' bg='primary'>{ingredient}</Badge>})}
            {drinkDetails.strGlass && <Badge className='m-1' bg='success'>{drinkDetails.strGlass}</Badge>} 
        </div>
        <p>{drinkDetails.strInstructionsIT}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Chiudi</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ModalDetails