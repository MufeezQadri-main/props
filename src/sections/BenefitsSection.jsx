import BenefitCard from "../components/ui/BenefitCard";
import Card from "../components/ui/Card";
import { BarChart3, Satellite, Activity, Leaf, Bell, Users } from "lucide-react";

const BENEFITS = [
    {
        title: "Visual Data Insights",
        description: "Access charts and heatmaps showing crop health, soil moisture levels, and growth predictions at a glance.",
        icon: BarChart3
    },
    {
        title: "Satellite Monitoring",
        description: "Track crop growth and farm conditions using high-resolution satellite imagery updated regularly.",
        icon: Satellite
    },
    {
        title: "Smart Sensor Integration",
        description: "Get real-time data from on-farm IoT sensors that monitor temperature, humidity, soil conditions, and more.",
        icon: Activity
    },
    {
        title: "Soil Testing Services",
        description: "Request soil sample pickup and receive comprehensive lab-tested insights delivered straight to your app.",
        icon: Leaf
    },
    {
        title: "Customized Alerts",
        description: "Receive personalized notifications about weather changes, optimal harvest times, and potential issues.",
        icon: Bell
    },
    {
        title: "User-Friendly Interface",
        description: "Designed for everyone – from small family farmers to large agricultural enterprises, with no tech expertise needed.",
        icon: Users
    }
];

const BenefitsSection = () => {
    return (
        <Card>
            <section id="benefits" className="scroll-mt-44">
                <div className="max-w- mx-auto">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold 
                    text-gray-900 mb-6 tracking-tight">
                            Key Benefits for <span className="text-[#2f6f4f]">Modern Farmers</span>
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl mb-6">
                            farm2i combines cutting-edge technology with agriculture expertise to provide solutions that make farming smarter, more efficient, and sustainable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {BENEFITS.map((benefit, index) => (
                            <BenefitCard
                                key={index}
                                title={benefit.title}
                                description={benefit.description}
                                icon={benefit.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Card>
    );
};

export default BenefitsSection;
