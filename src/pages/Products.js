import { Link } from "react-router-dom";
import products from "../data.js";
const Products = () => {
  return (
    <>
      <section className="section">
        <div className="products">
          {products.map((product) => (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
