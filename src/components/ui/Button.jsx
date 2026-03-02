const VARIANTS = {
    primary:
        "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md hover:opacity-90",
    secondary:
        "bg-[#2f6f4f] text-white hover:bg-[#245a3f]",
    outline:
        "border border-blue-500 text-blue-500 hover:bg-blue-50",
    ghost:
        "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
};

const SIZES = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

const SHAPES = {
    rounded: "rounded-full",
    square: "rounded-lg",
};

function Button({
    children,
    variant = "primary",
    size = "md",
    shape = "rounded",
    className = "",
    ...props
}) {
    const classes = [
        VARIANTS[variant],
        SIZES[size],
        SHAPES[shape],
        "font-medium transition-all duration-200 cursor-pointer",
        "inline-flex items-center justify-center gap-2",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;