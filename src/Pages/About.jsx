import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  return (
   <>
   <Navbar />
        {/* JARGON */}
      <section className="About">
        <div className="About1">
            <div className="kolom1">
            <h1 className="jargon">20 Tahun Rasa yang Mengikat, <br />
                Perjalanan yang Tak Terhenti</h1>
            <p className="text-bawah">
              Berawal dari usaha ayam goreng gerobakan 
              hingga kini berdiri ratusan cabang se-antero negeri
            </p>
             </div>
             <div className="image-about">
              <img src="./ayam-mentai.png" alt="ayam-mentai" className="ayam-mentai" />
             </div>
            </div>
        </section>
        {/* SEJARAH */}
        
          <div className="perjalanan">
          <h1>PERJALANAN KAMI</h1>
          <p>Perjalanan ini bukan tanpa rintangan. Tapi setiap tantangan kami hadapi dengan tekad dan keyakinan. 
            Dari awal yang sederhana, hingga hari ini — semua karena semangat untuk terus maju, dan cinta dari pelanggan setia kami Kami</p>
          </div>
          
            <div className="kolom-about">
              <div className="timeline-container">
              <div className="timeline-item">
                  <img src="./1994.png" alt="KuFC berdiri" className="timeline-image"/> 
                <div className="timeline-content">
                  <p className="year">1994</p>
                  <h3 className="title-yellow">KuFC berdiri</h3>
                  <p>Cerita awal kami bermula dari bisnis ayam goreng gerobakan bernama KuFC</p>                
                </div>
              </div>

              <div className="timeline-item">
              <img src="./1995-1996.png" alt="KuFC berkembang" className="timeline-image" />
                <div className="timeline-content">
                  <p className="year">1995 – 1996</p>
                  <h3 className="title-yellow">KuFC makin berkembang</h3>
                  <p>Tersebar hingga ke Jogja, Bali dan Mataram</p>
                </div>
              </div>

              <div className="timeline-item">
                  <img src="./1998.png" alt="KuFC berdiri" className="timeline-image"/> 
                <div className="timeline-content">
                  <p className="year">1998</p>
                  <h3 className="title-yellow">Krismon!</h3>
                  <p>Krisis moneter melanda negeri. Pemerintah porak-poranda, perekonomian pun berantakan</p>                
                </div>
              </div>

              <div className="timeline-item">
              <img src="./2000.png" alt="KuFC berkembang" className="timeline-image" />
                <div className="timeline-content">
                  <p className="year">2000</p>
                  <h3 className="title-yellow">KuFC bangkit</h3>
                  <p>Mulai dari Bogor, KuFC berusaha untuk bangkit kembali</p>
                </div>
              </div>

              <div className="timeline-item">
                  <img src="./2005.png" alt="KuFC berdiri" className="timeline-image"/> 
                <div className="timeline-content">
                  <p className="year">2005</p>
                  <h3 className="title-yellow">Flu burung</h3>
                  <p>Usaha bangkit masih diusahakan namun virus flu burung datang menyerang bangsa unggas</p>                
                </div>
              </div>

              <div className="timeline-item">
              <img src="./2010.png" alt="KuFC berkembang" className="timeline-image" />
                <div className="timeline-content">
                  <p className="year">2010</p>
                  <h3 className="title-yellow">d'BestO lahir</h3>
                  <p>Di tahun inilah brand d'BestO hadir diinisiasi diLampung kemudian di Jakarta</p>
                </div>
              </div>

              <div className="timeline-item">
                  <img src="./2014-2015.png" alt="KuFC berdiri" className="timeline-image"/> 
                <div className="timeline-content">
                  <p className="year">2014 - 2015</p>
                  <h3 className="title-yellow">Tumbuh pesat</h3>
                  <p>Dengan konsep mitra dan franchise, d'BestO dapat berkembang pesat dengan cabang-cabang baru</p>                
                </div>
              </div>

              <div className="timeline-item">
              <img src="./2017.png" alt="KuFC berkembang" className="timeline-image" />
                <div className="timeline-content">
                  <p className="year">2017</p>
                  <h3 className="title-yellow">PT SKM Berdiri</h3>
                  <p>Perusahaan dimana hingga hari ini menajdi badan usaha d'BestO</p>
                </div>
              </div>

              <div className="timeline-item">
                  <img src="./2018.png" alt="KuFC berdiri" className="timeline-image"/> 
                <div className="timeline-content">
                  <p className="year">2018</p>
                  <h3 className="title-yellow">Brand kedua lahir</h3>
                  <p>Brand kedua ini lahir di medan kemudia Sukabumi dan saat ini yang tersebar berada di purcika</p>                
                </div>
              </div>

              <div className="timeline-item">
              <img src="./2019.png" alt="KuFC berkembang" className="timeline-image" />
                <div className="timeline-content">
                  <p className="year">2019</p>
                  <h3 className="title-yellow">Disusul oleh brand ketiga</h3>
                  <p>Eksplorasi inovasi kuliner kami melebar kedunia minuman yang akhirnya lahir jadi brand baru</p>
                </div>
              </div>

              <div className="timeline-item">
                  <img src="./2023-2024.png" alt="KuFC berdiri" className="timeline-image"/> 
                <div className="timeline-content">
                  <p className="year">2023 - 2024</p>
                  <h3 className="title-yellow">Hadirnya tiga brand baru</h3>
                  <p>Kami tidak berhenti berinovasi di dunia kuliner, kami pun mendirikan bisnis di dunia kopi dan bakso juga.</p>                
                </div>
              </div>

            </div> 
            </div> 
        

   <Footer />
   
   </>
  )
}

export default About
