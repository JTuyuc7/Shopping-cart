import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'c1',
    title: 'product 1',
    price: 200,
    description: 'Description 1'
  },
  {
    id: 'c2',
    title: 'product 2',
    price: 100,
    description: 'Description 2'
  },
  {
    id: 'c3',
    title: 'product 3',
    price: 400,
    description: 'Description 3'
  },
  {
    id: 'c4',
    title: 'product 4',
    price: 500,
    description: 'Description 4'
  },
  {
    id: 'c5',
    title: 'product 5',
    price: 900,
    description: 'Description 5'
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