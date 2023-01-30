import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbarr from "./components/NavBar/Navbarr";
import NotFound from "./components/NotFound/NotFound";
import GlobalProvider from "./context/GlobalProvider";
import {
  obtenerProductosPorId,
  obtenerProductosPorCategoria,
} from "./services/firebase";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalProvider>
          <Navbarr />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenidos a la tienda Tech.com" />
              }
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
