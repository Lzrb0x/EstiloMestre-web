'use client';
import React, { useState } from 'react';
import { User, Mail, Lock, Phone, CheckCircle, XCircle, Loader, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from './Header';



export default function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Previne o recarregamento da página

        setShowSuccessMessage(false);
        setShowErrorMessage(false);
        setErrorMessage('');

        if (!name || !email || !password || !phone) {
            setErrorMessage('Por favor, preencha todos os campos.');
            setShowErrorMessage(true);
            return;
        }


        setShowSuccessMessage(true);

        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
    };

    const closeMessages = () => {
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
    };


    return (
        <div className="min-h-screen w-full bg-gray-50">
            <Header />
            <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center p-2 sm:p-6">
                {/* Card principal - ajustado para ser maior em mobile */}
                <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-8 w-[95%] sm:w-full sm:max-w-md lg:max-w-xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6 sm:mb-8">
                        Crie Sua Conta
                    </h2>

                    {/* Form com grid apenas em desktop */}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-6">
                        {/* Campo Nome */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                Nome Completo
                            </label>
                            <div className="relative">
                                <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full pl-10 pr-3 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 transition duration-200 text-sm sm:text-base"
                                    placeholder="Seu nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Campo Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email</label>
                            <div className="relative">
                                <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full pl-10 pr-3 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 transition duration-200 text-sm sm:text-base"
                                    placeholder="seu.email@exemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Campo Senha */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Senha</label>
                            <div className="relative">
                                <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full pl-10 pr-3 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 transition duration-200 text-sm sm:text-base"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Campo Telefone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Telefone</label>
                            <div className="relative">
                                <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full pl-10 pr-3 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 transition duration-200 text-sm sm:text-base"
                                    placeholder="(XX) XXXXX-XXXX"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Botão de Cadastro */}
                        <Button
                            className="w-full lg:col-span-2 p-5 font-semibold cursor-pointer mt-6"
                        >
                            <span>Cadastrar</span>
                        </Button>

                        <div className="relative flex py-5 items-center lg:col-span-2">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500">ou</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <Button
                            className="w-full lg:col-span-2 flex items-center justify-center cursor-pointer transition duration-200"
                            variant="secondary"
                        >
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google icon" className="h-5 w-5" />
                            <span>Continue com Google</span>
                        </Button>

                    </form>

                    {/* Restante do código dos modais permanece igual */}
                </div>
            </div>
        </div>
    );
}