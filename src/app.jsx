import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter , Route , Routes  } from "react-router-dom";
function App() {

  return (
    <div>
      <BrowserRouter>


      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="item/:id" element={<ItemDetailContainer itemId={2}/>} />
        <Route path="/nosotros" element={<Nosotros />}/>
      </Routes>



      <ItemListContainer />


      <ItemDetailContainer itemId={2} />
    
    </BrowserRouter>
    </div>
  );
}

export default App;