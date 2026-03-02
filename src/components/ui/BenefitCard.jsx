import Card from "./Card";

const BenefitCard = ({ title, description, icon: Icon }) => {
    return (
        <Card className="flex flex-col gap-4 transition-shadow duration-300 !p-6">
            <div className="w-14 h-14 rounded-full bg-green-50 
            flex items-center justify-center text-green-600">
                <Icon size={24} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900 
                leading-tight">
                    {title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </Card>
    );
};

export default BenefitCard;
