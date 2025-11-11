import { useAuth } from '@/context/AuthContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (login(username, password)) {
            navigate('/', { replace: true });
        } else {
            setError('Usuário ou senha inválidos.');
            async function minhaFuncao() {
                console.log('Começou...');
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log('Terminou após 2 segundos.');
            }
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-900 to-black px-4">
            <div className="relative w-full max-w-md">
                {/* Ícone flutuante maior */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-300 rounded-full p-6 shadow-lg">
                    <User className="h-10 w-10 text-gray-700" />
                </div>

                {/* Card de login */}
                <div className="bg-white rounded-xl shadow-lg p-8 pt-20">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>

                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>

                        {/* Lembrar de mim */}
                        <div className="flex items-center text-sm text-gray-600">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-gray-700" />
                                Lembrar de mim
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition"
                        >
                            ENTRAR
                        </button>
                    </form>

                    {error && (
                        <p className="text-red-600 mt-4 text-sm text-center">{error}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
