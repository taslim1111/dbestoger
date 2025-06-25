import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/BigOrder.css";
import { Navigate, useNavigate } from "react-router-dom";

function BigOrder() {
  const Navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="BigOrder">

      {/* header */}
      <section className="big-order-header">
  
        <div className="big-order">
        <h1>Big Order <br /> d'BestO</h1>
        <p>Nikmati bonus seru dan harga spesial yang bikin
          acaramu mari meriah!
        </p>
        </div>
        
        
        </section>
        {/* jargon */}
        <section className="jargon-big-order">
          <div className="jargon-bo-image">
          <img src="./COMBO-CLBK-1.png" alt="combo" />
      
        <div className="jargon-big-order">
        <h1 className="jargon">KENAPA BIG ORDER <br />d'BestO???</h1>
        <p>Karena kami akan memberikan harga dan discount serta free
          product yang menarik untuk kalian yang pesan Big Order d'BestO
        </p>
        </div>
          </div>
        </section>
        {/* BENEFIT */}
        <div className="benefit-container">
        <div className="benefit">
          <h1 className="benefit-h1">Benefit Big Order d'BestO</h1>
        </div>
        <div className="box">
          <h1 className="benefit-text">Free Product</h1>
          <p className="benefit-desc">Minimal pembelian 25 paket akan mendapatkan 1 free product yang sama</p>
        </div>
         <div className="box">
          <h1 className="benefit-text">Discount</h1>
          <p className="benefit-desc">Minimal pembelian 101 paket akan mendapatkan discount
            sampai dengan 10%
          </p>
        </div> 
        <div className="box">
          <h1 className="benefit-text">Cashback</h1>
          <p className="benefit-desc">Minimal pembelian 101 paket akan mendapatkan cashback
            sampai dengan 10% </p>
        </div>
        </div>
        {/* how to order */}
        <section className="hto">
        <div className="how-to-order">
        <h1>HOW TO <br />BIG ORDER</h1>
        <div className="step">
          <h2>STEP 1</h2>
          <p>Customer menghubungi nomor 0896-5371-3149</p>
          <h2>STEP 2</h2>
          <p>Customer melakukan pengisian format order</p>
          <h2>STEP 3</h2>
          <p>Customer melakukan pembayaran down payment dan mengirimkan bukti pembayaran ke WhatsApp Customer Service</p>
          <h2>STEP 4</h2>
          <p>Invoice akan dikirimkan ke customer melalui WhatsApp</p>
          <h2>STEP 5</h2>
          <p>Pesanan akan di antar ke alamat tujuan sesuai dengan tanggal dan waktu yang sudah di tulis melalui format order</p>
          <button className="btn-hto" onClick={()=>Navigate('/Kontak')}>Hubungi kami</button>
      </div>
      </div>
     </section>

      {/* s&k */}
      <div className="SdanK">
        <h1>SYARAT & KETENTUAN</h1>
        <ul>
        <li>1. Pembayaran down payment (DP) minimal 50%
          dari total pemesanan, dan dibayarkan selambat-lambatnya
          7 hari sebelum acara.
        </li>
        <li>2. Pelunasan pemayaran dilakukan selambat-lambatnya 3 hari sebelum acara.</li>
        <li>3. Penambahan pemesanan dapat dilakukan selambat-lambatnya 2 hari sebelum acara dan harus segera dibayarkan lunas.</li>
        <li>4. Jika terjadi pembatalan pemesanan, pembayaran yang telah diterima PT Setya Kunliner Mandiri akan dikembalikan dalam bentuk produk d'BestO</li>
      </ul>
      </div>
       </div>
    <Footer />
    </>
  )
}

export default BigOrder
