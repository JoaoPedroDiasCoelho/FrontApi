import { ShoppingCart, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

const Footer = () => {
  const itemCount = useCart((state) => state.itemCount());

  return (
    <footer className="bg-white border-t-1 shadow-sm">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-10">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <h1 className='text-black font-bold text-[24px]'>eCommerce</h1>
                </a>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Desenvolvido por: João Pedro Dias Coelho</a>.</span>
        </div>
    </footer>
  );
};

export default Footer;
