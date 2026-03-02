import { useState } from "react";
import Card from "../components/ui/Card";
import { Satellite, MapPin, Leaf } from "lucide-react";

import satelliteViewImg from "../assets/satellite_view.png";
import satelliteMappingImg from "../assets/satellite_mapping.png";
import soilTestingImg from "../assets/soil_testing.png";

const FEATURES = [
    {
        id: "satellite-view",
        tab: "Satellite View",
        icon: Satellite,
        title: "High-Resolution Satellite Imagery",
        description:
            "Monitor your fields from above with regularly updated satellite imagery. Track crop health, identify problem areas, and plan interventions with precision.",
        bullets: [
            "NDVI vegetation analysis",
            "Crop stress detection",
            "Field boundary mapping",
            "Historical imagery comparison",
        ],
        image: satelliteViewImg,
    },
    {
        id: "satellite-mapping",
        tab: "Satellite Mapping",
        icon: MapPin,
        title: "Satellite Mapping & Monitoring",
        description:
            "Access high-resolution satellite imagery of your fields updated regularly. Track vegetation health, monitor field boundaries, and plan interventions with precision mapping.",
        bullets: [
            "NDVI vegetation analysis",
            "Field boundary mapping",
            "Multi-spectral imaging",
            "Historical imagery comparison",
        ],
        image: satelliteMappingImg,
    },
    {
        id: "soil-testing",
        tab: "Soil & Leaf Testing",
        icon: Leaf,
        title: "Soil & Leaf Testing",
        description:
            "Request professional soil and leaf testing directly from the app. Our team collects samples, analyses them in the lab, and delivers on-demand recommendations tailored to your crop and field conditions.",
        bullets: [
            "Raise a test request in-app",
            "Professional sample collection",
            "Detailed lab analysis reports",
            "On-demand expert recommendations",
        ],
        image: soilTestingImg,
    },
];

const FeaturesSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const active = FEATURES[activeTab];

    return (
        <Card>
            <section id="features" className="scroll-mt-44">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold 
                    text-gray-900 mb-4 tracking-tight">
                        Interactive{" "}
                        <span className="text-[#2f6f4f] font-bold">Feature Highlights</span>{" "}

                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore the powerful capabilities of farm2i and discover
                        how our technology transforms modern farming practices.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex items-center bg-gray-100 
                rounded-full p-1.5 mb-6 max-w-2xl mx-auto">
                    {FEATURES.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 flex items-center justify-center 
                                gap-2 py-3 px-4 rounded-full text-sm font-medium 
                                transition-all duration-300
                                ${activeTab === index
                                        ? "bg-[#2f6f4f] text-white shadow-md"
                                        : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                <Icon size={16} strokeWidth={2} />
                                <span className="hidden sm:inline">{feature.tab}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Card */}
                <Card className="!p-0 overflow-hidden">
                    <div className="flex flex-col lg:flex-row 
                    items-center gap-8 lg:gap-0">

                        {/* Left: Text */}
                        <div className="flex-1 p-6 lg:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold 
                            text-gray-900 mb-4 leading-tight">
                                {active.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                                {active.description}
                            </p>
                            <ul className="space-y-2">
                                {active.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full 
                                        bg-[#2f6f4f] flex-shrink-0"></span>
                                        <span className="text-gray-700 font-medium">
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Image */}
                        <div className="flex-1 flex items-center 
                        justify-center p-6 lg:p-8">
                            <img
                                src={active.image}
                                alt={active.title}
                                className="w-full max-w-[320px] rounded-2xl 
                                shadow-lg object-cover"
                            />
                        </div>

                    </div>
                </Card>
            </section>
        </Card>
    );
};

export default FeaturesSection;
