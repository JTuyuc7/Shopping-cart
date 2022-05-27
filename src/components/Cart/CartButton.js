import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = ({onClickHandler}) => {

  const { totalQuantity } = useSelector( (state) => state.cart )

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
