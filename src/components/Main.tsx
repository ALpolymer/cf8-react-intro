const Main = () => {
    return (
        <main className="flex-grow" role="main">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Hero Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Main Content
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Το περιεχόμενο της σελίδας...
                    </p>
                </div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Feature {item}
                            </h3>
                            <p className="text-gray-600">
                                Περιγραφή του feature...
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Main;