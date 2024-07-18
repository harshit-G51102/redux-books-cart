import classes from './CartItem.module.css'; 
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const data=props.item
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(cartActions.addItemToCart(data));
  }
  const removeFromCart=()=>{
    dispatch(cartActions.removeFromCart(data.itemId));
  }
  return (
    <li className={classes.item}> 
      <header>
        <h3>{props.item.name}</h3>
        <div className={classes.price}>
          ${props.item.totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${props.item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}> 
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCart}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
