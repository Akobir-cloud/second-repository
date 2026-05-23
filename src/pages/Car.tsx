

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import icon from "../assets/7a270f7d-6048-45bb-9dd0-24d585d021a0 2.svg"

interface Complectation {
  name: string;
  title: string;
  price: string;
}

interface Model {
  id: number;
  name: string;
  price: string;
  image: string;
  slug: string;
  complectations: Complectation[];
}

const Car: React.FC = () => {
  const { slug } = useParams();

  const [car, setCar] = useState<Model | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  // MODEL FETCH
  useEffect(() => {
    fetch(`http://localhost:3000/models?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data[0]);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  if (!car) {
    return (
      <div className="bg-[#05141f] min-h-screen flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#05141f] text-white min-h-screen">
 <nav 
              data-aos="fade-down" 
              data-aos-duration="1000"
              className="fixed w-full h-[70px] md:h-[80px] z-[100] bg-[#05141f]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/5 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 transition-all duration-500"
            >
              
              {/* LOGO */}
              <div className="flex-shrink-0 font-bold text-xl md:text-2xl tracking-widest">
                <Link to="/">
                  <img className="" src="/7a270f7d-6048-45bb-9dd0-24d585d021a0 2.svg" alt="Kia Logo" />
                </Link>
              </div>
      
              {/* ASOSIY MENYU (MARKAZ) */}
              <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
                <Link to="/models" className="hover:text-white transition-colors">
                  Modellar
                </Link>
                <Link to="/offers" className="hover:text-white transition-colors">
                  Takliflar
                </Link>
                <a className="hover:text-white transition-colors" href="#">
                  Chegirmalar
                </a>
                
                {/* Test drayv tugmasi onClick funksiyasi bilan */}
                <a href="#test-drive"  className="hover:text-white transition-colors cursor-pointer">
                  Test-drayv
                </a>
                
                <a className="hover:text-white transition-colors" href="#">
                  Yangiliklar
                </a>
                <Link to="/services" className="hover:text-white transition-colors">
                  Servis
                </Link>
              </div>
      
              {/* O'NG TOMON (Ijtimoiy tarmoqlar, Til, Tugma) */}
              <div className="flex items-center space-x-4 md:space-x-6">
                
                {/* Ijtimoiy tarmoqlar */}
                <div className="hidden md:flex items-center space-x-4 text-gray-400 border-r border-white/20 pr-4 md:pr-6">
                  {/* Instagram */}
                  <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300" target="_blank" rel="noreferrer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  {/* Telegram */}
                  <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300" target="_blank" rel="noreferrer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300" target="_blank" rel="noreferrer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.54 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.54-5.58z"></path>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
      
      
      
                {/* Tugma */}
                <Link to="/contact">
                  <button className="bg-white text-black px-4 md:px-6 py-2 text-xs md:text-sm font-bold rounded-sm hover:bg-gray-200 transition-colors uppercase tracking-wider shadow-lg">
                    BOG'LANISH
                  </button>
                </Link>
              </div>
            </nav>
       <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      
      {/* HERO */}
      <section className="relative pt-16 w-full min-h-[700px] flex items-center overflow-hidden">
        
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05141f] via-[#05141f]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
          <div className="max-w-2xl">

            <p
              data-aos="fade-right"
              className="uppercase tracking-[5px] text-gray-300 mb-4"
            >
              Premium Car
            </p>

            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-6xl md:text-7xl font-black italic uppercase mb-6"
            >
              {car.name}
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-end gap-4"
            >
              <p className="text-gray-300">
                Boshlang'ich narxi
              </p>

              <h2 className="text-4xl font-bold ">
                {car.price} UZS
              </h2>
            </div>

             <a 
              data-aos="fade-up" 
              data-aos-delay="800" 
              className=" mt-6 inline-block animate-float bg-white text-[#05141f] font-bold py-3.5 px-10 rounded shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:bg-gray-200 hover:shadow-[0_15px_40px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-sm mt-2" 
              href="#"
            >
              Prays listni yuklab oling
            </a>
          </div>
        </div>
      </section>

      {/* COMPLECTATIONS */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-5">

          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              className="text-4xl font-bold mb-5"
            >
              Komplektatsiyalar
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-gray-400"
            >
              Siz uchun mos variantni tanlang
            </p>
          </div>

          <div className="space-y-6">

            {car.complectations?.map(
              (item, index) => (
                <div
                  key={index}
                  data-aos={
                    index % 2 === 0
                      ? "fade-right"
                      : "fade-left"
                  }
                  data-aos-delay={index * 100}
                  className="bg-[#0a1d2d] border border-white/10 rounded-2xl p-7 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                    {/* LEFT */}
                    <div className="lg:w-2/3">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {item.title}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:w-1/3 flex flex-col lg:items-end">

                      <p className="uppercase text-xs tracking-[3px] text-gray-500 mb-2">
                        Narxi
                      </p>

                      <h4 className="text-3xl font-bold mb-5">
                        {item.price} UZS
                      </h4>

                      <button className="bg-white text-black px-7 py-3 font-bold uppercase hover:bg-gray-200 transition">
                        Sotib olish
                      </button>
                    </div>

                  </div>
                </div>
              )
            )}

          </div>
        </div>
      </section>

       <footer className="bg-[#030a0f] border-t border-gray-800 py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase"><img src={icon} alt="" /></h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a className="hover:text-white transition-colors" href="#">Kompaniya haqida</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Yangiliklar</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Karyera</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Sotib olish</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a className="hover:text-white transition-colors" href="#">Modellar qatori</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Maxsus takliflar</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Dilerlar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Mijozlar uchun</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a className="hover:text-white transition-colors" href="#">Servis</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Kafolat</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Ehtiyot qismlar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase">Aloqa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Call markaz: +998 71 XXX XX XX</li>
                <li>Email: info@kia.uz</li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a className="text-gray-400 hover:text-white" href="#">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-white" href="#">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © 2024 Kia Uzbekistan. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Car;