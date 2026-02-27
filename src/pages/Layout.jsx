import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <div>
        <Sidebar />
      </div>

      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-50 h-full w-72 bg-white shadow-xl">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <div className="relative">
          <Header />
        </div>
        <main className="flex-1 overflow-auto">
          <DashBoard />
        </main>
      </div>
    </div>
  );
};

export default Layout;
