import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import DownloadModal from "../components/ui/DownloadModal";
import Button from "../components/ui/Button";

const NAV_LINKS = [
    { label: "Benefits", href: "#benefits" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showDownload, setShowDownload] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 w-full z-50 
            rounded-b-2xl transition-all duration-300
            ${scrolled ? "bg-[#fcfcfc]" : "bg-white opacity-90"}`}
            >
                <div className="max-w-7xl mx-auto pl-1">
                    <div className="flex items-center justify-between h-20">

                        <div
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-3 cursor-pointer">
                            <img
                                src={logo}
                                alt="Farm2I Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-2xl 
                            font-semibold text-[#2f6f4f] 
                            tracking-wide cursor-pointer">
                                Farm2i
                            </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-12 
                        text-gray-700 font-medium text-[16px]">

                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="hover:text-green-700 transition"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <Button
                                onClick={() => setShowDownload(true)}
                                className="ml-4"
                            >
                                Get Started
                            </Button>

                        </div>

                    </div>
                </div>
            </nav>

            <DownloadModal
                isOpen={showDownload}
                onClose={() => setShowDownload(false)}
            />
        </>
    );
}

export default Navbar