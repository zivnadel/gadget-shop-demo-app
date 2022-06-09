import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite gadget</h2>
      <ul>
        <ProductItem
          id='p1'
          title='Laptop Pro'
          price={1999}
          description='The prefect laptop for professionals.'
        />
        <ProductItem
          id='p2'
          title='Phone Ultra'
          price={999}
          description='The ultimate machine money can buy!'
        />
        <ProductItem
          id='p3'
          title='Gentle Earbuds'
          price={149}
          description='A handy tool to improve and ease your music-listening.'
        />
        <ProductItem
          id='p4'
          title='Adaptive Stylus'
          price={99}
          description='A stylus fitting both laptops and smartphones, easy to buy - easy to use.'
        />
      </ul>
    </section>
  );
};

export default Products;
