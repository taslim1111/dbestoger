import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="/">
        <img src="./logo-dbesto.png" Link />
        </a>
      </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>Tentang</Link>
        <Link to="/kemitraan" onClick={() => setIsOpen(false)}>Kemitraan</Link>
        <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        <Link to="/bigorder" onClick={() => setIsOpen(false)}>Big Order</Link>
        <Link to="/berita" onClick={() => setIsOpen(false)}>Berita</Link>
        <Link to="/kontak" onClick={() => setIsOpen(false)}>Kontak</Link>
      </div>
     <div
  className={`hamburger ${isOpen ? 'active' : ''}`}
  onClick={toggleMenu}
>
  <div></div>
  <div></div>
  <div></div>
</div>
    </div>
  );
}

export default Navbar;
