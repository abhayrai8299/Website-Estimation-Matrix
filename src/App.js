import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Wordpress from './components/wordpress';
import Shopify from './components/shopify';
import Calculation from './components/calculation';
import { useState } from 'react';

function App() {
  const [val,setVal]=useState(1);
  const [val2,setVal2]=useState(1);
  const [val3,setVal3]=useState(1);
  const [val4,setVal4]=useState(0)
  const [total,setTotal]=useState(0)
  const [reviewSum,setReviewSum]=useState(0);

  return (
    <div className="App">
      <>
       <h1>Work Estimation Matrix</h1>
       <button><NavLink className="" to="/wordpress">Wordpress</NavLink></button>
      <button><NavLink className="" to="/shopify">Shopify</NavLink></button> 
      </>
      <Routes>
        <Route path="/wordpress" element={<Wordpress setTotal={setTotal} setReviewSum={setReviewSum}
                              val={val} setVal={setVal} val2={val2}  setVal2={setVal2}
                              val3={val3} setVal3={setVal3} val4={val4}  setVal4={setVal4}
                              />} />
        <Route path="/shopify" element={<Shopify setTotal={setTotal} setReviewSum={setReviewSum}
              val={val} setVal={setVal} val2={val2}  setVal2={setVal2}
              val3={val3} setVal3={setVal3} val4={val4}  setVal4={setVal4}
        />} />
        <Route path="/calculation" element={<Calculation total={total} reviewSum={reviewSum} />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
