import React, { useState, useEffect } from 'react';

const DataFetchingDemo = () => { // **Perbaikan:** Sintaks fungsi arrow yang benar
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // **Perbaikan:** Case consistency (loading)
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1);
  const [userDetail, setUserDetail] = useState(null);

  // Effect untuk fetching semua users (sekali saat mount)
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    const fetchUsers = async () => { // **Perbaikan:** Kurung buka tutup dan arrow function
      try {
        setLoading(true); 
        setError(null);
        
        // Simulasi API call dengan timeout
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Data dummy users
        const dummyUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
          { id: 4, name: 'Alice Brown', email: 'alice@example.com' }
        ];
        setUsers(dummyUsers);
      } catch (err) {
        setError('Gagal memuat data users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    }; // **Perbaikan:** Menutup fungsi fetchUsers

    fetchUsers(); // **Perbaikan:** Memanggil fungsi
  }, []); // Empty dependencies - hanya sekali saat mount

  // Effect untuk fetching user detail berdasarkan userId
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    const fetchUserDetail = async () => {
      if (!userId) return; // **Perbaikan:** Penggunaan not operator yang benar

      try {
        setLoading(true);
        setError(null); // Reset error
        
        // Simulasi API call
        await new Promise(resolve => setTimeout(resolve, 500));

        // Data dummy user detail
        const dummyUserDetail = {
          id: userId, 
          name: `User ${userId}`, // **Perbaikan:** Template literal
          email: `user${userId}@example.com`, // **Perbaikan:** Template literal
          phone: `+62 812-3456-789${userId}`,
          address: `Jl. Contoh No. ${userId}, Jakarta`
        };
        setUserDetail(dummyUserDetail);
      } catch (err) {
        setError(`Gagal memuat detail user ${userId}`); // **Perbaikan:** Template literal
        console.error('Error fetching user detail:', err);
      } finally {
        setLoading(false);
      }
    }; // **Perbaikan:** Menutup fungsi fetchUserDetail
    
    fetchUserDetail();
  }, [userId]); // Dependency: userId - re-fetch ketika userId berubah

  const handleUserChange = (event) => { // **Perbaikan:** Sintaks fungsi arrow yang benar
    setUserId(parseInt(event.target.value));
  }; // **Perbaikan:** Menutup fungsi handleUserChange

  return (
    <div className="data-fetching-demo">
      <h2>Demo Data Fetching dengan useEffect</h2>
      
      {/* Loading State */}
      {loading && ( // **Perbaikan:** Case consistency (loading) dan kurung tutup
        <div className="loading"> {/* **Perbaikan:** Case consistency (.loading) */}
          <div className="spinner"></div>
          <p>Memuat data...</p>
        </div>
      )}
      
      {/* Error State */}
      {error && ( // **Perbaikan:** Kurung tutup
        <div className="error-message">
          {error}
        </div>
      )}
      
      {/* Users List */}
      <div className="users-section">
        <h3>Daftar Users</h3>
        <div className="users-grid">
          {users.map(user => (
            <div
              key={user.id}
              className={`user-card ${userId === user.id ? 'active' : ''}`} // **Perbaikan:** Template literal dan menghilangkan '1'
              onClick={() => setUserId(user.id)} // **Perbaikan:** Sintaks onClick
            >
              <h4>{user.name}</h4> 
              <p>{user.email}</p>
            </div>
          ))} 
        </div>
      </div>
      
      {/* User Detail */}
      <div className="user-detail-section">
        <h3>Detail User</h3>
        <div className="user-selector">
          <label>Pilih User ID: </label> {/* **Perbaikan:** Mengubah Label menjadi label (tag HTML/JSX) */}
          <select value={userId} onChange={handleUserChange}>
            {[1, 2, 3, 4].map(id => (
              <option key={id} value={id}>
                User {id}
              </option>
            ))}
          </select>
        </div>
        
        {userDetail && (
          // **Perbaikan:** Menghapus duplikasi card di sini
          <div className="user-detail-card"> 
            <h4>{userDetail.name}</h4> 
            <p><strong>Email:</strong> {userDetail.email}</p> 
            <p><strong>Phone:</strong> {userDetail.phone}</p> 
            <p><strong>Address:</strong> {userDetail.address}</p>
          </div>
        )}
      </div>
    </div>
  );
}; // **Perbaikan:** Menutup komponen dengan kurung kurawal

export default DataFetchingDemo;