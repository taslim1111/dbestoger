import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const message = 'Halo, saya ingin bertanya';

  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* HOME */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-4 py-10">
          <img src="./resto-dbesto.png" alt="resto-dbesto" />
          <div className="kolom-dbesto">
            <h1>dBestO</h1>
            <p>
              restoran cepat saji yang didesain bagi keluarga Indonesia yang
              mengidamkan pengalaman kuliner fried chicken & burger yang lezat,
              bersih, higienis, sehat, halal, cepat dan mudah dengan pelayanan
              dan keramahtamahan khas Indonesia.
            </p>
          </div>
        </section>

        {/* JARGON */}
        <section id="jargon">
          <div className="jargon">
            <div className="jargon-header">
            <h2>JAGONYA RASA</h2>
            <p>
              Tersebar ratusan cabang di penjuru Indonesia. Menjadi favorit dari
              anak-anak hingga orang tua.
            </p>
            <p>
              <button className="btn-red-jargon" onClick={() =>Navigate('/Kemitraan')}>Gabung kemitraan</button>
            </p>
          </div>
           <div className="jargon-image">
          <img src="./ayam.png" alt="ayam" />
          </div>
          </div>
        </section>

        {/* PROMO1 */}
        <section className="promo">
          <div className="promo1-image">
          <img src="./ayam-tabur-1.png" alt="promo" />
          </div>
          <div className="kolom">
            <h3>Ayam pedas bukan sekadar makanan—ini pengalaman.</h3>
            <p>
              Dengan bumbu rahasia yang diwariskan turun-temurun, kami hadirkan
              rasa yang benar-benar otentik. Pedasnya menggigit, gurihnya
              melekat, dan tiap gigitannya bikin susah lupa.
            </p>
            <p>
              <button className="btn-red" onClick={() => Navigate('/Menu')}>Menu</button>
            </p>
          </div>
          
        </section>

        {/* SEJARAH */}
        <section className="sejarah">
        <div className="hero-map">
          <div className="hero-text">
            <h1 className="text-center">FRIEND CHICKEN KESUKAAN KELUARGA SEJAK 1994</h1>
            <p className="text-center fw-bold">
              Tak terasa sudah lebih dari dua dekade dBestO dinikmati keluarga
              Indonesia, betapa bahagianya kami masih bisa menjadi pilihan
              segala kalangan
            </p>
          </div>

          <div className="cta-button">
            <button className="btn-sejarah" onClick={() => Navigate ('/About')}>Sejarah kami</button>
          </div>
        </div>
        </section>
        {/* TESTIMONI */}
        <section className="testimoni">
          <div className="header-testi">
          <h2 className="test">Ngomongin Rasa, Mereka yang Paling Jujur</h2>
          </div>
          <div className="border-testimoni">
          <div className="card-testimoni">
            <p className="quote">
              Bagian luarnya garing, <br />
              <strong>crunchy.</strong><br />
              Dagingnya moist dan tender.
            </p>
            <div className="profile">
              <img src="mamank.png" alt="Mamank Kuniler" />
              <div className="info">
                <p className="nama">Mamank Kuniler</p>
                <p className="role">Food Vlogger</p>
              </div>
            </div>
          </div>

          <div className="card-testimoni">
            <p className="quote">
              dBestO adalah juara 1 di <br />
              battle fried chicken lokal <br />
              versi Tasyi
            </p>
            <div className="profile">
              <img src="tasyi.png" alt="Tasyi Athasyia" />
              <div className="info">
                <p className="nama">Tasyi Athasyia</p>
                <p className="role">Food Vlogger</p>
              </div>
            </div>
          </div>

          <div className="card-testimoni">
            <p className="quote">
              Makan sadas pake nasi, <br />
              enak banget!
            </p>
            <div className="profile">
              <img src="ken-grat.png" alt="Ken & Grat" />
              <div className="info">
                <p className="nama">Ken & Grat</p>
                <p className="role">Food Vlogger</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* PROMO2 */}
        <section id="promo2">
          <div className="kolom2">
            <h3>Mau Nyobain enaknya? Order sekarang!!!</h3>
            <p>
              Hubungi call center kami dan share lokasi lengkapmu — biar kami
              bantu temukan cabang terdekat dan kirimkan kelezatan langsung ke pintumu!
            </p>
                <p>
                <a
                  href={`https://wa.me/${+6289653713149}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-promo2">

                  WhatsApp
                </a>
              </p>

          </div>
          <img src="./promosion.png" alt="promo" />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
