import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Berita.css";
import Slider from "react-slick";

const berita = [
  {
    image: "./berita11.jpg",
    title: "Modal Awal Franchise Ayam Goreng dan Perhitungannya",
  },
  {
    image: "./berita3.jpg",
    title: "Keunggulan franchise d'BestO dibanding kompetitor",
  },
  {
    image: "./berita4.jpg",
    title: "Peluang bisnis franchise ayam goreng yang menguntungkan",
  },
  {
    image: "./berita5.png",
    title: "Kemilai ramadhan d'BestO",
  },
  {
    image: "./berita6.png",
    title: "Menu baru : Chicken Extra!",
  },
  {
    image: "./berita7.png",
    title: "Peduli Terdampak Kebakaran di Manggarai",
  },
];

const BeritaKami = () => {
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
      <div className="berita-container">
        <h2 className="berita-title">BERITA KAMI</h2>
        <div className="berita-list">
          {berita.map((item, index) => (
            <div className="berita-card" key={index}>
              <img src={item.image} alt={item.title} className="berita-img" />
              <p className="berita-caption">{item.title}</p>
            </div>
          ))}
        </div>
    
      </div>
      <Footer />
    </>
  );
};

export default BeritaKami;
