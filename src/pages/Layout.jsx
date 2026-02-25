import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#0F0F0F]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
