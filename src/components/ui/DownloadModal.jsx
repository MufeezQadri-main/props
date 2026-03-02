import { X } from "lucide-react";

const DownloadModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl p-8 
                max-w-md w-full mx-4 animate-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 
                    hover:text-gray-600 transition"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Download{" "}
                        <span className="text-[#2f6f4f]">farm2i</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Get the app on your device and start transforming
                        your farming today.
                    </p>
                </div>

                {/* Store Buttons */}
                <div className="space-y-3">
                    {/* App Store */}
                    <a
                        href="https://apps.apple.com/us/app/farm2i-precision-farming/id6670397035"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl 
                        border border-gray-200 hover:border-[#2f6f4f] 
                        hover:bg-green-50/50 transition group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gray-900 
                        flex items-center justify-center flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.85 4.62 16.42 4.8C17.09 4.83 18.89 5.08 20.03 6.74C19.93 6.8 17.53 8.17 17.56 11.06C17.59 14.49 20.56 15.63 20.6 15.64C20.57 15.72 20.12 17.32 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Download on the</p>
                            <p className="text-base font-semibold text-gray-900">
                                App Store
                            </p>
                        </div>
                    </a>

                    {/* Google Play */}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.farmhealth.farm2i&hl=en_IN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl 
                        border border-gray-200 hover:border-[#2f6f4f] 
                        hover:bg-green-50/50 transition group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gray-900 
                        flex items-center justify-center flex-shrink-0">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                                <path d="M1.22 0.225C0.94 0.525 0.78 0.975 0.78 1.545V22.455C0.78 23.025 0.94 23.475 1.22 23.775L1.3 23.85L12.78 12.375V12.225V12.075L1.3 0.6L1.22 0.225Z" fill="#4285F4" />
                                <path d="M16.6 16.2L12.78 12.375V12.225V12.075L16.6 8.25L16.7 8.31L21.22 10.89C22.51 11.625 22.51 12.825 21.22 13.56L16.7 16.14L16.6 16.2Z" fill="#FBBC04" />
                                <path d="M16.7 16.14L12.78 12.225L1.22 23.775C1.66 24.24 2.38 24.3 3.19 23.835L16.7 16.14Z" fill="#EA4335" />
                                <path d="M16.7 8.31L3.19 0.615C2.38 0.15 1.66 0.21 1.22 0.675L12.78 12.225L16.7 8.31Z" fill="#34A853" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Get it on</p>
                            <p className="text-base font-semibold text-gray-900">
                                Google Play
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DownloadModal;
