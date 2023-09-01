import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import LayOut from "./layout/LayOut";
import ProductDetail from "./pages/ProductDetail";
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<LayOut/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
