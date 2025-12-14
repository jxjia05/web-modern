// App.jsx

import React from 'react';
// Import komponen dari folder yang Anda sediakan
import Header from './components/Header/Header'; 
import Button from './components/Button/Button'; 
import UserCard from './components/UserCard/UserCard'; 
import ProductList from './components/ProductList/ProductList'; 

// Import CSS baru
import './App.css'; 

// --- Data Dummy untuk Demonstrasi ---

const DUMMY_USER = {
  name: "Siti Aminah",
  avatar: "https://i.pravatar.cc/150?img=47" // Contoh avatar
};

const DUMMY_USERS = [
  { id: 1, name: "Ahmad Rizki", email: "ahmad.rizki@example.com", role: "Admin", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Sari Dewi", email: "sari.dewi@example.com", role: "User", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Budi Santoso", email: "budi.santoso@example.com", role: "Moderator", avatar: "https://i.pravatar.cc/150?img=3", isActive: false },
  { id: 4, name: "Joko Anwar", email: "joko.anwar@example.com", role: "User", avatar: "https://i.pravatar.cc/150?img=4" },
];

const DUMMY_PRODUCTS = [
  { id: 101, name: "Kopi Arabika Gayo", price: 150000, category: "Minuman", image: "https://picsum.photos/id/65/300/200", stock: 10 },
  { id: 102, name: "Buku Panduan React", price: 250000, category: "Edukasi", image: "https://picsum.photos/id/35/300/200", stock: 0 }, // Habis
  { id: 103, name: "Keyboard Mekanikal", price: 899000, category: "Aksesoris", image: "https://picsum.photos/id/237/300/200", stock: 5 },
  { id: 104, name: "Mouse Gaming Wireless", price: 349000, category: "Aksesoris", image: "https://picsum.photos/id/238/300/200", stock: 12 },
  { id: 105, name: "Tas Laptop Kulit", price: 450000, category: "Aksesoris", image: "https://picsum.photos/id/239/300/200", stock: 3 },
];

// --- Fungsi Handler Dummy ---

const handleEditUser = (id) => {
  console.log(`Mengedit user dengan ID: ${id}`);
  alert(`Edit User ID: ${id}`);
};

const handleDeleteUser = (id) => {
  console.log(`Menghapus user dengan ID: ${id}`);
  alert(`Delete User ID: ${id}`);
};

const handleAddToCart = (product) => {
  console.log(`Menambahkan ${product.name} ke keranjang`);
  alert(`Ditambahkan: ${product.name}`);
};

const App = () => {
  return (
    <>
      {/* 1. Header (Sudah Sesuai) */}
      <Header 
        title="Demo Komponen React dengan Props" 
        subtitle="Manajemen User dan Produk" 
        user={DUMMY_USER} 
      />
      
      {/* 2. Kontainer Utama: Memperbaiki margin dan lebar konten */}
      <div className="app-container"> 
        
        {/* === BAGIAN MANAJEMEN PENGGUNA === */}
        {/* Header Bagian: Memperbaiki penempatan tombol "Tambah User" */}
        <div className="section-header">
          <h2>Manajemen Pengguna ({DUMMY_USERS.length} users)</h2>
          <Button variant="success" size="medium">
            Tambah User
          </Button>
        </div>
        
        {/* Kontainer Grid: Memperbaiki tata letak UserCard agar sejajar */}
        <div className="user-management-grid">
          {DUMMY_USERS.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onEdit={handleEditUser} 
              onDelete={handleDeleteUser} 
            />
          ))}
        </div>
        
        {/* === BAGIAN KATALOG PRODUK === */}
        {/* Header Bagian: Memperbaiki penempatan tombol "Tambah Produk" */}
        <div className="section-header">
            <h2>Katalog Produk</h2>
            <Button variant="primary" size="medium">
                Tambah Produk
            </Button>
        </div>
        
        {/* ProductList (Sudah Menggunakan Grid Internal) */}
        <ProductList 
          products={DUMMY_PRODUCTS} 
          onAddToCart={handleAddToCart} 
        />
        
      </div>
    </>
  );
};

export default App;