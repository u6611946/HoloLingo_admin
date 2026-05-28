'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
      {
        href: '/admin/users',
        icon: '◯',
        label: 'All users',
        badge: '1,284',
        badgeStyle: 'count',
      },
      {
        href: '/admin/flagged',
        icon: '⚑',
        label: 'Flagged',
        badge: '3',
        badgeStyle: 'alert',
      },
      {
        href: '/admin/feedback',
        icon: '◈',
        label: 'Feedback',
      },
    ],
  },
  {
    section: 'Content',
    items: [
      {
        href: '/admin/words',
        icon: '☷',
        label: 'Word database',
      },
      {
        href: '/admin/languages',
        icon: '◉',
        label: 'Languages',
      },
      {
        href: '/admin/challenges',
        icon: '✦',
        label: 'Daily challenges',
      },
      {
        href: '/admin/gobot',
        icon: 'robot',
        label: 'Gobot AI',
      },
    ],
  },
  {
    section: 'System',
    items: [
      {
        href: '/admin/notifications',
        icon: '⊕',
        label: 'Notifications',
      },
      {
        href: '/admin/settings',
        icon: '⚙',
        label: 'Settings',
      },
    ],
  },
];

const adminMenuOptions = [
  { label: 'Edit profile', href: '/admin/profile/edit' },
  { label: 'Change password', href: '/admin/profile/password' },
  { label: 'My permissions', href: '/admin/profile/perms' },
  { label: 'Sign out', href: '/auth/logout', danger: true },
];

export default function Sidebar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
          }}
        />
      )}

      {/* SIDEBAR */}
      <aside
        style={{
          width: '260px',
          height: '100vh',
          position: 'sticky',
          top: 0,
          display: 'flex',
          flexDirection: 'column',
          background:
            'linear-gradient(180deg, #0b141c 0%, #071018 100%)',
          borderRight: '1px solid rgba(255,255,255,.05)',

          /* FIXED */
          overflow: 'visible',

          backdropFilter: 'blur(12px)',
        }}
      >
        {/* LOGO */}
        <div
          style={{
            padding: '24px 20px',
            borderBottom: '1px solid rgba(255,255,255,.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              background:
                'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.05))',
              border: '1px solid rgba(0,229,255,.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 24px rgba(0,229,255,.12)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/ Hololingo_logo.png"
              alt="Hololingo Logo"
              width={26}
              height={26}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div>
            <div
              style={{
                color: 'var(--adm-text)',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '-0.03em',
              }}
            >
              Hololingo
            </div>

            <div
              style={{
                color: 'var(--adm-text3)',
                fontSize: '11px',
                marginTop: '3px',
              }}
            >
              Admin panel
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div
          style={{
            flex: 1,
            padding: '18px 14px',

            /* FIXED */
            overflowY: 'auto',
          }}
        >
          {navItems.map((sec) => (
            <div key={sec.section} style={{ marginBottom: '28px' }}>
              <div
                style={{
                  color: '#4c6374',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '.14em',
                  padding: '0 10px',
                  marginBottom: '10px',
                  fontWeight: 700,
                }}
              >
                {sec.section}
              </div>

              {sec.items.map((item) => {
                const active = path.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '11px 12px',
                        borderRadius: '14px',
                        marginBottom: '5px',

                        background: active
                          ? 'linear-gradient(135deg, rgba(0,229,255,.12), rgba(0,229,255,.04))'
                          : 'transparent',

                        border: active
                          ? '1px solid rgba(0,229,255,.18)'
                          : '1px solid transparent',

                        transition: '.2s ease',
                        cursor: 'pointer',

                        boxShadow: active
                          ? '0 0 20px rgba(0,229,255,.08)'
                          : 'none',
                      }}
                    >
                      {/* ICON */}
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '12px',

                          background: active
                            ? 'rgba(0,229,255,.12)'
                            : 'rgba(255,255,255,.03)',

                          border: active
                            ? '1px solid rgba(0,229,255,.15)'
                            : '1px solid rgba(255,255,255,.03)',

                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          overflow: 'hidden',

                          color: active
                            ? 'var(--adm-cyan)'
                            : 'var(--adm-text3)',

                          fontSize: '16px',
                        }}
                      >
                        {item.icon === 'robot' ? (
                          <Image
                            src="/robot 1.png"
                            alt="Robot"
                            width={20}
                            height={20}
                            style={{ objectFit: 'contain' }}
                          />
                        ) : (
                          item.icon
                        )}
                      </div>

                      {/* LABEL */}
                      <span
                        style={{
                          flex: 1,
                          color: active
                            ? 'var(--adm-cyan)'
                            : 'var(--adm-text2)',
                          fontSize: '13px',
                          fontWeight: active ? 600 : 500,
                        }}
                      >
                        {item.label}
                      </span>

                      {/* BADGE */}
                      {item.badge && (
                        <span
                          style={{
                            background:
                              item.badgeStyle === 'alert'
                                ? 'rgba(255,107,107,.14)'
                                : 'rgba(0,229,255,.10)',

                            color:
                              item.badgeStyle === 'alert'
                                ? '#ff7b7b'
                                : 'var(--adm-cyan)',

                            border:
                              item.badgeStyle === 'alert'
                                ? '1px solid rgba(255,107,107,.18)'
                                : '1px solid rgba(0,229,255,.18)',

                            borderRadius: '999px',
                            padding: '4px 8px',
                            fontSize: '10px',
                            fontWeight: 700,
                          }}
                        >
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
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid rgba(255,255,255,.05)',
            position: 'relative',
          }}
        >
          {/* POPUP */}
          {menuOpen && (
            <div
              style={{
                position: 'absolute',
                bottom: 'calc(100% - 8px)',
                left: '16px',
                right: '16px',
                background:
                  'linear-gradient(180deg, #0d1e2a 0%, #071018 100%)',
                border: '1px solid rgba(0,229,255,.14)',
                borderRadius: '16px',
                overflow: 'hidden',
                zIndex: 50,
                boxShadow: '0 -12px 40px rgba(0,0,0,.6)',
              }}
            >
              <div
                style={{
                  color: '#4c6374',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '.14em',
                  padding: '12px 14px 6px',
                  fontWeight: 700,
                }}
              >
                Account
              </div>

              {adminMenuOptions.map((opt, i) => (
                <Link
                  key={i}
                  href={opt.href}
                  style={{ textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px 14px',

                      borderTop:
                        i === adminMenuOptions.length - 1
                          ? '1px solid rgba(255,255,255,.05)'
                          : 'none',

                      cursor: 'pointer',
                      transition: 'background .15s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        'rgba(255,255,255,.03)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'transparent')
                    }
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: opt.danger
                          ? '#ff6b6b'
                          : 'var(--adm-text2)',
                      }}
                    >
                      {opt.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ADMIN CARD */}
          <div
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px',

              background: menuOpen
                ? 'linear-gradient(135deg, rgba(0,229,255,.10), rgba(0,229,255,.03))'
                : 'rgba(255,255,255,.03)',

              borderRadius: '16px',

              border: menuOpen
                ? '1px solid rgba(0,229,255,.22)'
                : '1px solid rgba(255,255,255,.04)',

              cursor: 'pointer',
              transition: 'all .2s ease',
              userSelect: 'none',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.05))',

                border: '1px solid rgba(0,229,255,.18)',

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                color: 'var(--adm-cyan)',
                fontSize: '13px',
                fontWeight: 700,
              }}
            >
              A
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  color: 'var(--adm-text2)',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                Admin
              </div>

              <div
                style={{
                  color: 'var(--adm-text4)',
                  fontSize: '10px',
                  marginTop: '2px',
                }}
              >
                Super admin
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 10px #4ade80',
                }}
              />

              <span
                style={{
                  color: '#4c6374',
                  fontSize: '10px',
                  display: 'inline-block',
                  transform: menuOpen
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                  transition: 'transform .2s',
                }}
              >
                ▲
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}