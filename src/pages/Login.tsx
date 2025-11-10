import { useAuth } from '@/context/AuthContext';
import { timeStamp } from 'node:console';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            navigate('/dashboard', { replace: true });
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
        <div className='bg-black flex flex-col justify-center items-center h-[650px]'>
            <div className='bg-white shadow-md p-6 rounded-lg'>
                <h2 className='text-[32px] text-center'> Login</h2>
                <form onSubmit={handleSubmit} className='h-[200px] flex flex-col justify-around'>
                    <input
                        type="text"
                        placeholder="Usuário (admin)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full p-2 border rounded-lg border-[#161616]'
                    />
                    <input
                        type="password"
                        placeholder="Senha (123)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full p-2 border rounded-lg border-[#161616]'
                    />
                   <button type="submit" className="black hover:text-white border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button> 
                </form>
                {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
            </div>
           
        </div>
    );
}