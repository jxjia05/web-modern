import React from "react";
import Counter from "./Counter";
import UserForm from "./UserForm";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Praktik Pertemuan 4 🌸</h1>

      <div className="content-wrapper">
        <Counter />
        <UserForm />
      </div>
    </div>
  );
};

export default App;
