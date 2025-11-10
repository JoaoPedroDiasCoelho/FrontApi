import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
    const { logout } = useAuth();

    return (
        <div>
            <button type="button" className="black hover:text-white border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><Link to="/register">Cadastrar Produtos</Link></button>
        </div>
    );
}

export default Dashboard;