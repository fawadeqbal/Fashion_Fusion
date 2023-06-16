import AddProduct from "./Forms/AddProduct";
import ProductForm from "./Forms/ProductForm";
import ProductSearch from "./Forms/ProductSearch";
import UpdateProduct from "./Forms/UpdateProduct";
import Header from "./Header/Header";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/addproduct'} element={<AddProduct/>}/>
      <Route path={'/updateproduct'} element={<ProductSearch/>}/>
    </Routes>
    
    </>
  );
}

export default App;
