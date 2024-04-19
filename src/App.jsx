import React from "react";
import "./App.css";
import Routes from "./router/index";
import Footer from "./components/Footer";
import Header from "./components/Header"
export default function App() {
  return (
    <div className="App">
      <Header/>
        <Routes />
        <Footer/>
        {/* https://swiperjs.com/demos#pagination-fraction */}
    </div>
  );
}