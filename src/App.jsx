import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbarr from "./components/NavBar/Navbarr";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbarr />
      <Routes>
        
        <Route path="/" element= { <ItemListContainer greeting="Bienvenidos a la tienda Tech.com"  /> } />
        <Route path="/category/:categoryId" element={ <ItemListContainer/> } />
        <Route path="/item/:id" element={ <ItemDetailContainer/> } />
        <Route path="*" element= { <NotFound/> } />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
