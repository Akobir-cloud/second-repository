import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { Model } from './Admin/HandleModels';


const Models: React.FC = () => {
  
  const [models, setModels] = useState<Model[]>([]);

  // Sayt ochilganda animatsiyalarni ishga tushirish
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 50,     
    });
  }, []);

  useEffect(() => {
      getModels();
    }, []);

    
  const getModels = async (): Promise<void> => {
    try {
      const res = await fetch("http://localhost:3000/models");
      const data: Model[] = await res.json();

      setModels(data);
    } catch (error) {
      console.log(error);
    }
  };


    

  return (
    <div className="bg-[#061520] text-white font-sans min-h-screen">
      
      {/* SIZ YUBORGAN NAVBAR */}
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

      {/* MODELLAR QISMI */}
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto w-full overflow-hidden">
        
        {/* Sarlavha animatsiyasi (O'NGDAN KELADI) */}
        <header className="mb-16">
          <h1 data-aos="fade-left" className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-white mb-4">
            Barcha Modellar
          </h1>
          <p data-aos="fade-left" data-aos-delay="200" className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
            Mukammallik sari yo'l. O'zingizga mos bo'lgan mukammal harakatni toping.
          </p>
        </header>

        {/* Kartalar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Sedan K5 */}
          <article data-aos="fade-right" data-aos-delay="100" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia K5 Sedan" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_I4kG8oaqv8yRgZYBVS6RNnTEVa6mg9plwGa2UHkA2U8XfjeinYAUgKiIvJc9dkf5BEQGNZzbp5gIm1x3utYChsUF8ZpfGuvzyl63esA5EKl2fSO5vg_vALe-v0dqO2y6vp-osFdrJxKcUfpnevSIjYQ7bL94dndkUrAf0cVyaJzRuUEgL-2Fc8bSj2upXHekXUuJPrfyd7qG0C_h1uEh6QF9XEWhr9O10h0M7InhzR1WKBD-vwMW7gGYGth5u0aA5rW4MPUoeo" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">SEDAN</span>
              <h2 className="text-xl font-bold text-white mb-1">K5</h2>
              <p className="text-sm text-gray-400 flex-grow">Boshlang'ich narxi: 379 900 000 UZS</p>
              <Link to={"/cars"} ><div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil 
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div></Link>
            </div>
          </article>

          {/* Sedan K9 */}
          <article data-aos="fade-left" data-aos-delay="200" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia K9 Luxury Sedan" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmCymb46tzvSjCJ6TFLrEZvDm8gWe7D70_c0ZarZoaM1ro9bt5-bSg2HFz60jCMREnvwoZ879HKeViatN7w8JXGWZkhzot4k0rJiDhm0GieMktwcNccHiPnFnaANyETVrwbWT1ODW8i8bs6_HxLwlBs6iKBye-cqz1Y2PWBbgkMjn_437-Pr2IxIgc7u2qdEWMnXRXsBSL0w2zg1UGHKNfOHXg6vo38s0Pc3s-y6hT0yVCa6cCFv7wDBjjzaGNwasDD_O07keCFFg" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">FLAGMAN SEDAN</span>
              <h2 className="text-xl font-bold text-white mb-1">K9</h2>
              <p className="text-sm text-gray-400 flex-grow">Boshlang'ich narxi: 999 900 000 UZS</p>
              <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </article>

          {/* SUV Sportage */}
          <article data-aos="fade-right" data-aos-delay="300" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia Sportage SUV" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqr9x21gFqvV5D91Qi4gJDs5mo6oaOcJBC-GFb7jgvKvo67uW3w3Y4bip5_4vgDZnxuvCz7TTelEEFeokMsFsXShnMqELmm3SizqJxDcMPGsJgjfzr5Ngci3hkhOwnUb-gpYdDsw-Xw6IsGvRMLevb1fu5sxlGrIgS_U2IBB_YHlqSIsjcmHGU3D5yLefAb0hw0QOvGhfakCls_yMmQT_roXhohE1G4BOhBIFMkdeWO5H548GG0B6n48oGQVvkiFlcky2MHjD-Uc8" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">KROSSOVER</span>
              <h2 className="text-xl font-bold text-white mb-1">Sportage</h2>
              <p className="text-sm text-gray-400 flex-grow">Boshlang'ich narxi: 429 900 000 UZS</p>
              <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </article>

          {/* EV6 */}
          <article data-aos="fade-left" data-aos-delay="400" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia EV6 Electric" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo5tzgDobCFzrG9k8t4WZyzhDrFdgcCmVjPpks3dueB2jwRDzmRmWw22czHAV2XarP0RwD9-pyYuaW4gZX37qBgYppsQFW-R2o-tVUmbpbqVvi282Klmsux3MVPpLMPtfdiR6Y7qlpeJB_8FO4OnDw9EvcbSHspQ4xY9ivSuN8H0kCoyC9Nq3Mmcp7zVsEf8VQpGvnhWLj_2NSLZJ2GMRmnv_Mu9ClgxY8AsVH_bgKY2CP4Vq94VlWHg412Gvol8AHhbKot7L3pjo" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">ELEKTROMOBIL</span>
              <h2 className="text-xl font-bold text-white mb-1">EV6</h2>
              <p className="text-sm text-gray-400 flex-grow">Boshlang'ich narxi: 699 900 000 UZS</p>
              <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </article>

          {/* Seltos */}
          <article data-aos="fade-right" data-aos-delay="100" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia Seltos SUV" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRDEx4N0C4ToHORI2aWfzZ2YGcwePToDqrG1ic2rTvPlLWVYeFho6o3q19HNIcBaZRm-kXBChNXUwrRF4uZJtpxnfqRWz-km2TSL-S-c885JTPFPCr8EZuCRqp51lKD4XopxsESmho5RWinsnFVnXX7iM74rcaGK1Kf7Ww0HccUiSQTSS8WnAk2oJl703p-HyEE82uBJ3fQseCh-P-3hAtTadQY511cxXRpZeR0npDmDZYRDkNtsXeCppLfIyan015bdljWw4kOg" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">KROSSOVER</span>
              <h2 className="text-xl font-bold text-white mb-1">Seltos</h2>
              <p className="text-sm text-gray-400 flex-grow">319 000 000 UZS dan</p>
              <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </article>

          {/* Sorento */}
          <article data-aos="fade-left" data-aos-delay="200" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia Sorento SUV" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFG8qtDdmC-zvu8exELVLoY62I7W8xMaz3Vt2bhV9ShdZXw8oLp2snJDMrZcWIVxpXE3DxYmP7tTUao6KyDPT_UHY5VZPoQu-K8Bau1dQzKlgaHKJ90OwQ4LBJH0OWVHLZPgoaeOU7CXJcZTGJDpHh2ZvmHbwoqvCbYRlY9WzlmjVErQytEai1GYEE2pGY1XNQ4mI0tnAOcpgWQfUqZq9bufHv1PUq2n_k3_FJtsQAsGGt8UBPACprbJ9MoRFAf6URNwNe72vKeJU" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">KROSSOVER</span>
              <h2 className="text-xl font-bold text-white mb-1">Sorento</h2>
              <p className="text-sm text-gray-400 flex-grow">599 900 000 UZS dan</p>
              <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </article>

          {/* Sonet */}
          <article data-aos="fade-right" data-aos-delay="300" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia Sonet SUV" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBXyVokubYgg3HQqLADXLGwsBDbta9GXqOdviQyDDY6pmMOyadzdkmfSXr3JxTE8oRHWhbsYG4tIihE9xMYH7qRetEy9k2Jd3t-9KsISnKr29_-UZNBXlAg5kaud7GFIvauNboqyZi57NX8KcVKzaoxWlfzvzApW8Oe4Owc75EyeqgfJvOWtrvB_KVmrNtVdlacQAcs1lDPbKlSVVIrO4EC4Rjl3VOw_JvAeNGaoQVk5LcsLCVG2-Zn4h7-W0eP2kN8z8JHSMX0kM" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">KROSSOVER</span>
              <h2 className="text-xl font-bold text-white mb-1">Sonet</h2>
              <p className="text-sm text-gray-400 flex-grow">Boshlang'ich narxi: 229 900 000 UZS</p>
              <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </article>

          {/* Carnival */}
          <article data-aos="fade-left" data-aos-delay="400" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia Carnival MPV" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMuV5j9dmiJmGetH9Fx_0q-9F7uCWH-VtCaoen9uXmH942YRctq_Pjr6k3xVE1i4sGG5Bke1mKakSHiv9sOXenxn7UYd0_cfj28B8yc5Kmnn7Cko363ONA_JssOJsIx9eczrPPRX8CKIr548eBf1ppOSu_ncZwyLEXzMSCtVj1jGH1EvUpg4WaGva6QTb3DVFqJA18JJ-JJF4CTF_IBeRmeFUNhns1BGZO0G8aaI69zwWKLRmEsapCoMedb3qF4P7muSuBSblAwk" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">MPV</span>
              <h2 className="text-xl font-bold text-white mb-1">Carnival</h2>
              <p className="text-sm text-gray-400 flex-grow">Boshlang'ich narxi: 649 900 000 UZS</p>
              <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
          </article>

          {models.map((model) => (
          <article data-aos="fade-left" data-aos-delay="400" className="group relative bg-[#12212c] rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col border border-white/5 hover:border-white/20">
            <div className="relative h-48 w-full bg-[#020f1a] p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img alt="Kia Carnival MPV" className="w-full h-auto object-contain object-center group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-2xl z-10" src={model.image} />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#b9c8d8] mb-1">MPV</span>
              <h2 className="text-xl font-bold text-white mb-1">{model.name}</h2>
              <p className="text-sm text-gray-400 flex-grow">Boshlang'ich narxi: {model.price} UZS</p>
               <Link  to={`/cars/${model.slug}`}> <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer w-fit border-b border-transparent group-hover:border-[#b9c8d8] pb-1">
                Batafsil 
                <svg className="w-4 h-4 text-[#b9c8d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div></Link>
            </div>
          </article>
        ))}

        </div>
      </main>

      {/* =========================================
          FOOTER QISMI (Pastdan tepaga chiqadi)
      ========================================= */}
      <footer data-aos="fade-up" className="bg-[#080B14] pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/5 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
            <div className="space-y-4">
              <div className="font-bold text-2xl sm:text-3xl tracking-widest mb-4 md:mb-6">
                <i><strong className="text-white">KIA</strong></i>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                O'zbekistonda rasmiy Kia distribyutori.<br/> Sifat va innovatsiya timsoli.
              </p>
              <div className="flex space-x-4 pt-2 md:pt-4">
                <a className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm" href="#">Instagram</a>
                <a className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm" href="#">Telegram</a>
                <a className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm" href="#">Facebook</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-white uppercase tracking-wider text-xs">Sotuvlar</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li><Link className="hover:text-white transition-colors" to="/models">Barcha modellar</Link></li>
                <li><a className="hover:text-white transition-colors" href="#">Maxsus takliflar</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Korporativ mijozlarga</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-white uppercase tracking-wider text-xs">Servis</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Texnik xizmat ko'rsatish</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Ehtiyot qismlar</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Kafolat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-white uppercase tracking-wider text-xs">Kompaniya</h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Biz haqimizda</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Yangiliklar</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Kontaktlar</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-600 gap-4 md:gap-0">
            <p className="text-center md:text-left">© 2024 Kia Uzbekistan. Barcha huquqlar himoyalangan.</p>
            <div className="flex space-x-4">
              <a className="hover:text-gray-300" href="#">Maxfiylik siyosati</a>
              <a className="hover:text-gray-300" href="#">Ommaviy oferta</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Models;
