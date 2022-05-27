import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';  

function App() {

  const { cartVisible } = useSelector( (state) => state.ui )

  return (
    <Layout>
      {
        cartVisible && <Cart />
      }
      <Products />
    </Layout>
  );
}

export default App;
