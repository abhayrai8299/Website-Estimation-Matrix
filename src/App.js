import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Wordpress from './components/wordpress';
import Shopify from './components/shopify';
import Calculation from './components/calculation';

function App() {
  return (
    <div className="App">
      <>
       <h1>Shopify</h1>
       <button><NavLink className="" to="/wordpress">Wordpress</NavLink></button>
      <button><NavLink className="" to="/shopify">Shopify</NavLink></button> 
      </>
      <Routes>
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/calculation" element={<Calculation />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
