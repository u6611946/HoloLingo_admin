import Sidebar from '../components/admin/Sidebar';

export const metadata = {
  title: 'Hololingo Admin',
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />

      <main
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--adm-bg)',
        }}
      >
        {children}
      </main>
    </div>
  );
}