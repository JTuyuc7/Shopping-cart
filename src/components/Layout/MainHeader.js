import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const { cartVisible } = useSelector( (state) => state.ui )
  const toggleHandler = () => {
    dispatch(uiActions.toggle(!cartVisible))
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
          <nav>
            <ul>
              <li>
                <CartButton onClickHandler={toggleHandler} />
              </li>
            </ul>
          </nav>
    </header>
  );
};

export default MainHeader;
