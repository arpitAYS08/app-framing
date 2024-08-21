import { useState } from 'react';
import { usePathname, useRouter} from 'next/navigation';
import { ppLogo } from '../../app/assets';
import Image from 'next/image';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currHash, setCurrHash] = useState('home');
    
    const pathname = usePathname();
    const router = useRouter();

    const scrolltoHash = (element_id: string) => {
        const element = document.getElementById(element_id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        setCurrHash(hash);
        setIsDrawerOpen(false); // Close the drawer on navigation        
        if (pathname === '/') {
            scrolltoHash(hash);
        }else{
            await router.push(`/#${hash}`);
            scrolltoHash(hash);
        }
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header className="isolate bg-white sticky top-0 w-full shadow-md z-10">
            <nav className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-5">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold text-gray-800">
                        <Image className="object-cover" src={ppLogo} width={200} alt="Logo" />
                    </a>
                    <div className="hidden md:flex items-center space-x-16">
                        <a href="/#home"
                        // className="text-gray-800 text-black font-semibold hover:text-secondary hover:font-bold " 
                        className={`text-gray-800 text-black font-semibold hover:text-secondary hover:font-bold ${
                            currHash === 'home' ? 'border-b-2 border-secondary transition-all duration-300' : ''
                          }`}
                        onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                        <a href="/#about" 
                        // className="text-gray-800 text-black font-semibold hover:text-secondary hover:font-bold" 
                        className={`text-gray-800 text-black font-semibold hover:text-secondary hover:font-bold ${
                            currHash === 'about' ? 'border-b-2 border-secondary transition-all duration-300' : ''
                          }`}
                        onClick={(e) => handleNavClick(e, 'about')}>App-Framing</a>
                        <a href="/#service" 
                        // className="text-gray-800 text-black font-semibold hover:text-secondary hover:font-bold"
                        className={`text-gray-800 text-black font-semibold hover:text-secondary hover:font-bold ${
                            currHash === 'service' ? 'border-b-2 border-secondary transition-all duration-300' : ''
                          }`}
                         onClick={(e) => handleNavClick(e, 'service')}>Services</a>
                    </div>
                    <a href="/contact" className="bg-black hover:bg-secondary text-white px-4 py-2 rounded-md">Contact us</a>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-800 focus:outline-none" onClick={toggleDrawer}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
                    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-30 p-4">
                        <div className="flex justify-between items-center mb-8">
                            <a href="/" className="text-2xl font-bold text-gray-800">
                                <Image className="object-cover" src={ppLogo} width={150} alt="Logo" />
                            </a>
                            <button className="text-gray-800 focus:outline-none" onClick={toggleDrawer}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4">
                            <a href="/#home" className="text-gray-800 hover:text-secondary" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                            <a href="/#about" className="text-gray-800 hover:text-secondary" onClick={(e) => handleNavClick(e, 'about')}>App-Framing</a>
                            <a href="/#service" className="text-gray-800 hover:text-secondary" onClick={(e) => handleNavClick(e, 'service')}>Services</a>
                            <a href="/contact" className="text-gray-800 hover:text-secondary">Contact us</a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}