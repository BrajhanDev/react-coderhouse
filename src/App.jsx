import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbarr from "./components/Navbarr";

function App() {
  return (
    <div>
      <Navbarr />
      <ItemListContainer greeting="Bienvenidos a la tienda Tech.com" />
    </div>
  );
}

export default App;
