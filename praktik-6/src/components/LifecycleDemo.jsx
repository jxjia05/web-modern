import React, { useState, useEffect } from 'react';

const LifecycleDemo = () => { // **Perbaikan:** Sintaks fungsi arrow yang benar
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // 1. Effect tanpa dependencies - run setelah setiap render
  useEffect(() => {
    console.log('1. Effect tanpa dependencies - dijalankan setelah setiap render');
    // Menghapus '7' yang tidak sengaja tercetak
  });

  // 2. Effect dengan empty dependencies - run sekali setelah mount
  useEffect(() => {
    console.log('2. Component mounted - effect dengan []');
    return () => { // **Perbaikan:** Format return cleanup function yang benar
      console.log('Cleanup dari effect dengan [] - component akan unmount');
    };
  }, []); // **Perbaikan:** Menutup useEffect dengan dependency array []

  // 3. Effect dengan dependency count - run ketika count berubah
  useEffect(() => {
    console.log('3. Count berubah:', count);
    
    // Update document title
    document.title = `Count: ${count}`; // **Perbaikan:** Menggunakan template literals yang benar (backticks ``)

    return () => { // **Perbaikan:** Format return cleanup function yang benar
      console.log('Cleanup sebelum count effect dijalankan lagi');
    };
  }, [count]);

  // 4. Effect dengan dependency isVisible
  useEffect(() => {
    console.log('4. Visibility berubah:', isVisible);
  }, [isVisible]);

  const increment = () => { // **Perbaikan:** Sintaks fungsi arrow yang benar
    setCount(prev => prev + 1);
  };

  const toggleVisibility = () => { // **Perbaikan:** Sintaks fungsi arrow yang benar
    setIsVisible(prev => !prev);
  };

  return (
    <div className="Lifecycle-demo">
      <h2>Demo Lifecycle dengan useEffect</h2>
      
      <div className="counter-section">
        <h3>Counter: {count}</h3>
        <button onClick={increment} className="btn btn-primary">
          Tambah Count
        </button>
      </div>
      
      <div className="visibility-section">
        <button onClick={toggleVisibility} className="btn btn-secondary"> 
          {isVisible ? 'Sembunyikan' : 'Tampilkan'} Pesan
        </button>
        
        {isVisible && (
          <div className="message-box">
            {/* **Perbaikan:** Menggunakan backticks untuk pesan string */}
            <p>Pesan ini **{isVisible ? 'terlihat' : 'tersembunyi'}**</p> 
            <p>Count saat ini: {count}</p>
          </div>
        )}
      </div>

      <div className="explanation">
        <h4>Perhatikan Console Browser: </h4>
        <p>Buka Developer Tools (F12) dan lihat console untuk melihat kapan effects dijalankan</p>
      </div>
    </div>
  );
};

export default LifecycleDemo;