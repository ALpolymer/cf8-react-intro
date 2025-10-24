const Header = () => {
    return (
        <header className="bg-cf-dark-red text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            className="h-12 sm:h-14 lg:h-16 w-auto transition-transform hover:scale-105"
                            src="https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png"
                            alt="Coding Factory Logo"
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
                        <a
                            href="#"
                            className="text-white hover:text-amber-200 transition-colors duration-200 font-medium text-lg"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-amber-200 transition-colors duration-200 font-medium text-lg"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-amber-200 transition-colors duration-200 font-medium text-lg"
                        >
                            Courses
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-amber-200 transition-colors duration-200 font-medium text-lg"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-red-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;