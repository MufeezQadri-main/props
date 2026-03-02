function Card({ children, className = "" }) {
    return (
        <div className={`bg-white rounded-3xl 
        shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
        p-8 md:p-16 ${className}`}>

            {children}

        </div>
    );
}

export default Card;