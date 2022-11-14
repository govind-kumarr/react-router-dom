import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <section className="section product">
      <h2>single product</h2>
    </section>
  );
};

export default SingleProduct;
