import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppDispatch } from '../store/hook';
import { addRequest } from '../store/requestSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Service: React.FC = () => {
  // Animatsiyalarni ishga tushirish
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

  const dispatch = useAppDispatch();
const [formData, setFormData] =
  useState({
    name: "",
    phone: "",
    model: "",
    comment: "",
  });

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    await dispatch(addRequest(formData)).unwrap();

    toast.success(
      "Ariza yuborildi, tez orada bog'lanamiz!"
    );

    setFormData({
      name: "",
      phone: "",
      model: "",
      comment: "",
    });

   
    setTimeout(() => {
      window.location.reload();
    }, 3000);

  } catch (error) {
    toast.error("Xatolik yuz berdi!");
  }
};



  return (
    <div className="bg-[#061520] text-[#d5e4f4] antialiased font-sans min-h-screen flex flex-col selection:bg-[#b9c8d8]/30 selection:text-[#b9c8d8]">
      
      {/* MAXSUS STILLAR */}
      <style>
        {`
          .text-glow { text-shadow: 0 0 30px rgba(185, 200, 216, 0.3); }
          .animate-float-slow { animation: float 4s ease-in-out infinite; }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {/* BEGIN: DOIMGI NAVBAR */}
       <nav className="fixed w-full h-[70px] md:h-[80px] z-50 bg-kia-dark/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        
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
          
          {/* Test drayv tugmasi ID va onClick funksiyasi bilan */}
          <a href="#test-drive"  className="hover:text-white transition-colors cursor-pointer">
            Test-drayv
          </a>
          
          <a className="hover:text-white transition-colors" href="#">
            Yangiliklar
          </a>
          <Link to="/services" className="hover:text-white transition-colors">
            Service
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

          {/* Til */}
         

          {/* Tugma */}
          <button className="bg-white text-black px-4 md:px-6 py-2 text-xs md:text-sm font-bold rounded-sm hover:bg-gray-200 transition-colors uppercase tracking-wider">
            <Link to="/contact">
              BOG'LANISH
            </Link>
          </button>
        </div>
      </nav>
      {/* END: NAVBAR */}

      <main className="flex-grow pt-0">
        
        {/* BEGIN: Hero Section */}
        <section className="relative w-full flex items-center justify-start overflow-hidden bg-[#061520] h-[600px] md:h-[700px]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Kia Service Center" 
              className="w-full h-full object-cover object-center opacity-40 scale-105" 
              data-aos="zoom-out"
              data-aos-duration="2500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABSWTJ3asDU8GoG1hL1JrZPRDYUW7kvige78oPhO6DxNRXoEuhGSgpoIV0riPAR8QAFun9oPBagf_8H7CNyA9woU4_r0WZCyVSCAEXz-nMuSWkpgbpFejw1aYUreXYwPCULQnZ4jbZSJjDbeVw_tRfRepi6IIoq0UCt0lwmNmm493kCDHySUtW8vic9W1JeaxXMq_uYvOr_9ONirX8jfcLibCRmx4sXKq5PW0b6IV5bcH_C-eNUNk9Wx5sLB6EmUBuYMPxu5QaE6o"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061520] via-[#061520]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#061520] via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-20">
            <div className="max-w-2xl">
              <p data-aos="fade-right" data-aos-delay="100" className="text-[#b9c8d8] text-xs md:text-sm font-bold uppercase tracking-widest mb-4">Servis Kompaniyasi</p>
              <h1 data-aos="fade-right" data-aos-delay="300" className="text-5xl md:text-7xl font-extrabold text-[#d5e4f4] leading-tight tracking-tight mb-6 text-glow">
                Mavsumiy <br className="hidden md:block"/>
                <span className="text-[#b9c8d8]">Texnik Ko'rik</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-sm md:text-lg text-[#c4c7cc] mb-8 md:mb-10 leading-relaxed max-w-xl">
                Sizning Kia avtomobilingiz har qanday ob-havo sharoitida mukammal ishlashi uchun mo'ljallangan. Mavsumiy o'zgarishlarga tayyor bo'lish va xavfsizlikni ta'minlash uchun professional ko'rikdan o'ting.
              </p>
              <div data-aos="fade-up" data-aos-delay="700" className="flex flex-col sm:flex-row gap-6 items-center">
                <button className="w-full sm:w-auto bg-[#d5e4f4] text-[#061520] px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#b9c8d8] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(185,200,216,0.3)] transition-all duration-300 animate-float-slow">
                  Batafsil ma'lumot
                </button>
                <div className="flex items-center gap-2 text-[#c4c7cc]">
                  <svg className="w-5 h-5 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-xs md:text-sm uppercase tracking-wider font-semibold">Davomiyligi: 60 Daqiqa</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Hero Section */}

        {/* BEGIN: Promotions Section */}
        <section className="py-20 md:py-32 bg-[#0e1d28]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-[#d5e4f4] tracking-tight mb-3">AKSIYALAR</h2>
                <div className="w-16 h-1 bg-[#b9c8d8]"></div>
              </div>
              <p data-aos="fade-left" className="text-xs md:text-sm uppercase tracking-widest text-[#c4c7cc] max-w-sm md:text-right font-semibold">
                Hozirda amal qilayotgan barcha maxsus takliflar ro'yxati
              </p>
            </div>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Main Promo Card */}
              <div data-aos="fade-up" data-aos-delay="0" className="md:col-span-8 bg-[#283642] rounded-xl overflow-hidden group relative min-h-[300px] md:min-h-[400px] shadow-xl">
                <img alt="Mechanic" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwRVXBWK3KLgVQxXlctoTJgjGYYoE5puPJ9W9FKOCZMs5AQcgfht2JeFpWO4PoYtsKOa4DjTR2PtABd_f_3TZDF9iWkXfZgZH9U4ZkBcZGiXNX2lpqw8QnWM6r4x47GVg6CRK7Ifu0WbudFpxABfPPHFyqWcfOfJstAPfPR7IVrGDq39TJ37AGzdk3_kNKB85uk0K78Ve80O8yuEco8Bfb0XeVXV9WSESipQeXEe49JmPWgibGJGNjZOy3ParrmefV5_cJ4T-a79I"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#12212c] via-[#12212c]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block bg-[#b9c8d8]/20 text-[#b9c8d8] px-3 py-1.5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 border border-[#b9c8d8]/30 backdrop-blur-md">
                    Qo'shimcha
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#d5e4f4] mb-3">Mavsumiy Texnik Ko'rik</h3>
                  <p className="text-sm md:text-base text-[#c4c7cc] max-w-lg leading-relaxed">
                    20% chegirma bilan to'liq diagnostika. Xavfsizligingizni professionallarga ishonib topshiring.
                  </p>
                </div>
              </div>
              
              {/* Secondary Promo Card */}
              <div data-aos="fade-up" data-aos-delay="100" className="md:col-span-4 bg-[#12212c] rounded-xl p-6 md:p-8 flex flex-col justify-between group hover:bg-[#1d2b37] transition-all duration-500 shadow-xl border border-[#8e9196]/10 hover:border-[#b9c8d8]/30">
                <div>
                  <div className="w-12 h-12 bg-[#061520] rounded-full flex items-center justify-center mb-6 border border-[#8e9196]/30 group-hover:border-[#b9c8d8]/50 transition-colors shadow-inner">
                    <svg className="w-6 h-6 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#d5e4f4] mb-3">Original Ehtiyot Qismlar</h3>
                  <p className="text-xs md:text-sm text-[#c4c7cc] leading-relaxed mb-6">
                    Avtomobilingiz uchun barcha original ehtiyot qismlarga 15% gacha chegirma. Kafolatlangan sifat va ishonchlilik.
                  </p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-[#d5e4f4] mb-4 group-hover:text-[#b9c8d8] transition-colors">UP TO 15%</div>
                  <button className="w-full py-3 md:py-4 border border-[#8e9196]/30 text-[#d5e4f4] text-[10px] md:text-xs font-bold uppercase tracking-widest hover:border-[#b9c8d8] hover:bg-[#b9c8d8] hover:text-[#061520] transition-colors rounded-sm">
                    Buyurtma Qilish
                  </button>
                </div>
              </div>
              
              {/* Small Promo 1 */}
              <div data-aos="fade-up" data-aos-delay="200" className="md:col-span-4 bg-[#12212c] rounded-xl p-6 md:p-8 group hover:bg-[#1d2b37] transition-all duration-500 shadow-xl border border-[#8e9196]/10 hover:border-[#b9c8d8]/30">
                <div className="w-10 h-10 bg-[#061520] rounded-full flex items-center justify-center mb-6 border border-[#8e9196]/30 shadow-inner">
                  <svg className="w-5 h-5 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#d5e4f4] mb-3">Yog' Almashinuvi</h3>
                <p className="text-xs md:text-sm text-[#c4c7cc] mb-6 leading-relaxed">
                  Dvigatel moyi va filtrlarni almashtirish maxsus narxlarda.
                </p>
                <a className="text-[#b9c8d8] text-[10px] md:text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2" href="#">
                  Maxsus Paket 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
              
              {/* Small Promo 2 */}
              <div data-aos="fade-up" data-aos-delay="300" className="md:col-span-8 bg-[#283642] rounded-xl overflow-hidden relative group shadow-xl">
                <img alt="Kia Headlight" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyN2yekbiM3VL4h6VsrTkhIUqSJLwpHCQz0tUAFiW_YlqvMLivRx87mhCpeoudOr0WV9JUpj44VZPcuDzfwnEHpeMFK2l3apuoujyKBehIs0NAj5ZF7ovoylpMb6qF0WMl41zLJvvp2NnL5dYr6PRGWY-XwMw6LsBJR1rKrNn3PbI2mkxF-tXIEHU88fQe61Ct83oXz1-okYbFoK1YYZsWEhOimgFaNXaalrQOKN8brJLO2aBLFTBzYv_v-w9KxU7JLklGRT5hx4E"/>
                <div className="absolute inset-0 bg-gradient-to-r from-[#12212c] via-[#12212c]/80 to-transparent"></div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[#d5e4f4] mb-3">Kia Kafolati</h3>
                  <p className="text-sm md:text-base text-[#c4c7cc] max-w-sm italic leading-relaxed border-l-2 border-[#b9c8d8] pl-4">
                    "Movement that inspires — har bir qadamda, har bir xizmatda."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Promotions Section */}

        {/* BEGIN: Advantages Section */}
        <section className="py-20 md:py-32 bg-[#061520] relative overflow-hidden border-t border-[#8e9196]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Side */}
            <div data-aos="fade-right" className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden group shadow-2xl">
              <img alt="White Kia Car" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxGpFAPZiy8ylh9ga8k0fHgLsGKAuCjkdHbkisJ73bgMbdLmtlo387q3C7wUAt5ihvir8_5LnuPcI92HSma-rtiq99P6Gv6MJNqhlArYlHPzUILVYkWqb9NqWqITpUd20g0DymXWfrtBUfoULfia0CNy2EIocsazzBdpDJA9-M3Hv_wyOI2SE74TSqnZHT4J1-D-yjYPWGX0Sd7b2L4NgueGji3_hNYn7TTx1bZJGHjH_9Z2-0clMVkwrpcuFw4ADFXHVrtiSTK5Q"/>
              
              {/* Floating Quote Card */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-[#283642]/90 backdrop-blur-md p-6 rounded-lg border-l-4 border-[#b9c8d8] max-w-xs md:max-w-sm shadow-xl">
                <p className="text-xs md:text-sm text-[#d5e4f4] italic leading-relaxed">
                  "Biz uchun avtomobilingiz xavfsizligi — eng oliy qadriyat. Har bir Kia o'ziga xos yondashuvni talab qiladi."
                </p>
              </div>
            </div>
            
            {/* Content Side */}
            <div>
              <h2 data-aos="fade-left" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#d5e4f4] leading-tight tracking-tighter mb-10 md:mb-16">
                Nima uchun aynan <br className="hidden md:block"/> Kia rasmiy servisi?
              </h2>
              
              <div className="space-y-8 md:space-y-12">
                {/* Point 1 */}
                <div data-aos="fade-left" data-aos-delay="100" className="flex gap-4 md:gap-6 items-start group">
                  <div className="text-3xl md:text-4xl font-black text-[#b9c8d8]/30 group-hover:text-[#b9c8d8] transition-colors mt-1">01</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[#d5e4f4] mb-2">Sertifikatlangan ustalar</h4>
                    <p className="text-sm md:text-base text-[#c4c7cc] leading-relaxed">
                      Barcha xodimlarimiz Janubiy Koreyalik mutaxassislar tomonidan o'qitilgan va maxsus sertifikatlarga ega.
                    </p>
                  </div>
                </div>
                
                {/* Point 2 */}
                <div data-aos="fade-left" data-aos-delay="200" className="flex gap-4 md:gap-6 items-start group">
                  <div className="text-3xl md:text-4xl font-black text-[#b9c8d8]/30 group-hover:text-[#b9c8d8] transition-colors mt-1">02</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[#d5e4f4] mb-2">Original qismlar</h4>
                    <p className="text-sm md:text-base text-[#c4c7cc] leading-relaxed">
                      Faqatgina zavod tomonidan tavsiya etilgan, avtomobilingizga 100% mos keladigan qismlardan foydalanamiz.
                    </p>
                  </div>
                </div>
                
                {/* Point 3 */}
                <div data-aos="fade-left" data-aos-delay="300" className="flex gap-4 md:gap-6 items-start group">
                  <div className="text-3xl md:text-4xl font-black text-[#b9c8d8]/30 group-hover:text-[#b9c8d8] transition-colors mt-1">03</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[#d5e4f4] mb-2">Zamonaviy uskunalar</h4>
                    <p className="text-sm md:text-base text-[#c4c7cc] leading-relaxed">
                      Bizning eng so'nggi diagnostika tizimlari har qanday nosozlikni aniq va tez topish imkonini beradi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Advantages Section */}

        {/* BEGIN: Appointment Form Section */}
        <section className="py-20 md:py-32 bg-[#020f1a] overflow-hidden flex justify-center border-t border-[#8e9196]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-start">
            
            {/* Info Side */}
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#d5e4f4] tracking-tight mb-6">
                Servisga yozilish
              </h2>
              <p className="text-sm md:text-lg text-[#c4c7cc] mb-10 md:mb-12 max-w-md leading-relaxed">
                Ma'lumotlaringizni qoldiring, mutaxassislarimiz 15 daqiqa ichida siz bilan bog'lanib, qulay vaqtni belgilaydilar.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#12212c] rounded-full flex items-center justify-center border border-[#8e9196]/20 shadow-inner flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c4c7cc] mb-1">Aloqa raqami</div>
                    <div className="text-lg md:text-xl font-bold text-[#d5e4f4]">+998 71 215-70-07</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#12212c] rounded-full flex items-center justify-center border border-[#8e9196]/20 shadow-inner flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c4c7cc] mb-1">Manzil</div>
                    <div className="text-lg md:text-xl font-bold text-[#d5e4f4]">Buxoro sh., Gazli shossesi</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Side */}
            <div data-aos="fade-left" className="bg-[#12212c] rounded-xl p-6 md:p-10 border border-[#8e9196]/10 shadow-2xl shadow-black/30">
            <form
  onSubmit={handleSubmit}
  className="space-y-6"
>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c4c7cc] mb-2">Ismingiz</label>
<input
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  className="w-full bg-[#283642]/60 border border-[#8e9196]/20 text-[#d5e4f4] p-4 rounded-lg"
  placeholder="Masalan: Aziz"
  type="text"
  required
/>                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c4c7cc] mb-2">Telefon raqami</label>
<input
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="w-full bg-[#283642]/60 border border-[#8e9196]/20 text-[#d5e4f4] p-4 rounded-lg"
  placeholder="+998"
  type="tel"
  required
/>                  </div>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c4c7cc] mb-2">Avtomobil modeli</label>
<select
  value={formData.model}
  onChange={(e) =>
    setFormData({
      ...formData,
      model: e.target.value,
    })
  }
  className="w-full bg-[#283642]/60 border border-[#8e9196]/20 text-[#d5e4f4] p-4 rounded-lg"
>   
              <option className="bg-[#0e1d28]" value="k5">Kia K5</option>
                    <option className="bg-[#0e1d28]" value="sportage">Kia Sportage</option>
                    <option className="bg-[#0e1d28]" value="sorento">Kia Sorento</option>
                    <option className="bg-[#0e1d28]" value="sonet">Kia Sonet</option>
                    <option className="bg-[#0e1d28]" value="ev6">Kia EV6</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c4c7cc] mb-2">Qo'shimcha izoh</label>
<textarea
  value={formData.comment}
  onChange={(e) =>
    setFormData({
      ...formData,
      comment: e.target.value,
    })
  }
  className="w-full bg-[#283642]/60 border border-[#8e9196]/20 text-[#d5e4f4] p-4 rounded-lg resize-none"
  rows={4}
/>                </div>
                <button  className="w-full bg-[#b9c8d8] text-[#061520] p-4 md:p-5 rounded-lg font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#d5e4f4] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(185,200,216,0.2)] transition-all duration-300 mt-2" type="submit">
                  Arizani Jo'natish
                </button>
              
              </form>
            </div>
          </div>
        </section>
        {/* END: Appointment Form Section */}

        {/* BEGIN: Other Offers Section */}
        <section className="py-20 md:py-32 bg-[#061520] border-t border-[#8e9196]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-[#d5e4f4] mb-10 md:mb-12 tracking-tight">Boshqa takliflar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Offer 1 */}
              <div data-aos="fade-up" data-aos-delay="100" className="relative h-64 md:h-80 rounded-xl overflow-hidden group shadow-xl">
                <img alt="Car Parts" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI3u40uzwmmCyuAQV5pSK0RPxuwermnXKsaGVOWr7G4XhfHZPyYIjmIzPT-HCTTOO9VYad6wd5O2W6izRRIDTts8uAavl0_6pvqiWX_ESFMrQ-AQcNu6TDwkg3ZkXb9W62rabanejRvFMYsrrBIVVrBEt8FEfct8mNhfKTTbL0pfmegrNT2HkgBp0Yv5WTYukFeaJRZ78tc5plq1F9NHzDQY_91qAYADTiUW_FdZEsB6k7L2sfZtmwFhAoaBiqoNiPVQ5_1s3gx2I"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#061520] via-[#061520]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#d5e4f4] mb-2 group-hover:text-[#b9c8d8] transition-colors">Original Ehtiyot Qismlar</h3>
                  <p className="text-sm md:text-base text-[#c4c7cc]">Faqat rasmiy dilerlardan kafolatlangan mahsulotlar.</p>
                </div>
              </div>
              
              {/* Offer 2 */}
              <div data-aos="fade-up" data-aos-delay="200" className="relative h-64 md:h-80 rounded-xl overflow-hidden group shadow-xl">
                <img alt="Oil Change" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChC8H5kn3Ab_CYwqlpoero1yzWz6xUnQwHBlTSHyirNMDniZqPJSnOj0196KdokViZBs6DbsHy3qID1xrJdI2fwyD9hW_rvfq9zTiX7cFh9RCAOZOTnGz5N1v-okmWfI7gh63hH5OlVbVJGi9FTmKryhVmdBF-sJvCwpGhgr_P5pOLzooHWlbjKFf12T2ssMF6lcnui0N82x4ppxCm4Tv7P1X9c1urqDoln4lnvb9be5McJZDm4Ef4qcvyIaYvuKBnMMgCRlNy6GA"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#061520] via-[#061520]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#d5e4f4] mb-2 group-hover:text-[#b9c8d8] transition-colors">Yog' Almashinuvi</h3>
                  <p className="text-sm md:text-base text-[#c4c7cc]">Dvigatel umrini uzaytirish uchun professional xizmat.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: Other Offers Section */}

      </main>

      {/* BEGIN: DOIMGI FOOTER */}
      <footer data-aos="fade-up" className="bg-[#020f1a] pt-12 md:pt-16 pb-6 md:pb-8 border-t border-[#8e9196]/10 text-sm w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
            <div className="space-y-4">
              <div className="font-bold text-2xl sm:text-3xl tracking-widest mb-4 md:mb-6">
                <i><strong className="text-[#d5e4f4]">KIA</strong></i>
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

export default Service;