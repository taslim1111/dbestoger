import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Kemitraan.css"
import { Navigate, useNavigate } from "react-router-dom";

function Kemitraan() {
  const Navigate = useNavigate();
  return (

    <>
    <Navbar/>
    <div className="kemitraan">
    <div className="promo1">
      <img src="./resto-dbesto.png"/>
      <h1 className="promo1-header">BUKA RESTOMU, WUJUDKAN SUKSESMU!</h1>
      <p className="promo1-desc">Kami tumbuh bersama pengusaha yang percaya bahwa bisnis
        hebat adalah yang menguntungkan dan membawa keberkahan.
      </p>
      <button className="btn-red-kemitraan " onClick={() => Navigate('/Kontak')}>Hubungi kami</button>
    </div>

    <section className="penjelasan">
      <img src="./dbesto-2.png"/>
    <div className="penjelasan-desc">
    <p className="penjelasan-1">Dari anak-anak hingga dewasa, fried chicken selalu
      jadi pilihan, peluang bisnis yang menggiurkan di pasar kuliner rakyat.
    </p>
    <br />
    <p className="penjelasan-2">Sistem kerjasama kami cukup menjanjukan dengan pengembalian modal 100% 
      ke investor dalam masa payback period selanjutnya 50:50 setelah modal kembali.</p>
    </div>
    </section>
    {/* VISI */}
    
      <div className="VISI1">
      <h1>VISI</h1>
      </div>
      <div className="border-visi">
        <div className="card-visi">
              <img src="visi-1.png" alt="market" />
              <div className="info">
                <h3 className="visi">Market Leader</h3>
                <p className="desc">Menjadi market leader untuk
                  bisnis dan resto cepat saji untuk kelas
                  menengah di indonesia
                </p>
              </div>
            </div>
            <div className="card-visi">
              <img src="visi-2.png" alt="bermanfaat" />
              <div className="info">
                <h3 className="visi">Bermanfaat</h3>
                <p className="desc">Memberikan dampak positif dan kebermanfaatan bagi semua pihak</p>
              </div>
            </div>
            <div className="card-visi">
              <img src="visi-3.png" alt="taat" />
              <div className="info">
                <h3 className="visi">Taat hukum</h3>
                <p className="desc">Berlandaskan pada nilai-nilai syariah dan patuh pada hukum yang berlaku di indonesia</p>
              </div>
            </div>
          </div>
    {/* SWOT  */}
    <div className="SWOT">
      <h1>SWOT</h1>
    </div>
    <div className="border-swot">
    <div className="card-swot">
      <h3>Strength</h3>
      <li>Brand yang kuat</li>
      <li>Cita Rasa</li>
      <li>Harga terjangkau</li>
    </div>
    <div className="card-swot">
      <h3>Weakness</h3>
      <li>Isu kualitas produk</li>
      <li>Isu operasional SDM</li>
      <li>Turn over karyawan tinggi</li>
      <li>Menu utama bukan pilihan menu sehat</li>
    </div>
    <div className="card-swot">
      <h3>Opportunity</h3>
      <li>Limpahan Segmen diatasnya</li>
      <li>Bonus demografi</li>
      <li>HKelas menengah atas di second city</li>
      <li>Fokus di menu yang ekonomis</li>
    </div>
    <div className="card-swot">
      <h3>Threats</h3>
      <li>Competitor non PB1</li>
      <li>Standar pelayanan</li>
      <li>Manajemen resto</li>
    </div>
    </div>
    {/* INVESTASI  */}
    <section className="investasi-sec">
      <div className="INVESTASI">
      <h2 className="header-investasi">INVESTASI</h2>
      <div className="investasi-list">
      <img src="./spageti.png"/>
      <ul className="list">
      <li>Pola kemitraan syariah dengan opsi titip kelola dan swakelola</li>
      <li>Established brand sejak 2011</li>
      <li>Fokus pada menu terjangkau dan pengembangan</li>   
      <li>Bugdget investasi yang terjangkau</li>
      <li>Pay back period dengan rata-rata 24-36 bulan</li>
    </ul>
    </div>
    </div>
    
    </section>
    </div>

    <Footer/>
    
    </>
  )
}

export default Kemitraan
