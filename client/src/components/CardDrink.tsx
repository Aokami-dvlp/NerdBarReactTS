import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IDrink } from '../pages/FiltroCategoria';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import ModalDetails from './ModalDetails';
import { useCartStore } from '../CartStore';
import cocktailIMG from '../assets/cocktail.png';


interface IProps {
    drink: IDrink;
}


const CardDrink = (props: IProps) => {

  const cart = useCartStore(state => state);

  const [showToast, setShowToast] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [queryParam, setQueryParam] = React.useState<string>('');
  
  const randomPrice = ((Math.random() * 5) + 3).toFixed(2);

  const cartable = {
    name: props.drink.strDrink,
    price: Number(randomPrice),
    quantity: 1,
    img: props.drink.strDrinkThumb
  };

    return (
        <>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.drink.strDrinkThumb}/>
          <Card.Body>
            <Card.Title>{props.drink.strDrink}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Codice drink: {props.drink.idDrink}</ListGroup.Item>
            <ListGroup.Item>Prezzo: {randomPrice}</ListGroup.Item>
          </ListGroup>
          <Card.Body className='d-flex justify-content-between'>
            <Button value={props.drink.strDrink} 
            onClick={(e) => {setQueryParam(e.currentTarget.value)
                              setModalShow(true)}}>
            Dettagli</Button>
            <Button onClick={() => {cart.addDrink(cartable);
                                    setShowToast(true);}} >Ordina</Button>
          </Card.Body>
        </Card>

        {queryParam && <ModalDetails show={modalShow} onHide={() => setModalShow(false)} queryParam={queryParam}/> }

        <ToastContainer className="p-3 position-fixed" position={"top-end"}>
        <Toast onClose={() => setShowToast(false)} show={showToast} bg={'success'} delay={2000} autohide>
          <Toast.Header>
            <img
              src={cocktailIMG}
              className="rounded me-2"
              style={{width: '20px', height: '20px'}}
            />
            <strong className="me-auto">Successo</strong>
          </Toast.Header>
          <Toast.Body className='fw-bold'>{cartable.name} aggiunto al carrello</Toast.Body>
        </Toast>
    </ToastContainer>
        </>
      );
}

export default CardDrink;