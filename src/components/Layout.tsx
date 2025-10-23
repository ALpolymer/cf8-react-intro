

interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({children}: LayoutProps) => {
    return (
      <div className="flex flex-col min-h-screen bg-amber-50">
          {children}
      </div>
    );
};

export default Layout;