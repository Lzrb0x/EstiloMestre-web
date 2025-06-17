'use client';

import { Search, Clock, Calendar, Scissors, Smartphone, Zap } from 'lucide-react';
import { Header } from './components/Header';
import BarbershopShortCard from './components/BarbershopShortCard';
import { Button } from '@/components/ui/button';
import { Footer } from './components/Footer';
import useFetchShortBarbershops from './actions/useFetchBarbershops';


export default function HomePage() {

  const { barbershops, error } = useFetchShortBarbershops();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">

      
      <Header />


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

          {barbershops && barbershops.length > 0 && (
            <BarbershopShortCard barbers={barbershops} />
          )}
        
          {error && (
            <div className="text-red-600 text-center mt-4">
              <p>{error}</p>
            </div>
          )}

          <div className="text-center mt-8">
            <Button variant={"link"} className="font-medium text-lg">
              Ver todas as barbearias →
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-12 md:py-16 bg-slate-50">
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

      <section className="py-8 bg-gradient-to-r from-slate-100 to-blue-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-600 mb-2">
              Você é barbeiro ou tem uma barbearia?
            </p>
            <Button variant={"link"} className="font-medium underline decoration-2 cursor-pointer">
              Quero minha barbearia online
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


