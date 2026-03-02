import Card from "../components/ui/Card";
import { Quote } from "lucide-react";

import avatarAdil from "../assets/avatar_adil.png";
import avatarMehbooba from "../assets/avatar_mehbooba.png";
import avatarBashir from "../assets/avatar_bashir.png";

const TESTIMONIALS = [
    {
        quote: "The satellite monitoring feature has been a game-changer for our apple orchards. We've improved our fruit quality and yield by 35% using the advanced monitoring systems. The app has revolutionized how we manage our orchards and plan our harvest cycles.",
        name: "Adil Mir",
        role: "Apple Farmer, Shopian, Kashmir",
        avatar: avatarAdil,
    },
    {
        quote: "Farm2i's soil testing feature gave us detailed insights into our saffron fields that we never had before. The on-demand recommendations helped us adjust nutrients at the right time, and we saw a significant improvement in our yield this season.",
        name: "Mehbooba Qayoom",
        role: "Saffron Cultivator, Pampore, Kashmir",
        avatar: avatarMehbooba,
    },
    {
        quote: "The leaf testing feature detected early signs of disease in our walnut trees before it spread. With the on-demand recommendations, we knew exactly what to apply and when. It has completely changed how we protect our orchards.",
        name: "Bashir Ahmad Dar",
        role: "Walnut Farmer, Anantnag, Kashmir",
        avatar: avatarBashir,
    },
];

const TestimonialsSection = () => {
    return (
        <Card className="min-h-[calc(100vh-8rem)]">
            <section id="testimonials" className="scroll-mt-44">
                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold 
                    text-gray-900 mb-3 tracking-tight">
                        What{" "}
                        <span className="text-[#2f6f4f] font-bold">
                            Farmers Say
                        </span>{" "}
                        About Us
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10">
                        Hear from agricultural professionals who have
                        transformed their operations using farm2i.
                    </p>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="flex flex-col justify-between"
                        >
                            {/* Quote Icon */}
                            <div className="mb-2">
                                <div className="w-8 h-8 rounded-lg bg-green-50 
                                flex items-center justify-center">
                                    <Quote
                                        size={16}
                                        className="text-[#2f6f4f]"
                                        strokeWidth={2}
                                    />
                                </div>
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-600 italic leading-snug 
                            text-lg mb-3 flex-1 mb-5">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 mt-auto">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full 
                                    object-cover"
                                />
                                <div>
                                    <p className="font-bold text-gray-900 text-base">
                                        {testimonial.name}
                                    </p>
                                    <p className="font-medium text-gray-500 
                                    text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </Card>
    );
};

export default TestimonialsSection;
