'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Flag,
  MessageSquare,
  BookOpen,
  Languages,
  Sparkles,
  Bell,
 Settings,
} from 'lucide-react';

const navItems = [
  {
    section: 'Overview',
    items: [
      {
        href: '/admin/dashboard',
        icon: LayoutDashboard,
        label: 'Dashboard',
      },
      {
        href: '/admin/analytics',
        icon: BarChart3,
        label: 'Analytics',
      },
    ],
  },

  {
    section: 'Users',
    items: [
      {
        href: '/admin/users',
        icon: Users,
        label: 'All Users',
        badge: '1,284',
        badgeStyle: 'count',
      },

      {
        href: '/admin/flagged',
        icon: Flag,
        label: 'Flagged',
        badge: '3',
        badgeStyle: 'alert',
      },

      {
        href: '/admin/feedback',
        icon: MessageSquare,
        label: 'Feedback',
      },
    ],
  },

  {
    section: 'Content',
    items: [
      {
        href: '/admin/words',
        icon: BookOpen,
        label: 'Word Database',
      },

      {
        href: '/admin/languages',
        icon: Languages,
        label: 'Languages',
      },

      {
        href: '/admin/challenges',
        icon: Sparkles,
        label: 'Daily Challenges',
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
        icon: Bell,
        label: 'Notifications',
      },

      {
        href: '/admin/settings',
        icon: Settings,
        label: 'Settings',
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: '260px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#071018',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* LOGO */}
      <div
        style={{
          padding: '22px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '14px',
              background:
                'linear-gradient(135deg, rgba(0,255,255,.18), rgba(0,180,255,.08))',
              border: '1px solid rgba(0,255,255,.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              boxShadow: '0 0 30px rgba(0,255,255,.12)',
            }}
          >
            🌐
          </div>

          <div>
            <div
              style={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              Hololingo
            </div>

            <div
              style={{
                color: '#7d93a6',
                fontSize: '11px',
                marginTop: '4px',
              }}
            >
              Admin Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '18px 14px',
        }}
      >
        {navItems.map((section) => (
          <div key={section.section} style={{ marginBottom: '26px' }}>
            <div
              style={{
                color: '#5d7386',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '0 12px',
                marginBottom: '10px',
              }}
            >
              {section.section}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              {section.items.map((item) => {
                const active = pathname.startsWith(item.href);

                const Icon =
                  typeof item.icon !== 'string' ? item.icon : null;

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
                        transition: 'all .2s ease',
                        background: active
                          ? 'linear-gradient(135deg, rgba(0,255,255,.14), rgba(0,140,255,.08))'
                          : 'transparent',
                        border: active
                          ? '1px solid rgba(0,255,255,.18)'
                          : '1px solid transparent',
                        boxShadow: active
                          ? '0 0 24px rgba(0,255,255,.08)'
                          : 'none',
                      }}
                    >
                      {/* ICON */}
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: active
                            ? 'rgba(0,255,255,.12)'
                            : 'rgba(255,255,255,.03)',
                          color: active ? '#67e8f9' : '#7c93a6',
                          flexShrink: 0,
                          overflow: 'hidden',
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
                          Icon && <Icon size={17} />
                        )}
                      </div>

                      {/* LABEL */}
                      <span
                        style={{
                          flex: 1,
                          color: active ? '#e6fbff' : '#a7b8c7',
                          fontSize: '13px',
                          fontWeight: active ? 600 : 500,
                        }}
                      >
                        {item.label}
                      </span>

                      {/* BADGE */}
                      {item.badge && (
                        <div
                          style={{
                            minWidth: '22px',
                            height: '22px',
                            padding: '0 8px',
                            borderRadius: '999px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: 700,
                            background:
                              item.badgeStyle === 'alert'
                                ? 'rgba(255,80,80,.16)'
                                : 'rgba(0,255,255,.10)',
                            color:
                              item.badgeStyle === 'alert'
                                ? '#ff7b7b'
                                : '#67e8f9',
                            border:
                              item.badgeStyle === 'alert'
                                ? '1px solid rgba(255,80,80,.25)'
                                : '1px solid rgba(0,255,255,.15)',
                          }}
                        >
                          {item.badge}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: '16px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,.03)',
            border: '1px solid rgba(255,255,255,.05)',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background:
                'linear-gradient(135deg, rgba(0,255,255,.18), rgba(0,140,255,.08))',
              border: '1px solid rgba(0,255,255,.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#67e8f9',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            A
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                color: '#eef9ff',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              Admin
            </div>

            <div
              style={{
                color: '#7c93a6',
                fontSize: '11px',
                marginTop: '2px',
              }}
            >
              Super Admin
            </div>
          </div>

          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 12px #22c55e',
            }}
          />
        </div>
      </div>
    </aside>
  );
}