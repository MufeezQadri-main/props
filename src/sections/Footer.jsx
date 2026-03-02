import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../components/ui/Button";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 rounded-t-3xl linear-to-r from-white to-gray-100">
            {/* Main Footer Content */}
            <div className="px-8 md:px-16 pt-14 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Column 1: Brand */}
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-4">
                            Farm2i
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Transforming agriculture through technology. Our smart
                            farming companion helps farmers make data-driven
                            decisions for better yields and sustainability.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://facebook.com/farm2i"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-800 
                                flex items-center justify-center 
                                hover:bg-gray-700 transition"
                                aria-label="Facebook"
                            >
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com/farm2i_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-800 
                                flex items-center justify-center 
                                hover:bg-gray-700 transition"
                                aria-label="Instagram"
                            >
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#benefits" className="text-gray-400 hover:text-white transition text-sm">
                                    Benefits
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-gray-400 hover:text-white transition text-sm">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-gray-400 hover:text-white transition text-sm">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://farm2i.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition text-sm"
                                >
                                    Download App
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">
                            Contact Us
                        </h4>
                        <p className="text-gray-400 text-sm font-medium mb-4">
                            FarmHealth Tech Pvt Ltd
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-[#2f6f4f] mt-0.5 flex-shrink-0" />
                                <a
                                    href="https://maps.google.com/?q=4/3+S.D+Colony+Batamaloo+Srinagar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white text-sm leading-relaxed transition"
                                >
                                    4/3 S. D Colony Batamaloo,
                                    <br />
                                    Srinagar, J&K-190008
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-[#2f6f4f] mt-0.5 flex-shrink-0" />
                                <div className="text-sm leading-relaxed">
                                    <a href="tel:+919403890112" className="text-gray-400 hover:text-white transition block">
                                        +91 94038 90112
                                    </a>
                                    <a href="tel:+919758083252" className="text-gray-400 hover:text-white transition block">
                                        +91 9758083252
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-[#2f6f4f] mt-0.5 flex-shrink-0" />
                                <div className="text-sm leading-relaxed">
                                    <a href="mailto:support@farm2i.com" className="text-gray-400 hover:text-white transition block">
                                        support@farm2i.com
                                    </a>
                                    <a href="mailto:farm2isolutions@gmail.com" className="text-gray-400 hover:text-white transition block">
                                        farm2isolutions@gmail.com
                                    </a>
                                    <a href="mailto:admin@farmhealth.in" className="text-gray-400 hover:text-white transition block">
                                        admin@farmhealth.in
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-4">
                            Subscribe to Our Newsletter
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            Stay updated with the latest farming insights and
                            app features.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 
                                border border-gray-700 text-gray-300 text-sm
                                placeholder-gray-500 focus:outline-none 
                                focus:border-[#2f6f4f] transition"
                            />
                            <Button
                                type="submit"
                                variant="secondary"
                                shape="square"
                                className="w-full"
                            >
                                {subscribed ? "✓ Subscribed!" : "Subscribe"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="px-8 md:px-16 py-5 flex flex-col md:flex-row 
                items-center justify-between gap-4">
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <img src={logo} alt="Farm2i" className="h-8 w-8" />
                        <span className="text-gray-500 text-sm">
                            © 2026 FarmHealth Tech Pvt Ltd. All rights reserved.
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">
                            Terms and Conditions
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 transition text-sm">
                            Shipping Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
