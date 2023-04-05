import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useCartStore } from '../CartStore';

interface IProps {
    index: number;
    drink: {
        name: string;
        price: number;
        quantity: number;
        img: string;
    }
}

const CartCard = (props:IProps) => {

    const drink = props.drink;
    const removeDrink = useCartStore(state => state.removeDrink)

  return (
    <div className='mt-1'>
    <Card sx={{ display: 'flex', justifyContent: 'space-between', border:'1px solid gray' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {drink.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {drink.price}€
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <RemoveShoppingCartIcon onClick={() => removeDrink(props.index)} />
          </IconButton>

        </Box> 
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={drink.img}
        alt="Live from space album cover"
      />
    </Card>
    </div>
  )
}

export default CartCard