import React from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Cart from "./components/Cart"
import NavBar from "./components/NavBar"
// import CourseCard from "./components/CourseCard";
 import NotFound from "./components/NotFound"
// export default function App() {
//   return (
  export default function App()  {
     return (
    //     <section className="card-list">
    //       <CourseCard
    //         courseName="Complete React Native 
    //         Mobile App developer - Build 10 apps"
    //         courseThumbnail="https://Link to Image"
    //         courseDetails="2 Free + 92 Paid"
    //         coursePrice="2,999"
    //         courseDiscountedPrice="199"
    //         courseDiscount="93"
    //       />
    //     </section>
    //   );
    // }
    
    <div className="app">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
 }
