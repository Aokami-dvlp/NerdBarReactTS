import React, { useEffect, useRef } from 'react'
import './CartDisplay.css'
import { useCartStore } from '../CartStore'
import CartButton from './CartButton';
import CartCard from './CartCard';
import { Button } from '@mui/material';

interface IProps {
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartDisplay = (props:IProps) => {

    const [total, setTotal] = React.useState(0);

    const cart = useCartStore(state => state);

    useEffect(() => {
        let tot = 0;
        cart.cart.map((drink) => {
            tot += drink.price * drink.quantity;})
        setTotal(tot);
    }, [cart])

    
    const cartContainer = useRef<HTMLDivElement>(null)

    const toggleCart = () => {
        if(!cartContainer.current) return;
        if(cartContainer.current.style.right === '0vw'){
            cartContainer.current.style.right = '-25vw'
        } else {
            cartContainer.current.style.right = '0vw'
        }
    }

  return (
    <>
    <div ref={cartContainer} className='cart-container'>

    <div className='cart'>
        <div className='cart-header'>
            <h1>Carrello</h1>
        </div>
        <div className='cart-body'>
            {cart.cart.map((drink, index) => {
               return <CartCard key={index} index={index} drink={drink}/>}
            )}
        </div>
        <div className='cart-footer d-flex justify-content-between'>
            <h2>Totale: {total.toFixed(2)}€</h2>
            <Button variant='contained' disabled={total===0} onClick={() => {cart.sendOrder();
                                                                                toggleCart();
                                                                                props.setShowToast(true);}}>Invia ordine</Button>
        </div>
    </div>
    <CartButton toggleCart={toggleCart}/>

    </div>
    </>
  )
}


export default CartDisplay