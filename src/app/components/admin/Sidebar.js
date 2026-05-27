'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    section: 'Overview',
    items: [
      {
        href: '/admin/dashboard',
        icon: '⊞',
        label: 'Dashboard',
      },
      {
        href: '/admin/analytics',
        icon: '◷',
        label: 'Analytics',
      },
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

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside
      style={{
        width: '260px',
        background:
          'linear-gradient(180deg, #0b141c 0%, #091018 100%)',

        borderRight: '1px solid rgba(255,255,255,.05)',

        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,

        position: 'sticky',
        top: 0,

        height: '100vh',

        overflowY: 'auto',

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
              'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.06))',

            border: '1px solid rgba(0,229,255,.2)',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            fontSize: '18px',

            boxShadow: '0 0 24px rgba(0,229,255,.12)',
          }}
        >
          🌐
        </div>

        <div>
          <div
            style={{
              color: 'var(--adm-text)',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
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
          padding: '18px 14px',
          flex: 1,
        }}
      >
        {navItems.map((sec) => (
          <div
            key={sec.section}
            style={{
              marginBottom: '26px',
            }}
          >
            {/* SECTION */}
            <div
              style={{
                color: '#486171',

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

            {/* ITEMS */}
            {sec.items.map((item) => {
              const active = path.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                  }}
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

                      transition: '0.2s ease',

                      cursor: 'pointer',

                      boxShadow: active
                        ? '0 0 22px rgba(0,229,255,.08)'
                        : 'none',
                    }}
                  >
                    {/* ICON */}
                    <div
                      style={{
                        width: '36px',
                        height: '36px',

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
                          width={18}
                          height={18}
                          style={{
                            objectFit: 'contain',
                          }}
                        />
                      ) : (
                        item.icon
                      )}
                    </div>

                    {/* LABEL */}
                    <span
                      style={{
                        color: active
                          ? 'var(--adm-cyan)'
                          : 'var(--adm-text2)',

                        fontSize: '13px',

                        fontWeight: active ? 600 : 500,

                        flex: 1,
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
                              ? 'rgba(255,107,107,.15)'
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
          marginTop: 'auto',

          padding: '16px',

          borderTop: '1px solid rgba(255,255,255,.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            padding: '12px',

            background: 'rgba(255,255,255,.03)',

            borderRadius: '16px',

            border: '1px solid rgba(255,255,255,.04)',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',

              borderRadius: '50%',

              background:
                'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.06))',

              border: '1px solid rgba(0,229,255,.2)',

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
              width: '8px',
              height: '8px',

              borderRadius: '50%',

              background: '#4ade80',

              boxShadow: '0 0 10px #4ade80',
            }}
          />
        </div>
      </div>
    </aside>
  );
}