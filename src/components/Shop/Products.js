import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  
  const DUMMY_DATA=[{
    itemId:'p1',
    price:6,
    name:'book1',
    describe:'my first book'
  },
  {
    itemId:'p2',
    price:8,
    name:'book2',
    describe:'my first book 2'
  },
  {
    itemId:'p3',
    price:12,
    name:'book3',
    describe:'my first book 3'
  },
  {
    itemId:'p4',
    price:20,
    name:'book4',
    describe:'my first book 4'
  }]

  return ( 
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product)=>(<ProductItem key={product.itemId} data={product}/>))  }
      </ul>
    </section>
  );
};

export default Products;
