import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallBtn from '../ui/FloatingCallBtn';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-premium-text font-body selection:bg-premium-gold selection:text-white relative">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <FloatingCallBtn />
        </div>
    );
};

export default Layout;
