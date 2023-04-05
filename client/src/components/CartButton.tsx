import React from 'react'
import Fab from '@mui/material/Fab'
import CartIcon from '@mui/icons-material/ShoppingCart'
import './CartButton.css'
import { useCartStore } from '../CartStore'

interface IProps {
    toggleCart: () => void;
}

const CartButton = (props:IProps) => {

  const cart = useCartStore(state => state);

  return (
    <div className='cart-button'onClick={()=> props.toggleCart()}>
        
        <Fab color="primary" aria-label="add">
            {cart.quantity !== 0 && <div className='drink-counter'>{cart.quantity}</div>}  
            <CartIcon />
        </Fab>
  
    </div>
  )
}

export default CartButton