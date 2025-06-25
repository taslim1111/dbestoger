import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Kemitraan from './Pages/Kemitraan';
import BigOrder from './Pages/BigOrder';
import Kontak from './Pages/Kontak';
import Berita from './Pages/Berita';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Fetch data contoh
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error:', error));
  }, []);

  // Deteksi scroll dan ukuran layar
 useEffect(() => {
  const toggleVisibility = () => {
    const scrolled = window.scrollY > 100;
     const isDesktop = window.innerWidth >= 990;
    const isSmallScreen = window.innerWidth < 400;
    setIsVisible(scrolled && isSmallScreen&&isDesktop);
  };

  window.addEventListener('scroll', toggleVisibility);
  window.addEventListener('resize', toggleVisibility);
  toggleVisibility(); // initial check

  return () => {
    window.removeEventListener('scroll', toggleVisibility);
    window.removeEventListener('resize', toggleVisibility);
  };
}, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/kemitraan" element={<Kemitraan />} />
        <Route path="/bigorder" element={<BigOrder />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/berita" element={<Berita />} />
      </Routes>

      {/* Tombol scroll ke atas – muncul di semua halaman */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-grey-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-[9999]"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
