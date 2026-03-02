import Card from "../components/ui/Card";
import Hero from "../components/ui/Hero";

function HeroSection() {
    return (
        <section className="bg-gray-100">
            <div className="max-w- mx-auto">
                <Card>
                    <Hero badge="Precision Agriculture"
                        title="Revolutionize Your Farm with"
                        highlight="Real-Time Intelligence"
                        description="Harness the power of satellite technology, IoT sensors, and AI-driven insights to optimize your farming practices, enhance yields, and promote sustainability."
                        primaryBtn="Download App"
                        secondaryBtn="See How It Works"
                        image="" />
                </Card>
            </div>
        </section>
    );
}

export default HeroSection;