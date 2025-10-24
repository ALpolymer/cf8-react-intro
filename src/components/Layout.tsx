

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            {children}
        </div>
    );
};

export default Layout;