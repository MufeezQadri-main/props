import phone from "../../assets/phone.png";
import { useState } from "react";
import DownloadModal from "./DownloadModal";
import Button from "./Button";

function Hero() {
    const [showDownload, setShowDownload] = useState(false);

    return (
        <>
            <div className="flex flex-col lg:flex-row 
        items-center justify-between gap-16">

                {/* LEFT */}
                <div className="flex-1">

                    <span className="inline-block bg-green-100
                 text-green-700 px-5 py-2 rounded-full
                  text-sm mb-6">
                        Precision Agriculture
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold
                 leading-tight mb-6">
                        Revolutionize Your Farm with{" "}
                        <span className="bg-gradient-to-r from-green-600
                    to-blue-500 bg-clip-text text-transparent">
                            Real-Time Intelligence
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg mb-8 max-w-xl">
                        Harness the power of satellite technology, IoT sensors, and AI-driven insights to optimize your farming practices, enhance yields, and promote sustainability.
                    </p>

                    <div className="flex gap-4 mb-10">
                        <Button
                            onClick={() => setShowDownload(true)}
                        >
                            Download App
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            See How It Works
                        </Button>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={phone}
                        alt="App Preview"
                        className="w-[350px] drop-shadow-2xl"
                    />
                </div>

            </div>

            <DownloadModal
                isOpen={showDownload}
                onClose={() => setShowDownload(false)}
            />
        </>
    );
}

export default Hero;