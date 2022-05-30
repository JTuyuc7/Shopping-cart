import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';  
import { sendCartData, fetchCarData } from './store/cart-actions';

let isInital = true;

function App() {
  const dispatch = useDispatch();
  const { cartVisible, notification } = useSelector( (state) => state.ui )
  const cart = useSelector( (state) => state.cart)

  useEffect(() => {
    dispatch(fetchCarData())
  },[dispatch])

  useEffect(() => {

    if(isInital){
      isInital = false;
      return;
    }
    if( cart.changed){
      dispatch(sendCartData(cart))
    }
  },[cart, dispatch])

  return (
    <>

      {
        notification && <Notification 
                          status={notification.status} 
                          title={notification.title} 
                          message={notification.message} 
                        />
      }
      <Layout>
        {
          cartVisible && <Cart />
        }
        <Products />
      </Layout>
    </>
  );
}

export default App;
