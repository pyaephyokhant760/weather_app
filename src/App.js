import React from "react";
import Form from "./components/Form";
import Cart from "./components/Cart";
import { api, api_key } from "./api/api";

const App = () => {
  const fetchWeatherData = async () => {
      const res = await api.get(`weather?q=London&appid=${api_key}`);
      
      
  };

  fetchWeatherData(); 

  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow-sm bg-light gap-4">
        <Form />
        <Cart />
      </div>
    </div>
  );
};

export default App;
