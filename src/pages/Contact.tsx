import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import { sendContact } from '../store/contactSlice';

const Contact: React.FC = () => {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [model, setModel] = useState("Kia Sonet");
const dispatch = useDispatch<any>();
  // Animatsiyalarni ishga tushirish
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Formani yuborish
 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const formData = {
    name,
    phone,
model
  };

try{
    dispatch(sendContact(formData));

        setName("");
    setPhone("");
    setModel("Kia Sonet");
}catch (error){
console.log(error);

}

  
};

  return (
    <div className="bg-[#061520] text-[#d5e4f4] antialiased font-sans min-h-screen flex flex-col selection:bg-[#b9c8d8]/30 selection:text-[#b9c8d8]">
      
      {/* MAXSUS STILLAR */}
      <style>
        {`
          .text-glow { text-shadow: 0 0 30px rgba(185, 200, 216, 0.3); }
        `}
      </style>

      {/* BEGIN: DOIMGI NAVBAR */}
      <nav data-aos="fade-down" className="fixed w-full h-[70px] md:h-[80px] z-50 bg-[#061520]/80 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-[#8e9196]/10 flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* LOGO */}
        <div className="flex-shrink-0 font-bold text-xl md:text-2xl tracking-widest text-[#d5e4f4]">
          <Link to="/">
            <img className="h-6 md:h-8 brightness-200" src="/7a270f7d-6048-45bb-9dd0-24d585d021a0 2.svg" alt="Kia Logo" />
          </Link>
        </div>

        {/* ASOSIY MENYU */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#717f8d]">
          <Link to="/models" className="hover:text-[#d5e4f4] transition-colors">Modellar</Link>
          <a className="hover:text-[#d5e4f4] transition-colors" href="#">Takliflar</a>
          <a className="hover:text-[#d5e4f4] transition-colors" href="#">Chegirmalar</a>
          <a className="hover:text-[#d5e4f4] transition-colors" href="#">Test-drayv</a>
          <a className="hover:text-[#d5e4f4] transition-colors" href="#">Yangiliklar</a>
          <a className="border-b-2 border-[#b9c8d8] pb-1 font-bold text-[#d5e4f4] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-colors" href="#">Biz haqimizda</a>
        </div>

        {/* O'NG TOMON */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden sm:flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-[#717f8d]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
            <span>UZ</span>
          </div>
          <button className="bg-[#b9c8d8] text-[#24323e] px-4 md:px-6 py-2 md:py-2.5 text-xs font-bold rounded-sm hover:bg-[#d5e4f4] hover:text-[#0e1d28] transition-all duration-300 uppercase tracking-widest shadow-lg shadow-[#b9c8d8]/20">
            BOG'LANISH
          </button>
        </div>
      </nav>
      {/* END: NAVBAR */}

      {/* BEGIN: MAIN CONTENT */}
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
        
        {/* Dekorativ orqa fon (Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#b9c8d8]/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
          
          {/* Chap tomon: Ma'lumotlar */}
          <div className="flex flex-col justify-center max-w-lg">
            <h1 data-aos="fade-right" className="text-5xl md:text-6xl lg:text-7xl font-black text-[#d5e4f4] mb-6 tracking-tight text-glow">
              Bog'lanish
            </h1>
            <p data-aos="fade-right" data-aos-delay="100" className="text-base md:text-lg text-[#c4c7cc] mb-12 leading-relaxed">
              Mutaxassislarimiz siz bilan 10 daqiqa ichida bog'lanishadi va barcha savollaringizga javob berishadi. Biz har doim aloqadamiz!
            </p>
            
            <div className="space-y-6 md:space-y-8">
              {/* Telefon */}
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-5 group cursor-pointer p-4 -ml-4 rounded-xl hover:bg-[#0e1d28] transition-colors border border-transparent hover:border-[#8e9196]/10">
                <div className="w-14 h-14 bg-[#12212c] rounded-full flex items-center justify-center border border-[#8e9196]/20 shadow-inner group-hover:bg-[#b9c8d8] transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 text-[#b9c8d8] group-hover:text-[#061520] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-[#717f8d] uppercase tracking-[0.2em] font-bold mb-1">Telefon raqam</p>
                  <p className="text-xl md:text-2xl text-[#d5e4f4] font-medium tracking-wide">+998 71 215-70-07</p>
                </div>
              </div>
              
              {/* Manzil */}
              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-5 group cursor-pointer p-4 -ml-4 rounded-xl hover:bg-[#0e1d28] transition-colors border border-transparent hover:border-[#8e9196]/10">
                <div className="w-14 h-14 bg-[#12212c] rounded-full flex items-center justify-center border border-[#8e9196]/20 shadow-inner group-hover:bg-[#b9c8d8] transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 text-[#b9c8d8] group-hover:text-[#061520] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-[#717f8d] uppercase tracking-[0.2em] font-bold mb-1">Asosiy Manzil</p>
                  <p className="text-xl md:text-2xl text-[#d5e4f4] font-medium tracking-wide">Buxoro sh., Gazli shossesi</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* O'ng tomon: Forma Card */}
          <div data-aos="fade-left" data-aos-delay="200" className="bg-[#0e1d28]/80 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-[0px_24px_48px_rgba(0,0,0,0.3)] border border-[#8e9196]/20 relative group">
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-[10px] md:text-xs tracking-[0.2em] text-[#c4c7cc] font-bold uppercase mb-2" htmlFor="name">
                  To'liq ismingiz
                </label>
                <input 
                  className="w-full bg-[#020f1a] border border-[#8e9196]/10 text-[#d5e4f4] px-4 py-4 rounded-lg focus:ring-2 focus:ring-[#b9c8d8] focus:border-transparent outline-none transition-all placeholder:text-[#717f8d]" 
                  id="name" 
                  name="name" 
                  placeholder="Masalan: Aziz Azizov" 
                  type="text" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-[10px] md:text-xs tracking-[0.2em] text-[#c4c7cc] font-bold uppercase mb-2" htmlFor="phone">
                  Telefon raqamingiz
                </label>
                <input 
                  className="w-full bg-[#020f1a] border border-[#8e9196]/10 text-[#d5e4f4] px-4 py-4 rounded-lg focus:ring-2 focus:ring-[#b9c8d8] focus:border-transparent outline-none transition-all placeholder:text-[#717f8d]" 
                  id="phone" 
                  name="phone" 
                  placeholder="+998 __ ___ __ __" 
                  type="tel"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  required 
                />
              </div>
              
              <div>
                <label className="block text-[10px] md:text-xs tracking-[0.2em] text-[#c4c7cc] font-bold uppercase mb-2" htmlFor="model">
                  Qiziqtirgan model
                </label>
                <div className="relative">
                  <select 
                    className="w-full bg-[#020f1a] border border-[#8e9196]/10 text-[#d5e4f4] px-4 py-4 rounded-lg focus:ring-2 focus:ring-[#b9c8d8] focus:border-transparent outline-none transition-all appearance-none cursor-pointer" 
                    id="model" 
                    name="model"
                     value={model}
  onChange={(e) => setModel(e.target.value)}
                  >
                    <option className="bg-[#0e1d28]">Kia Sonet</option>
                    <option className="bg-[#0e1d28]">Kia K5</option>
                    <option className="bg-[#0e1d28]">Kia EV6</option>
                    <option className="bg-[#0e1d28]">Kia Sorento</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717f8d] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              
              <button 
                className="w-full bg-[#b9c8d8] text-[#061520] font-bold uppercase tracking-[0.2em] text-sm py-4 md:py-5 rounded-lg hover:bg-[#d5e4f4] hover:shadow-[0_10px_20px_rgba(185,200,216,0.2)] hover:-translate-y-1 transition-all duration-300 mt-4 flex items-center justify-center space-x-3 group/btn" 
                type="submit"
              >
                <span>Yuborish</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* END: MAIN CONTENT */}

      {/* BEGIN: DOIMGI FOOTER */}
      <footer data-aos="fade-up" className="bg-[#020f1a] pt-12 md:pt-16 pb-6 md:pb-8 border-t border-[#8e9196]/10 text-sm w-full mt-auto">
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

export default Contact;