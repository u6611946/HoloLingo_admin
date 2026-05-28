import Sidebar from '../components/admin/Sidebar';

export const metadata = { title: 'Hololingo Admin' };

export default function AdminLayout({ children }) {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#080e14',
      color: '#fff',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <Sidebar />
      <main style={{
        flex: 1,
        minWidth: 0,
        background: '#080e14',
        overflowY: 'auto',
      }}>
        {children}
      </main>
    </div>
  );
}