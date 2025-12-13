// File: src/pages/ProductDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Data produk dummy (harus konsisten dengan Products.jsx)
  const products = [
    { id: 1, name: 'Laptop', price: 12000000, category: 'Electronics', description: 'Laptop canggih untuk produktivitas.' },
    { id: 2, name: 'Smartphone', price: 5000000, category: 'Electronics', description: 'Ponsel pintar dengan kamera berkualitas tinggi.' },
    { id: 3, name: 'Headphones', price: 800000, category: 'Electronics', description: 'Headphone nirkabel dengan noise cancellation.' },
    { id: 4, name: 'Book', price: 150000, category: 'Education', description: 'Buku panduan lengkap React Router.' },
    { id: 5, name: 'Desk Lamp', price: 300000, category: 'Home', description: 'Lampu meja modern dengan pencahayaan yang nyaman.' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="page product-detail-page">
        <div className="product-detail">
          <h1>&#10060; Produk Tidak Ditemukan</h1>
          <p>Maaf, produk dengan ID **{id}** tidak ada.</p>
          <Link to="/products" className="btn btn-primary">
            &larr; Kembali ke Daftar Produk
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page product-detail-page">
      <h1>Detail Produk: {product.name}</h1>
      <div className="product-detail">
        <h2>{product.name}</h2>
        <div className="product-info">
          <p><strong>ID Produk:</strong> {product.id}</p>
          <p><strong>Kategori:</strong> {product.category}</p>
          <p><strong>Harga:</strong> <span className="price">Rp {product.price.toLocaleString('id-ID')}</span></p>
          <p><strong>Deskripsi:</strong> {product.description}</p>
        </div>
        <div className="product-actions">
          <Link to="/products" className="btn btn-secondary">
            &larr; Kembali ke Daftar Produk
          </Link>
          <button className="btn btn-primary">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;