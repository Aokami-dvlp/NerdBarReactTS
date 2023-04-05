import React from 'react'
import CartDisplay from '../components/CartDisplay'
import { Toast, ToastContainer } from 'react-bootstrap';
import cocktailIMG from '../assets/cocktail.png'



const DrinkCart = () => {

  const [showToast, setShowToast] = React.useState(false);

  return (
    <>
        <CartDisplay setShowToast={setShowToast}/>

        <ToastContainer className="p-3 position-fixed" position={"top-center"}>
        <Toast onClose={() => setShowToast(false)} show={showToast} bg={'success'} delay={4000} autohide>
          <Toast.Header>
            <img
              src={cocktailIMG}
              className="rounded me-2"
              style={{width: '20px', height: '20px'}}
            />
            <strong className="me-auto">Successo</strong>
          </Toast.Header>
          <Toast.Body className='fw-bold'>Il tuo ordine è stato inoltrato correttamente e lo riceverai a breve!</Toast.Body>
        </Toast>
    </ToastContainer>
    </>
  )
}

export default DrinkCart