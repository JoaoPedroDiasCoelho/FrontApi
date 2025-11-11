import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import NotFound from '@/pages/NotFound';
import Index from '@/pages/Index';
import { Login } from '@/pages/Login';
import { AuthProvider, Protected } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Register } from '@/pages/CreateProducts';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';

export function Rotas() {
    return (
        <AuthProvider>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    
                    <Route path="/" element={<Index />} />
                    
                    <Route path="/login" element={<Login />} />

                    <Route path='/cart' element={<Cart />} />

                    <Route path='/register' element={<Register/>}/>
                    
                    <Route path="/product/:id" element={<ProductDetail />} />
                    
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}