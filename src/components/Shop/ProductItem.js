import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(cartActions.addItemToCart(props.data));
  }

  return (
    <ul>
        <li className={classes.item}>
          <Card>
            <header>
              <h3>{props.data.name}</h3>
              <div className={classes.price}>${props.data.price.toFixed(2)}</div>
            </header>
            <p>{props.data.describe}</p>
            <div className={classes.actions}>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </Card>
        </li>
    </ul>
  );
};

export default ProductItem;
