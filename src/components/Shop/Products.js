import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'c1',
    title: 'Computer',
    price: 200,
    description: 'Dell computer'
  },
  {
    id: 'c2',
    title: 'Iphone 12 Pro Max',
    price: 1200,
    description: 'Our new iphone 12'
  },
  {
    id: 'c3',
    title: 'Keyboard Hyper X',
    price: 400,
    description: 'Dummy description'
  },
  {
    id: 'c4',
    title: 'Mouse',
    price: 500,
    description: 'Dummy description'
  },
  {
    id: 'c5',
    title: 'Mouse Hyper X',
    price: 900,
    description: 'Dummy description'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map( (ele) => (
            <ProductItem 
              key={ele.id}
              id={ele.id}
              title={ele.title}
              price={ele.price}
              description={ele.description}
            />
          ))
        }
        
      </ul>
    </section>
  );
};

export default Products;

/*
<ProductItem  
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
*/