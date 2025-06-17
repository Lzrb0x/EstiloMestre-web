'use client';

import React, { useState } from 'react';
import { Search, MapPin, Clock, Calendar, Scissors, Smartphone, Zap, Menu, X, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const nearbyBarbers = [
    {
      id: 1,
      name: "Barbearia Central",
      distance: "0.3 km",
      nextSlot: "14:30",
      address: "Rua das Flores, 123",
      specialties: ["Corte Masculino", "Barba", "Sobrancelha"]
    },
    {
      id: 2,
      name: "Corte & Estilo",
      distance: "0.7 km",
      nextSlot: "15:15",
      address: "Av. Principal, 456",
      specialties: ["Fade", "Degradê", "Barba"]
    },
    {
      id: 3,
      name: "Barbeiro Profissional",
      distance: "1.1 km",
      nextSlot: "16:00",
      address: "Rua do Comércio, 789",
      specialties: ["Corte Social", "Barba", "Bigode"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl md:text-3xl font-bold text-slate-800">
              Estilo <span className="text-primary">Mestre</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="text-slate-700 hover:text-primary transition-colors font-medium">
                Como Funciona
              </a>
              <a href="#" className="text-slate-700 hover:text-primary transition-colors font-medium">
                Suporte
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-primary transition-colors font-medium py-2">
                  Como Funciona
                </a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-primary transition-colors font-medium py-2">
                  Suporte
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8">
            <div className="flex-1 animate-[fadeInUp_1s_ease-out_forwards] opacity-0">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Encontre sua barbearia ideal
                <span className="text-primary"> em segundos</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-[fadeInUp_1s_ease-out_0.3s_forwards] opacity-0">
                Agende seu corte de forma rápida e prática. Veja horários disponíveis em tempo real.
              </p>
            </div>

            <div className="w-28 flex items-center justify-center animate-[fadeIn_1.5s_ease-out_0.5s_forwards] opacity-0">
              <div className="relative w-16 h-37 flex items-center justify-center">
                <div className="absolute inset-0 rounded-4xl bg-gradient-to-b from-slate-300 via-white to-slate-400 shadow-lg" />
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-12 h-36 overflow-hidden rounded-full">
                  <div className="w-full h-full animate-[subtleBarberMove_6s_linear_infinite] bg-[repeating-linear-gradient(135deg,#e11d48_0_12px,#2563eb_12px_24px,#fff_24px_36px)]" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-14 h-4 rounded-t-full bg-card-foreground" />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-14 h-4 rounded-b-full bg-card-foreground" />
              </div>
            </div>


          </div>
        </div>
      </section>


      <section className="py-12 bg-white animate-[slideUp_0.8s_ease-out_0.6s_forwards] opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
              Nossas Barbearias Parceiras
            </h2>
            <p className="text-slate-600">
              Veja algumas opções disponíveis na sua região
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nearbyBarbers.map((barber) => (
              <div key={barber.id} className="bg-slate-50 hover:bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{barber.name}</h3>
                    <p className="text-slate-600 text-sm">{barber.address}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-slate-600 text-sm mb-1">
                      <MapPin size={14} />
                      {barber.distance}
                    </div>
                    <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <Clock size={14} />
                      {barber.nextSlot}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {barber.specialties.map((specialty) => (
                    <span key={specialty} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group">
                  <Calendar size={18} />
                  Ver Horários
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-blue-600 hover:text-blue-700 font-medium text-lg">
              Ver todas as barbearias →
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Como é fácil agendar
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Em apenas 3 passos você agenda seu corte e recebe confirmação na hora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Encontre</h3>
              <p className="text-slate-600">Digite seu endereço e veja barbearias próximas com horários disponíveis</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">2. Agende</h3>
              <p className="text-slate-600">Escolha o horário que funciona melhor para você e confirme</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Corte</h3>
              <p className="text-slate-600">Chegue na hora marcada e aproveite seu novo visual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Tudo na palma da sua mão
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">100% Mobile</h3>
              <p className="text-slate-600">Agende pelo celular, tablet ou computador. Funciona em qualquer lugar.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Confirmação Instantânea</h3>
              <p className="text-slate-600">Receba confirmação na hora por SMS e WhatsApp. Sem espera.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Horários Reais</h3>
              <p className="text-slate-600">Veja disponibilidade em tempo real. Sem surpresas ou desencontros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business CTA - Subtle */}
      <section className="py-8 bg-gradient-to-r from-slate-100 to-blue-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-600 mb-2">
              Você é barbeiro ou tem uma barbearia?
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4 decoration-2">
              Quero minha barbearia online
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                Estilo<span className="text-blue-400">Mestre</span>
              </div>
              <p className="text-slate-300">
                Conectando você aos melhores barbeiros da sua cidade.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Para Clientes</h3>
              <div className="space-y-2 text-slate-300">
                <div className="hover:text-white cursor-pointer">Como Funciona</div>
                <div className="hover:text-white cursor-pointer">Encontrar Barbearia</div>
                <div className="hover:text-white cursor-pointer">Suporte</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <div className="space-y-2 text-slate-300">
                <div className="hover:text-white cursor-pointer">Sobre Nós</div>
                <div className="hover:text-white cursor-pointer">Contato</div>
                <div className="hover:text-white cursor-pointer">Termos de Uso</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Ajuda</h3>
              <div className="space-y-2 text-slate-300">
                <div className="hover:text-white cursor-pointer">Central de Ajuda</div>
                <div className="hover:text-white cursor-pointer">WhatsApp</div>
                <div className="hover:text-white cursor-pointer">Email</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 EstiloMestre. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}