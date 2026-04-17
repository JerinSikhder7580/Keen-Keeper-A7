import React from 'react';

const ErrorComponents = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
                <div className="text-center space-y-6">

                    {/* 404 Text */}
                    <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                        404
                    </h1>

                    {/* Message */}
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Page Not Found
                    </h2>

                    <p className="text-gray-400 max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Button */}
                    <a
                        href="/"
                        className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        Go Home
                    </a>

                </div>
            </div>
        </div>
    );

};

export default ErrorComponents;