import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="section">
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/">Back To Home</Link>
    </section>
  );
};
export default Error;
