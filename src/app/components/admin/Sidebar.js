'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  {
    section: 'Overview',
    items: [
      { href: '/admin/dashboard', icon: '⊞', label: 'Dashboard' },
      { href: '/admin/analytics', icon: '◷', label: 'Analytics' },
    ],
  },
  {
    section: 'Users',
    items: [
      { href: '/admin/users',    icon: '◯', label: 'All users', badge: '1,284', badgeStyle: 'count' },
      { href: '/admin/flagged',  icon: '⚑', label: 'Flagged',   badge: '3',     badgeStyle: 'alert' },
      { href: '/admin/feedback', icon: '◈', label: 'Feedback' },
    ],
  },
  {
    section: 'Content',
    items: [
      { href: '/admin/words',      icon: '☷',     label: 'Word database'    },
      { href: '/admin/languages',  icon: '◉',     label: 'Languages'        },
      { href: '/admin/challenges', icon: '✦',     label: 'Daily challenges' },
      { href: '/admin/gobot',      icon: 'robot', label: 'Gobot AI'         },
    ],
  },
  {
    section: 'System',
    items: [
      { href: '/admin/notifications', icon: '⊕', label: 'Notifications' },
      { href: '/admin/settings',      icon: '⚙', label: 'Settings'      },
    ],
  },
];

// ── SHARED MODAL WRAPPER ─────────────────────────────────────────
function Modal({ title, subtitle, onClose, children }) {
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 200 }} />
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%', maxWidth: '420px',
          background: 'linear-gradient(180deg, #0d1e2a 0%, #071018 100%)',
          border: '1px solid rgba(0,229,255,.18)',
          borderRadius: '16px', zIndex: 201,
          boxShadow: '0 24px 64px rgba(0,0,0,.8)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #0d2030' }}>
          <div>
            <div style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>{title}</div>
            {subtitle && <div style={{ color: '#3a5060', fontSize: '11px', marginTop: '3px' }}>{subtitle}</div>}
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#3a5060', fontSize: '20px', cursor: 'pointer', lineHeight: 1 }}>×</button>
        </div>
        {children}
      </div>
    </>
  );
}

// ── EDIT PROFILE MODAL ───────────────────────────────────────────
function EditProfileModal({ onClose }) {
  const [name,   setName]   = useState('Admin');
  const [email,  setEmail]  = useState('admin@hololingo.app');
  const [saving, setSaving] = useState(false);
  const [saved,  setSaved]  = useState(false);
  const [error,  setError]  = useState('');

  const handleSave = async () => {
    if (!name.trim())  { setError('Name is required.');  return; }
    if (!email.trim()) { setError('Email is required.'); return; }
    setError('');
    setSaving(true);
    await new Promise(r => setTimeout(r, 700)); // replace with real API call
    setSaving(false);
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 1200);
  };

  const inputStyle = {
    width: '100%', background: '#071014', border: '1px solid #0d2030',
    borderRadius: '8px', padding: '9px 12px', color: '#ccc',
    fontSize: '13px', outline: 'none', boxSizing: 'border-box',
  };

  return (
    <Modal title="Edit profile" subtitle="Update your display info" onClose={onClose}>
      <div style={{ padding: '18px 20px' }}>

        {/* Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', padding: '12px 14px', background: 'rgba(0,229,255,.04)', border: '1px solid rgba(0,229,255,.08)', borderRadius: '10px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.05))', border: '1px solid rgba(0,229,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00e5ff', fontSize: '18px', fontWeight: 700 }}>
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{name || 'Admin'}</div>
            <div style={{ color: '#3a5060', fontSize: '11px', marginTop: '2px' }}>Super admin</div>
          </div>
        </div>

        {/* Name */}
        <div style={{ marginBottom: '14px' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>Display name</div>
          <input
            style={inputStyle} value={name}
            onChange={e => setName(e.target.value)} placeholder="Your name"
            onFocus={e => (e.target.style.borderColor = 'rgba(0,229,255,.4)')}
            onBlur={e  => (e.target.style.borderColor = '#0d2030')}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: '4px' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>Email address</div>
          <input
            style={inputStyle} type="email" value={email}
            onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
            onFocus={e => (e.target.style.borderColor = 'rgba(0,229,255,.4)')}
            onBlur={e  => (e.target.style.borderColor = '#0d2030')}
          />
        </div>

        {error && <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '10px', padding: '8px 12px', background: 'rgba(255,107,107,.08)', border: '1px solid rgba(255,107,107,.15)', borderRadius: '8px' }}>{error}</div>}

        <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
          <button onClick={onClose} style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '1px solid #0d2030', background: 'transparent', color: '#3a5060', fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
          <button onClick={handleSave} disabled={saving} style={{ flex: 2, padding: '10px', borderRadius: '10px', border: `1px solid ${saved ? 'rgba(74,222,128,.35)' : 'rgba(0,229,255,.35)'}`, background: saved ? 'rgba(74,222,128,.1)' : 'rgba(0,229,255,.1)', color: saved ? '#4ade80' : '#00e5ff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all .2s', opacity: saving ? 0.7 : 1 }}>
            {saving ? 'Saving…' : saved ? '✓ Saved' : 'Save changes'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ── CHANGE PASSWORD MODAL ────────────────────────────────────────
function ChangePasswordModal({ onClose }) {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showCur, setShowCur] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showCon, setShowCon] = useState(false);
  const [saving,  setSaving]  = useState(false);
  const [saved,   setSaved]   = useState(false);
  const [error,   setError]   = useState('');

  const strength = (() => {
    const p = newPass;
    if (!p) return null;
    let s = 0;
    if (p.length >= 8)          s++;
    if (/[A-Z]/.test(p))        s++;
    if (/[0-9]/.test(p))        s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    if (s <= 1) return { label: 'Weak',   color: '#ff6b6b', pct: '25%'  };
    if (s === 2) return { label: 'Fair',   color: '#f59e0b', pct: '50%'  };
    if (s === 3) return { label: 'Good',   color: '#00e5ff', pct: '75%'  };
    return               { label: 'Strong', color: '#4ade80', pct: '100%' };
  })();

  const handleSave = async () => {
    if (!current)           { setError('Enter your current password.');     return; }
    if (newPass.length < 8) { setError('New password needs 8+ characters.'); return; }
    if (newPass !== confirm) { setError('Passwords do not match.');          return; }
    setError('');
    setSaving(true);
    await new Promise(r => setTimeout(r, 700)); // replace with real API call
    setSaving(false);
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 1200);
  };

  const inputStyle = {
    flex: 1, background: 'none', border: 'none',
    padding: '9px 12px', color: '#ccc', fontSize: '13px', outline: 'none',
  };

  const passWrap = (hasError) => ({
    display: 'flex', alignItems: 'center',
    background: '#071014',
    border: `1px solid ${hasError ? 'rgba(255,107,107,.4)' : '#0d2030'}`,
    borderRadius: '8px', overflow: 'hidden',
  });

  const eyeBtn = (fn, show) => (
    <button onClick={fn} style={{ background: 'none', border: 'none', color: '#3a5060', cursor: 'pointer', padding: '0 12px', fontSize: '14px' }}>
      {show ? '🙈' : '👁️'}
    </button>
  );

  return (
    <Modal title="Change password" subtitle="Update your login credentials" onClose={onClose}>
      <div style={{ padding: '18px 20px' }}>

        {/* Current */}
        <div style={{ marginBottom: '12px' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>Current password</div>
          <div style={passWrap(false)}>
            <input type={showCur ? 'text' : 'password'} value={current} onChange={e => setCurrent(e.target.value)} placeholder="••••••••" style={inputStyle} />
            {eyeBtn(() => setShowCur(p => !p), showCur)}
          </div>
        </div>

        {/* New */}
        <div style={{ marginBottom: '12px' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>New password</div>
          <div style={passWrap(false)}>
            <input type={showNew ? 'text' : 'password'} value={newPass} onChange={e => setNewPass(e.target.value)} placeholder="••••••••" style={inputStyle} />
            {eyeBtn(() => setShowNew(p => !p), showNew)}
          </div>
          {strength && (
            <div style={{ marginTop: '6px' }}>
              <div style={{ height: '3px', borderRadius: '2px', background: '#0d2030', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: strength.pct, background: strength.color, transition: 'width .3s, background .3s' }} />
              </div>
              <div style={{ color: strength.color, fontSize: '10px', marginTop: '3px' }}>{strength.label}</div>
            </div>
          )}
        </div>

        {/* Confirm */}
        <div style={{ marginBottom: '4px' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '6px' }}>Confirm new password</div>
          <div style={passWrap(confirm && confirm !== newPass)}>
            <input type={showCon ? 'text' : 'password'} value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="••••••••" style={inputStyle} />
            {eyeBtn(() => setShowCon(p => !p), showCon)}
          </div>
          {confirm && confirm !== newPass && (
            <div style={{ color: '#ff6b6b', fontSize: '10px', marginTop: '4px' }}>Passwords don't match</div>
          )}
        </div>

        {error && <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '10px', padding: '8px 12px', background: 'rgba(255,107,107,.08)', border: '1px solid rgba(255,107,107,.15)', borderRadius: '8px' }}>{error}</div>}

        <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
          <button onClick={onClose} style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '1px solid #0d2030', background: 'transparent', color: '#3a5060', fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
          <button onClick={handleSave} disabled={saving} style={{ flex: 2, padding: '10px', borderRadius: '10px', border: `1px solid ${saved ? 'rgba(74,222,128,.35)' : 'rgba(0,229,255,.35)'}`, background: saved ? 'rgba(74,222,128,.1)' : 'rgba(0,229,255,.1)', color: saved ? '#4ade80' : '#00e5ff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all .2s', opacity: saving ? 0.7 : 1 }}>
            {saving ? 'Saving…' : saved ? '✓ Updated' : 'Update password'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ── SIDEBAR ──────────────────────────────────────────────────────
export default function Sidebar() {
  const path   = usePathname();
  const router = useRouter();
  const [menuOpen,        setMenuOpen]        = useState(false);
  const [showEditModal,   setShowEditModal]    = useState(false);
  const [showPassModal,   setShowPassModal]    = useState(false);

  const adminMenuOptions = [
    { label: 'Edit profile',    action: () => { setMenuOpen(false); setShowEditModal(true); } },
    { label: 'Change password', action: () => { setMenuOpen(false); setShowPassModal(true); } },
    { label: 'Sign out',        action: () => router.replace('/login'), danger: true          },
  ];

  return (
    <>
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
      )}

      {showEditModal && <EditProfileModal   onClose={() => setShowEditModal(false)} />}
      {showPassModal && <ChangePasswordModal onClose={() => setShowPassModal(false)} />}

      <aside
        style={{
          width: '260px', height: '100vh',
          position: 'relative', zIndex: 45,
          top: 0, display: 'flex', flexDirection: 'column',
          background: 'linear-gradient(180deg, #0b141c 0%, #071018 100%)',
          borderRight: '1px solid rgba(255,255,255,.05)',
          overflow: 'visible', backdropFilter: 'blur(12px)',
        }}
      >
        {/* LOGO */}
        <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.05))', border: '1px solid rgba(0,229,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(0,229,255,.12)', overflow: 'hidden' }}>
            <Image src="/Hololingo_logo.png" alt="Hololingo Logo" width={26} height={26} style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{ color: 'var(--adm-text)', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.03em' }}>Hololingo</div>
            <div style={{ color: 'var(--adm-text3)', fontSize: '11px', marginTop: '3px' }}>Admin panel</div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div style={{ flex: 1, padding: '18px 14px', overflowY: 'auto' }}>
          {navItems.map((sec) => (
            <div key={sec.section} style={{ marginBottom: '28px' }}>
              <div style={{ color: '#4c6374', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.14em', padding: '0 10px', marginBottom: '10px', fontWeight: 700 }}>
                {sec.section}
              </div>
              {sec.items.map((item) => {
                const active = path.startsWith(item.href);
                return (
                  <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: '14px', marginBottom: '5px', background: active ? 'linear-gradient(135deg, rgba(0,229,255,.12), rgba(0,229,255,.04))' : 'transparent', border: active ? '1px solid rgba(0,229,255,.18)' : '1px solid transparent', transition: '.2s ease', cursor: 'pointer', boxShadow: active ? '0 0 20px rgba(0,229,255,.08)' : 'none' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: active ? 'rgba(0,229,255,.12)' : 'rgba(255,255,255,.03)', border: active ? '1px solid rgba(0,229,255,.15)' : '1px solid rgba(255,255,255,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden', color: active ? 'var(--adm-cyan)' : 'var(--adm-text3)', fontSize: '16px' }}>
                        {item.icon === 'robot' ? (
                          <Image src="/robot 1.png" alt="Robot" width={20} height={20} style={{ objectFit: 'contain' }} />
                        ) : item.icon}
                      </div>
                      <span style={{ flex: 1, color: active ? 'var(--adm-cyan)' : 'var(--adm-text2)', fontSize: '13px', fontWeight: active ? 600 : 500 }}>{item.label}</span>
                      {item.badge && (
                        <span style={{ background: item.badgeStyle === 'alert' ? 'rgba(255,107,107,.14)' : 'rgba(0,229,255,.10)', color: item.badgeStyle === 'alert' ? '#ff7b7b' : 'var(--adm-cyan)', border: item.badgeStyle === 'alert' ? '1px solid rgba(255,107,107,.18)' : '1px solid rgba(0,229,255,.18)', borderRadius: '999px', padding: '4px 8px', fontSize: '10px', fontWeight: 700 }}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,.05)', position: 'relative', flexShrink: 0, zIndex: 50 }}>
          {menuOpen && (
            <div
              onClick={e => e.stopPropagation()}
              style={{ position: 'absolute', bottom: 'calc(100% - 8px)', left: '16px', right: '16px', background: 'linear-gradient(180deg, #0d1e2a 0%, #071018 100%)', border: '1px solid rgba(0,229,255,.14)', borderRadius: '16px', overflow: 'visible', zIndex: 999, boxShadow: '0 -12px 40px rgba(0,0,0,.6)' }}
            >
              <div style={{ color: '#4c6374', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.14em', padding: '12px 14px 6px', fontWeight: 700 }}>Account</div>
              {adminMenuOptions.map((opt, i) => (
                <div
                  key={i}
                  onClick={e => { e.stopPropagation(); opt.action(); }}
                  style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', borderTop: i === adminMenuOptions.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none', cursor: 'pointer', transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = opt.danger ? 'rgba(255,107,107,.06)' : 'rgba(255,255,255,.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <span style={{ fontSize: '13px', fontWeight: 500, color: opt.danger ? '#ff6b6b' : 'var(--adm-text2)' }}>{opt.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* ADMIN CARD */}
          <div
            onClick={() => setMenuOpen(o => !o)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: menuOpen ? 'linear-gradient(135deg, rgba(0,229,255,.10), rgba(0,229,255,.03))' : 'rgba(255,255,255,.03)', borderRadius: '16px', border: menuOpen ? '1px solid rgba(0,229,255,.22)' : '1px solid rgba(255,255,255,.04)', cursor: 'pointer', transition: 'all .2s ease', userSelect: 'none' }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.05))', border: '1px solid rgba(0,229,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--adm-cyan)', fontSize: '13px', fontWeight: 700 }}>A</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'var(--adm-text2)', fontSize: '13px', fontWeight: 600 }}>Admin</div>
              <div style={{ color: 'var(--adm-text4)', fontSize: '10px', marginTop: '2px' }}>Super admin</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }} />
              <span style={{ color: '#4c6374', fontSize: '10px', display: 'inline-block', transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .2s' }}>▲</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}