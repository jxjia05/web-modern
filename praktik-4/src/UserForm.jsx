import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  // multiple state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama: ${name}\nUmur: ${age}\nEmail: ${email}`);
  };

  return (
    <div className="form-container">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <div className="form-group">
          <label>Nama:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama"
          />
        </div>

        <div className="form-group">
          <label>Umur:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Masukkan umur"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
          />
        </div>

        <button type="submit" className="btn-submit">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default UserForm;
