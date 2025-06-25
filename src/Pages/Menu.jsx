import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Menu.css';
import Slider from "react-slick";

const Menu = () => {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <section id="menuutama" className="menu-utama"></section>
      <div className="Menu">
          <h1 className="menu">Menu</h1>
          <div className="tombol-menu">
           <a href="#UTAMA" className="btn-red">Utama</a>
           <a href="#+EXTRA" className="btn-red">+Extra</a>
           <a href="#CAMILAN" className="btn-red">Camilan</a>
           <a href="#MINUMAN" className="btn-red">Minuman</a>
           <a href="#BUNDLE" className="btn-red">Bundle</a>
          </div>
        
      {/* MENU UTAMA  */}
      <section id="UTAMA" className="Menu utama">
      <div className="Menu utama">
        <h2 className="menu-text">Menu utama</h2>
        <div className="card-menu-dis">
        <div className="card-menu">
        <img src="./ayam-1.png"/>
        <p>Ayam Goreng</p></div>
        <div className="card-menu">
        <img src="./ayam-mentai-1.png"/>
        <p>Ayam Mentai</p></div>
        <div className="card-menu">
        <img src="./ayam-clbk.png"/>
        <p>Ayam CLBK</p></div>
        <div className="card-menu">
        <img src="./ayam-sadas.png"/>
        <p>Ayam Sadas</p></div>
        </div>
        </div>
    </section>
      {/* +Extra */}
       <section id="+EXTRA" className="Menu utama">
      <div className="Extra">
        <h2 className="menu-text">+Extra</h2>
        <div className="card-menu-dis">
        <div className="card-menu">
        <img src="./ayam-bumbu-tabur.png"/>
        <p>Bumbu tabur</p> </div>
        <div className="card-menu">
        <img src="./ayam-extra-clbk.png"/>
        <p>CLBK</p></div>
        <div className="card-menu">
        <img src="./ayam-extra-sadas.png"/>
        <p>Sadas</p></div>
      </div>
      </div>
      </section>
      {/* CAMILAN */}
       <section id="CAMILAN" className="Menu utama">
      <div className="Camilan">
        <h2 className="menu-text">Camilan</h2>
        <div className="card-menu-dis">
        <div className="card-menu">
        <img src="./french-fries.png"/>
        <p>Kentang</p></div>
        <div className="card-menu">
        <img src="./kulit.png"/>
        <p>Kulit</p></div>
        <div className="card-menu">
        <img src="./spageti.png"/>
        <p>Spaghetti</p></div>
      </div>
      </div>
      </section>
      {/* MINUMAN */}
       <section id="MINUMAN" className="Menu utama">
      <div className="Minuman">
        <h2 className="menu-text">Minuman</h2>
        <div className="card-menu-dis">
        <div className="card-menu">
        <img src="./ORANGE.png"/>
        <p>Orange</p></div>
        <div className="card-menu">
        <img src="./MARKISA-FLAZZ.png"/>
        <p>Markisa Flazz</p></div>
        <div className="card-menu">
        <img src="./MARKISA-FLAZZ-FLOAT.png"/>
        <p>Markisa Flazz Float</p></div>
      </div>
      </div>
      </section>
      {/* BUNDLE */}
       <section id="BUNDLE" className="Menu utama">
      <div className="Bundle">
        <h2 className="menu-text">Bundle</h2>
        <div className="card-menu-dis">
        <div className="card-menu">
        <img src="./COMBO-1.png"/>
        <p>Combo 1</p> </div>
        <div className="card-menu">
        <img src="./COMBO-2.png"/>
        <p>Combo 2</p></div>
        <div className="card-menu">
        <img src="./COMBO-CLBK-1.png"/>
        <p>Combo CLBK 1</p></div>
        <div className="card-menu">
        <img src="./COMBO-3.png"/>
        <p>Combo burger</p></div>
       </div> 
       </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
