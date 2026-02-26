import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';

const Layout = ({ children }) => {
  return (
    <div className="flex h-scree">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <DashBoard />
        </main>
      </div>
    </div>
  );
};

export default Layout;
