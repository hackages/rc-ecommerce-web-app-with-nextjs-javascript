export { getServerSideProps } from '../../server/products';
import { Product } from '../components';

const Home = ({products}) => {
  return (
      <main>
        <section className="my-4 p-4 grid grid-cols-3 gap-6 lg:grid-cols-4">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
        </section>
      </main>
  );
};

export default Home;
