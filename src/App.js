import React from "react";
import Form from "./components/Form";
import Cart from "./components/Cart";

const App = () => {
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
