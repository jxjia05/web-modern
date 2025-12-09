import React, { useState, useEffect } from 'react';

const EffectDependenciesDemo = () => { // **Perbaikan:** Sintaks fungsi arrow yang benar
  const [count, setCount] = useState(0);
  const [name, setName] = useState(''); // **Perbaikan:** Menggunakan string kosong ""
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [timer, setTimer] = useState(0);
  const [logs, setLogs] = useState([]);
  
  const addLog = (message) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]); // **Perbaikan:** Template literal
  }; // **Perbaikan:** Menutup fungsi addLog

  // Effect 1: Tanpa dependencies - run setelah setiap render
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    addLog('Effect tanpa dependencies dijalankan');
  }); // **Perbaikan:** Menutup useEffect

  // Effect 2: Empty dependencies - run sekali setelah mount
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    addLog('Effect dengan [] dijalankan (mount)');
    return () => { // **Perbaikan:** Format return cleanup function yang benar
      addLog('Cleanup effect [] (unmount)');
    };
  }, []); // **Perbaikan:** Menutup useEffect dengan dependency array []

  // Effect 3: Dependency count - run ketika count berubah
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    addLog(`Effect [count] dijalankan, count: ${count}`); // **Perbaikan:** Template literal
    return () => { // **Perbaikan:** Format return cleanup function yang benar
      addLog('Cleanup effect [count] sebelumnya');
    };
  }, [count]);

  // Effect 4: Dependency name - run ketika name berubah
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    if (name) { // **Perbaikan:** Menutup blok if dengan kurung kurawal
      addLog(`Effect [name] dijalankan, name: "${name}"`); // **Perbaikan:** Template literal
    } // **Perbaikan:** Menutup blok if
  }, [name]);

  // Effect 5: Multiple dependencies - run ketika count atau name berubah
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    addLog(`Effect [count, name] dijalankan, count: ${count}, name: "${name}"`); // **Perbaikan:** Template literal
  }, [count, name]);

  // Effect 6: Window resize event listener dengan cleanup
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    const handleResize = () => { // **Perbaikan:** Sintaks fungsi arrow yang benar
      setWindowWidth(window.innerWidth);
    }; // **Perbaikan:** Menutup fungsi handleResize
    
    addLog('Event listener resize dipasang');
    window.addEventListener('resize', handleResize);
    
    return () => { // **Perbaikan:** Format return cleanup function yang benar
      addLog('Event listener resize dibersihkan');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // **Perbaikan:** Empty dependency array untuk mount/unmount event listener

  // Effect 7: Timer dengan cleanup
  useEffect(() => { // **Perbaikan:** Kurung buka tutup dan arrow function
    addLog('Timer dimulai');
    const interval = setInterval(() => { // **Perbaikan:** Sintaks fungsi arrow yang benar
      setTimer(prev => prev + 1);
    }, 1000);
    
    return () => { // **Perbaikan:** Format return cleanup function yang benar
      addLog('Timer dihentikan');
      clearInterval(interval);
    };
  }, []); // **Perbaikan:** Empty dependency array untuk timer

  const resetLogs = () => { // **Perbaikan:** Sintaks fungsi arrow yang benar
    setLogs([]); // **Perbaikan:** Menghilangkan 'M' yang salah, seharusnya []
  };

  return (
    <div className="dependencies-demo">
      <h2>Demo Effect Dependencies</h2>
      
      <div className="controls">
        <div className="control-group">
          <label>Count: {count}</label> {/* **Perbaikan:** Mengubah Label menjadi label */}
          <button onClick={() => setCount(prev => prev + 1)} className="btn btn-primary">
            +1 Count
          </button>
        </div>
        
        <div className="control-group">
          <label>Name: </label> {/* **Perbaikan:** Mengubah Label menjadi label */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ketik nama..."
            className="text-input"
          />
        </div>
        
        <div className="control-group"> 
          <label>Window Width: {windowWidth}px</label> {/* **Perbaikan:** Mengubah label menjadi label */}
        </div>
        
        <div className="control-group"> 
          <label>Timer: {timer}s</label> {/* **Perbaikan:** Mengubah label menjadi label */}
        </div>
        
        <button onClick={resetLogs} className="btn btn-secondary">
          Reset Logs
        </button>
      </div>
      
      <div className="explanation"> 
        <h3>Penjelasan Dependencies:</h3>
        <ul>
          <li><strong>No dependencies</strong> - Run setelah setiap render</li>
          <li><strong>[]</strong> - Run sekali setelah mount</li>
          <li><strong>[count]</strong> - Run ketika count berubah</li>
          <li><strong>[name]</strong> - Run ketika name berubah</li>
          <li><strong>[count, name]</strong> - Run ketika count **ATAU** name berubah</li>
        </ul>
      </div>
      
      <div className="logs-container"> 
        <h3>Effect Execution Logs:</h3> 
        <div className="logs"> {/* **Perbaikan:** Mengubah ogs menjadi logs */}
          {logs.slice(-10).map((log, index) => (
            <div key={index} className="log-entry">
              {log} {/* **Perbaikan:** Mengubah Log menjadi log */}
            </div>
          ))}
        </div>
      </div>
      
      {logs.length === 0 && <p>Belum ada logs...</p>} {/* **Perbaikan:** Case consistency (logs.length) */}
      <p className="log-count">Total logs: {logs.length}</p> {/* **Perbaikan:** Case consistency (logs.length) */}
    </div>
  );
}; // **Perbaikan:** Menutup komponen dengan kurung kurawal

export default EffectDependenciesDemo;