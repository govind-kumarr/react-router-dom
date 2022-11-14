import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import About from "./pages/About.js";
import Products from "./pages/Products.js";
import SharedProductlayout from "./pages/SharedProductlayout";
import SingleProduct from "./pages/SingleProduct.js";
import ProtectedRoute from "./pages/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.js";
import { useState } from "react";
import Error from "./pages/Error.js";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/*Products Page */}
        <Route path="products" element={<SharedProductlayout />}>
          <Route index element={<Products />} />
          <Route path=":productId" element={<SingleProduct />} />
        </Route>

        <Route path="login" element={<Login setUser={setUser}></Login>} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
