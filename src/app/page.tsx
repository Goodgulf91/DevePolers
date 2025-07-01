'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Placeholder for logo - black background with white text as specified */}
              <div className="bg-black px-4 py-2 rounded-md border border-gray-600">
                <span className="text-white font-bold text-lg">DevePolers Games</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Start
                </a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  O nas
                </a>
                <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Usługi
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Logo placeholder - will be replaced with actual logo */}
            <div className="inline-block bg-black p-8 rounded-lg border-2 border-gray-600 shadow-2xl">
              <div className="text-white text-3xl font-bold">
                LOGO
              </div>
              <div className="text-gray-300 text-sm mt-2">
                (Miejsce na Twoje logo)
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              DevePolers
            </span>
            <br />
            <span className="text-white">Games</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tworzymy gry i sprzedajemy wysokiej jakości assety dla developerów
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Zobacz nasze assety
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              Nasze gry
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">nas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            DevePolers Games to zespół pasjonatów, którzy łączą kreatywność z technologią, 
            aby tworzyć wyjątkowe doświadczenia w świecie gier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Nasza misja</h3>
              <p className="text-gray-300">
                Dostarczamy najwyższej jakości assety i tworzymy gry, które inspirują i bawią. 
                Naszym celem jest wspieranie społeczności deweloperów gier poprzez profesjonalne rozwiązania.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Doświadczenie</h3>
              <p className="text-gray-300">
                Wieloletnie doświadczenie w branży gier pozwala nam rozumieć potrzeby deweloperów 
                i dostarczać produkty, które rzeczywiście ułatwiają tworzenie gier.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">100+</div>
                <p className="text-gray-300 text-lg">Zadowolonych klientów</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nasze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">usługi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferujemy kompleksowe rozwiązania dla branży gier
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Assets */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🎨</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Sprzedaż Assetów</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Grafiki 2D i 3D
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Animacje postaci
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Efekty specjalne
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Muzyka i dźwięki
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Gotowe skrypty
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
                Przeglądaj Assety
              </button>
            </div>

            {/* Game Development */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🎮</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Tworzenie Gier</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Gry mobilne
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Gry PC/Console
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Gry przeglądarkowe
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Prototypy i MVP
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Konsultacje techniczne
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-500 transition-all duration-300">
                Rozpocznij Projekt
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kontakt</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gotowy do rozpoczęcia swojego projektu? Skontaktuj się z nami!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Napisz do nas</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Twoje imię"
                      className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Opisz swój projekt..."
                      rows={4}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Informacje kontaktowe</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-semibold">kontakt@devepolers.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🌐</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Website</p>
                      <p className="text-white font-semibold">www.devepolers.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">⏰</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Czas odpowiedzi</p>
                      <p className="text-white font-semibold">24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-black px-4 py-2 rounded-md border border-gray-600 inline-block mb-4">
              <span className="text-white font-bold text-lg">DevePolers Games</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 DevePolers Games. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Regulamin
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
