import Sidebar from '../components/admin/Sidebar';

export const metadata = {
  title: 'Hololingo Admin',
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          minWidth: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background:
            'radial-gradient(circle at top right, rgba(0,229,255,.06), transparent 25%), var(--adm-bg)',
          overflowX: 'hidden',
        }}
      >
        {/* TOP BLUR */}
        <div
          style={{
            position: 'fixed',
            top: '-120px',
            right: '-120px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'rgba(0,229,255,.08)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* PAGE CONTENT */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '24px',
            flex: 1,
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}