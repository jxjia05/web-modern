// File: src/pages/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>&#128549; Halaman Tidak Ditemukan</h2>
        <p>Maaf, URL yang Anda cari tidak ada. Silakan periksa kembali alamatnya atau kembali ke beranda.</p>
        <div className="action-buttons">
          <Link to="/" className="btn btn-primary">
            Kembali ke Home
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Hubungi Dukungan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;