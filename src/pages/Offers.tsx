import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon from "../assets/7a270f7d-6048-45bb-9dd0-24d585d021a0 2.svg"

const Offers: React.FC = () => {
  // Sayt ochilganda animatsiyalarni ishga tushirish
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  // Formani yuborish
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Ariza yuborildi");
  };

  return (
    <div className="bg-[#061520] text-[#d5e4f4] antialiased font-sans min-h-screen flex flex-col selection:bg-[#b9c8d8] selection:text-[#24323e]">
      
      {/* MAXSUS STILLAR VA ANIMATSIYALAR */}
      <style>
        {`
          .text-glow { text-shadow: 0 0 30px rgba(185, 200, 216, 0.3); }
          .animate-float-slow { animation: float 4s ease-in-out infinite; }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {/* BEGIN: DOIMGI NAVBAR */}
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
      {/* END: NAVBAR */}

      <main className="flex-grow pt-0">
        
        {/* BEGIN: Hero Section */}
        <section className="relative w-full flex items-center justify-start overflow-hidden bg-[#061520] h-[500px] md:h-[750px]">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover object-center opacity-60" 
              data-aos="zoom-out" 
              data-aos-duration="2000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Lc3V4S29O-rwfHzMSG3ILfgKd5n3V6RhogygIUqSuf5yb-LNnpaNrv6LODqzbBL1hKqgBYZnHpB71C6ZfafXefAPgoKrGc3ya0OBHnds4gMzp9bTb60EJMV4L5BEsMsaocc62QO_f-fkGMKGbpcBhWzfkYZcmHzgtKATTQ2osRDBXNSB85FjeJ5nypblRZW4Km9lTP2k6VIOw5Skf-K9cjBMrKR16UAUX73SBtCczkDwRRGbmO-sgkjPSxKBUY9LswrcNv_hh8o" 
              alt="Kia Premium Background" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061520] via-[#061520]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#061520] via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 w-full">
            <div className="max-w-3xl">
              <span data-aos="fade-right" data-aos-delay="100" className="text-[#b9c8d8] font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 block text-xs md:text-sm">Maxsus Taklif</span>
              <h1 data-aos="fade-right" data-aos-delay="300" className="text-5xl md:text-7xl lg:text-[6rem] font-black text-[#d5e4f4] tracking-tighter leading-[1] md:leading-[0.9] mb-6 md:mb-8 text-glow">
                Kredit <br className="hidden md:block" /> <span className="text-[#b9c8d8]">Takliflari</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-[#c4c7cc] text-lg md:text-2xl max-w-xl font-light leading-relaxed mb-8 md:mb-10">
                Orzuingizdagi Kia avtomobili endi yanada yaqinroq. Imtiyozli shartlar va tezkor rasmiylashtirish.
              </p>
              
              <div data-aos="fade-up" data-aos-delay="700" className="flex flex-col sm:flex-row gap-4">
                <a href="#apply" className="bg-[#b9c8d8] text-[#24323e] px-8 py-4 font-bold uppercase tracking-[0.2em] text-xs md:text-sm rounded-sm hover:bg-[#d5e4f4] transition-colors text-center shadow-[0_10px_30px_rgba(185,200,216,0.2)] hover:shadow-[0_15px_40px_rgba(185,200,216,0.4)] hover:-translate-y-1 animate-float-slow block">
                  Arizani qoldirish
                </a>
                <div className="flex items-center justify-center gap-3 px-6 py-4 border border-[#8e9196]/30 text-[#d5e4f4] rounded-sm bg-[#061520]/50 backdrop-blur-md">
                  <svg className="w-5 h-5 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  <span className="font-bold tracking-wide text-sm md:text-base">Yillik 12% dan</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Hero Section */}

        {/* BEGIN: Detail Section (Bento Grid) */}
        <section className="py-16 md:py-32 bg-[#061520] px-4 md:px-8 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8e9196]/20 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              
              {/* Card 1 */}
              <div data-aos="fade-right" className="lg:col-span-2 bg-[#0e1d28] p-8 md:p-16 flex flex-col justify-between group overflow-hidden relative rounded-xl border border-[#8e9196]/10 shadow-2xl">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-black text-[#d5e4f4] mb-4 md:mb-6 leading-tight tracking-tight">Yillik 12% dan boshlanuvchi imtiyozli kredit shartlari</h2>
                  <p className="text-[#c4c7cc] max-w-md mb-8 md:mb-12 text-sm md:text-lg leading-relaxed">Biz sizga bozordagi eng raqobatbardosh stavkalarni va shaffof shartnomalarni taqdim etamiz.</p>
                </div>
                <div className="grid grid-cols-2 gap-6 md:gap-12 relative z-10">
                  <div>
                    <div className="text-[#b9c8d8] text-4xl md:text-5xl font-black mb-2 md:mb-3">60 <span className="text-sm md:text-xl font-normal text-[#c4c7cc] uppercase tracking-widest">oy</span></div>
                    <div className="text-[#c4c7cc] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Maksimal muddat</div>
                  </div>
                  <div>
                    <div className="text-[#b9c8d8] text-4xl md:text-5xl font-black mb-2 md:mb-3">50% <span className="text-sm md:text-xl font-normal text-[#c4c7cc] uppercase tracking-widest">dan</span></div>
                    <div className="text-[#c4c7cc] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Boshlang'ich to'lov</div>
                  </div>
                </div>
                <svg className="absolute -bottom-10 -right-10 md:-bottom-12 md:-right-12 w-48 h-48 md:w-80 md:h-80 text-[#d5e4f4]/5 group-hover:text-[#b9c8d8]/5 transition-colors duration-700 pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
              </div>
              
              {/* Card 2 */}
              <div data-aos="fade-left" data-aos-delay="200" className="bg-[#283642] p-8 md:p-16 flex flex-col justify-center items-center text-center rounded-xl border border-[#8e9196]/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#b9c8d8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0e1d28] flex items-center justify-center mb-6 md:mb-8 border border-[#8e9196]/20 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#d5e4f4] mb-3 md:mb-4 tracking-tight relative z-10">Kerakli hujjatlar</h3>
                <p className="text-[#c4c7cc] mb-6 md:mb-8 text-sm md:text-lg leading-relaxed relative z-10">Ortiqcha qog'ozbozliksiz, faqatgina shaxsingizni tasdiqlovchi hujjat yetarli.</p>
                <div className="bg-[#061520] px-6 md:px-8 py-3 md:py-4 rounded-full text-[#b9c8d8] font-bold text-[10px] md:text-xs tracking-[0.2em] relative z-10 border border-[#8e9196]/20 shadow-inner">
                  PASSPORT / ID KARTA
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* END: Detail Section */}

        {/* BEGIN: Steps Section */}
        <section className="py-16 md:py-32 bg-[#020f1a] overflow-hidden border-t border-[#8e9196]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
              <div data-aos="fade-right">
                <span className="text-[#b9c8d8] font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 block text-xs">Jarayon</span>
                <h2 className="text-4xl md:text-6xl font-black text-[#d5e4f4] tracking-tighter">Qanday rasmiylashtiriladi?</h2>
              </div>
              <div className="h-px flex-grow bg-[#8e9196]/20 mx-12 hidden md:block" data-aos="fade-left"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div data-aos="fade-up" data-aos-delay="100" className="relative p-8 md:p-10 bg-[#0e1d28] hover:bg-[#1d2b37] transition-all duration-500 group rounded-xl border border-[#8e9196]/5 hover:border-[#8e9196]/20 shadow-lg">
                <span className="text-6xl md:text-7xl font-black text-[#d5e4f4]/5 absolute top-4 right-4 md:top-6 md:right-6 group-hover:text-[#b9c8d8]/10 transition-colors">01</span>
                <div className="mt-10 md:mt-12 relative z-10">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#d5e4f4] tracking-tight">Modelni tanlang</h4>
                  <p className="text-sm md:text-base text-[#c4c7cc] leading-relaxed">Sizga ma'qul bo'lgan istalgan Kia modelini tanlang.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div data-aos="fade-up" data-aos-delay="200" className="relative p-8 md:p-10 bg-[#0e1d28] hover:bg-[#1d2b37] transition-all duration-500 group rounded-xl border border-[#8e9196]/5 hover:border-[#8e9196]/20 shadow-lg">
                <span className="text-6xl md:text-7xl font-black text-[#d5e4f4]/5 absolute top-4 right-4 md:top-6 md:right-6 group-hover:text-[#b9c8d8]/10 transition-colors">02</span>
                <div className="mt-10 md:mt-12 relative z-10">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#d5e4f4] tracking-tight">Ariza topshiring</h4>
                  <p className="text-sm md:text-base text-[#c4c7cc] leading-relaxed">Onlayn yoki dilerlik markazimizda anketani to'ldiring.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div data-aos="fade-up" data-aos-delay="300" className="relative p-8 md:p-10 bg-[#0e1d28] hover:bg-[#1d2b37] transition-all duration-500 group rounded-xl border border-[#8e9196]/5 hover:border-[#8e9196]/20 shadow-lg">
                <span className="text-6xl md:text-7xl font-black text-[#d5e4f4]/5 absolute top-4 right-4 md:top-6 md:right-6 group-hover:text-[#b9c8d8]/10 transition-colors">03</span>
                <div className="mt-10 md:mt-12 relative z-10">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#d5e4f4] tracking-tight">15 daqiqa kuting</h4>
                  <p className="text-sm md:text-base text-[#c4c7cc] leading-relaxed">Kredit bo'yicha qarorni rekord darajadagi qisqa vaqtda oling.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div data-aos="fade-up" data-aos-delay="400" className="relative p-8 md:p-10 bg-[#b9c8d8] group transition-all duration-500 rounded-xl shadow-[0_10px_30px_rgba(185,200,216,0.2)] hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                <span className="text-6xl md:text-7xl font-black text-[#24323e]/10 absolute top-4 right-4 md:top-6 md:right-6">04</span>
                <div className="mt-10 md:mt-12 relative z-10">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#24323e] tracking-tight">Olib keting</h4>
                  <p className="text-sm md:text-base text-[#3a4855] leading-relaxed font-medium">Yangi Kia avtomobilingizda uyingizga ravona bo'ling.</p>
                </div>
                <svg className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-16 md:h-16 text-[#24323e]/20 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>
              </div>
            </div>
          </div>
        </section>
        {/* END: Steps Section */}

        {/* BEGIN: Mavjud Modellar */}
        <section className="py-16 md:py-32 bg-[#061520] px-6 md:px-8 border-t border-[#8e9196]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20 text-center md:text-left" data-aos="fade-right">
              <span className="text-[#b9c8d8] font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 block text-[10px] md:text-xs">Imtiyozli Avtomobillar</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#d5e4f4] tracking-tighter">Mavjud Modellar</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { name: "Kia Sonet", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_sonet" },
                { name: "Kia Seltos", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_seltos" },
                { name: "Kia K5", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_k5" },
                { name: "Kia Sportage", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_sportage" },
                { name: "Kia Sorento", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_sorento" },
                { name: "Kia Carnival", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_carnival" },
                { name: "Kia EV6", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_ev6" },
                { name: "Kia EV9", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf9W5x3_rG1_p_qN5hM9Vj2f5v5q4r3e2w1q0p9o8n7m6l5k4j3i2h1g0f_ev9" },
              ].map((car, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={100 * (idx % 4)} className="bg-[#0e1d28] p-4 md:p-6 group hover:bg-[#1d2b37] transition-all duration-500 rounded-xl border border-[#8e9196]/10 hover:border-[#b9c8d8]/30 shadow-lg cursor-pointer">
                  <div className="aspect-[16/10] mb-4 md:mb-6 overflow-hidden rounded-lg bg-[#283642]">
                    <img alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src={car.img}/>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-[#d5e4f4] group-hover:text-[#b9c8d8] transition-colors tracking-tight text-center md:text-left">{car.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* END: Mavjud Modellar */}

        {/* BEGIN: CTA / Form Section */}
        <section id="apply" className="py-20 md:py-40 bg-[#061520] px-4 md:px-8 relative overflow-hidden border-t border-[#8e9196]/10">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Kia Background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu1TuOoXmX9BScCO-a72ODQqBeePsTTFk_LCJj6PcbPp-J-o9sHvpflpCglqLNUCenkUWJc3ADcZXDo2sh5lHJq3p-Iw9xwGV0d9ggJrD8RJuUJWp_-1O7TxZxuIdzOoBV6_j_JAv757V-RFEx__WQrjyK4XolgV6rrbNpgUoM65iBtYvzOi8K7YLipmR6-5eVimqEUlLnXPC4pFL6diTyxE7kvoPi26EZwo2Z188jFPACwckQCFZeXrFbqo5W_6LQoqycWpNQbfQ"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#061520] via-[#061520]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Text Area */}
              <div data-aos="fade-right">
                <h2 className="text-4xl md:text-6xl font-black text-[#d5e4f4] tracking-tighter mb-4 md:mb-8 leading-tight text-center lg:text-left">Arizani qoldirish</h2>
                <p className="text-[#c4c7cc] text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
                  Mutaxassislarimiz siz bilan 10 daqiqa ichida bog'lanishadi va barcha savollaringizga javob berishadi. 
                </p>
                
                <div className="space-y-4 md:space-y-6 max-w-sm mx-auto lg:mx-0">
                  <div className="flex items-center gap-4 md:gap-6 text-[#d5e4f4] group cursor-pointer">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1d2b37] border border-[#8e9196]/20 flex items-center justify-center group-hover:bg-[#b9c8d8] transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#b9c8d8] group-hover:text-[#24323e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <span className="text-base md:text-xl font-medium tracking-wide">+998 71 215-70-07</span>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 text-[#d5e4f4] group cursor-pointer">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1d2b37] border border-[#8e9196]/20 flex items-center justify-center group-hover:bg-[#b9c8d8] transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#b9c8d8] group-hover:text-[#24323e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <span className="text-base md:text-xl font-medium tracking-wide">Toshkent sh., Sergeli tumani</span>
                  </div>
                </div>
              </div>
              
              {/* Form Area */}
              <div data-aos="fade-left" className="bg-[#061520]/50 backdrop-blur-2xl p-6 md:p-12 rounded-xl shadow-2xl border border-[#8e9196]/20 w-full">
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c4c7cc] ml-1">To'liq ismingiz</label>
                    <input className="w-full bg-[#283642]/50 border border-[#8e9196]/30 focus:border-[#b9c8d8] focus:ring-1 focus:ring-[#b9c8d8] text-[#d5e4f4] p-3 md:p-4 rounded-lg backdrop-blur-sm transition-all outline-none" placeholder="Masalan: Aziz Azizov" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c4c7cc] ml-1">Telefon raqamingiz</label>
                    <input className="w-full bg-[#283642]/50 border border-[#8e9196]/30 focus:border-[#b9c8d8] focus:ring-1 focus:ring-[#b9c8d8] text-[#d5e4f4] p-3 md:p-4 rounded-lg backdrop-blur-sm transition-all outline-none" placeholder="+998 __ ___ __ __" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c4c7cc] ml-1">Qiziqtirgan model</label>
                    <select className="w-full bg-[#283642]/50 border border-[#8e9196]/30 focus:border-[#b9c8d8] focus:ring-1 focus:ring-[#b9c8d8] text-[#d5e4f4] p-3 md:p-4 rounded-lg outline-none backdrop-blur-sm transition-all appearance-none cursor-pointer">
                      <option className="bg-[#0e1d28] text-white">Kia Sonet</option>
                      <option className="bg-[#0e1d28] text-white">Kia Sportage</option>
                      <option className="bg-[#0e1d28] text-white">Kia K5</option>
                      <option className="bg-[#0e1d28] text-white">Kia Seltos</option>
                      <option className="bg-[#0e1d28] text-white">Kia EV6</option>
                      <option className="bg-[#0e1d28] text-white">Kia Sorento</option>
                      <option className="bg-[#0e1d28] text-white">Kia Carnival</option>
                      <option className="bg-[#0e1d28] text-white">Kia EV9</option>
                    </select>
                  </div>
                  <button className="w-full bg-[#b9c8d8] text-[#24323e] font-black uppercase tracking-[0.2em] py-4 md:py-5 text-xs md:text-sm rounded-lg hover:bg-[#d5e4f4] transition-colors shadow-lg shadow-[#b9c8d8]/20 mt-4" type="submit">
                    Yuborish
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
        {/* END: CTA / Form Section */}

      </main>

      {/* BEGIN: DOIMGI FOOTER */}
      <footer data-aos="fade-up" className="bg-[#020f1a] pt-12 md:pt-16 pb-6 md:pb-8 border-t border-[#8e9196]/10 text-sm w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
            <div className="space-y-4">
              <div className="font-bold text-2xl sm:text-3xl tracking-widest mb-4 md:mb-6">
                <i><img src={icon} alt="" /></i>
              </div>
              <p className="text-[#c4c7cc] text-xs leading-relaxed max-w-xs">
                O'zbekistonda rasmiy Kia distribyutori.<br/> Sifat va innovatsiya timsoli.
              </p>
              <div className="flex space-x-4 pt-2 md:pt-4">
                <a className="text-[#c4c7cc] hover:text-[#b9c8d8] transition-colors text-xs sm:text-sm" href="#">Instagram</a>
                <a className="text-[#c4c7cc] hover:text-[#b9c8d8] transition-colors text-xs sm:text-sm" href="#">Telegram</a>
                <a className="text-[#c4c7cc] hover:text-[#b9c8d8] transition-colors text-xs sm:text-sm" href="#">Facebook</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-[#d5e4f4] uppercase tracking-wider text-xs">Sotuvlar</h4>
              <ul className="space-y-2 md:space-y-3 text-[#c4c7cc] text-xs sm:text-sm">
                <li><Link className="hover:text-[#b9c8d8] transition-colors" to="/models">Barcha modellar</Link></li>
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Maxsus takliflar</a></li>
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Korporativ mijozlarga</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-[#d5e4f4] uppercase tracking-wider text-xs">Servis</h4>
              <ul className="space-y-2 md:space-y-3 text-[#c4c7cc] text-xs sm:text-sm">
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Texnik xizmat ko'rsatish</a></li>
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Ehtiyot qismlar</a></li>
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Kafolat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-[#d5e4f4] uppercase tracking-wider text-xs">Kompaniya</h4>
              <ul className="space-y-2 md:space-y-3 text-[#c4c7cc] text-xs sm:text-sm">
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Biz haqimizda</a></li>
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Yangiliklar</a></li>
                <li><a className="hover:text-[#b9c8d8] transition-colors" href="#">Kontaktlar</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#8e9196]/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-[#c4c7cc] gap-4 md:gap-0">
            <p className="text-center md:text-left">© 2024 Kia Uzbekistan. Barcha huquqlar himoyalangan.</p>
            <div className="flex space-x-4">
              <a className="hover:text-[#b9c8d8] uppercase tracking-[0.2em] font-semibold" href="#">Privacy Policy</a>
              <a className="hover:text-[#b9c8d8] uppercase tracking-[0.2em] font-semibold" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      {/* END: FOOTER */}

    </div>
  );
};

export default Offers;