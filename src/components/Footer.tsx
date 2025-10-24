const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-3">
                            Coding Factory
                        </h3>
                        <p className="text-sm text-gray-400">
                            Software Engineering Education
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Programs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Admissions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-3">
                            Contact
                        </h3>
                        <p className="text-sm text-gray-400">
                            info@codingfactory.gr
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2025 Coding Factory 8. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;