import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Kontak.css";

const Kontak = () => {
  
  return (
    <>
      <Navbar />
      <div className="kontak">
      <section className="Kontak">
        <div className="Header">
          <h1>KONTAK</h1>
          <div className="subheading">
            Jika tertarik untuk bermitra dengan kami, ingin menyampaikan kritik dan
            saran, atau hal lainnya, jangan ragu untuk hubungi kami ya!
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <span>bd@dbesto.co.id</span>
            </div>
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <span>0896-5371-3149</span>
            </div>
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <span>
                Jl. M Kahfi 1 Gg. Pembangunan No.55, RT.2/RW.3, Cipedak, Kec.
                Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12630
              </span>
            </div>
          </div>

          <form>
            <input type="text" name="nama" placeholder="Nama" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="pesan" rows="4" placeholder="Tulis pesan disini..." required></textarea>
            <button type="submit">Kirim</button>
          </form>

          <img src="./chili.png" alt="Chili" className="chili" />
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Kontak;
