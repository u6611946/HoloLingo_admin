import Image from 'next/image';
import StatCard from '../../components/admin/StatCard';

export default function DashboardPage() {
  return (
    <div
      style={{
        padding: '28px',
      }}
    >
      {/* TOPBAR */}
      <div
        style={{
          marginBottom: '26px',
        }}
      >
        <div
          style={{
            color: 'var(--adm-text)',
            fontSize: '30px',
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          Dashboard
        </div>

        <div
          style={{
            color: 'var(--adm-text3)',
            fontSize: '13px',
            marginTop: '6px',
          }}
        >
          Wednesday, 27 May 2026
        </div>
      </div>

      {/* STAT GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
          gap: '18px',
          marginBottom: '24px',
        }}
      >
        <StatCard
          icon="◯"
          num="1,284"
          label="Total users"
          delta="+48 this week"
          deltaUp
          color="var(--adm-cyan)"
        />

        <StatCard
          icon="◉"
          num="342"
          label="Active today"
          delta="+12% vs yesterday"
          deltaUp
          color="var(--adm-green)"
        />

        <StatCard
          icon="☷"
          num="24,610"
          label="Words scanned today"
          delta="+5% vs last week"
          deltaUp
          color="var(--adm-purple)"
        />

        <StatCard
          icon={
            <Image
              src="/robot 1.png"
              alt="Robot"
              width={22}
              height={22}
              style={{
                objectFit: 'contain',
              }}
            />
          }
          num="1,840"
          label="Gobot chats today"
          delta="+22% this week"
          deltaUp
          color="var(--adm-yellow)"
        />
      </div>

      {/* ALERT */}
      <div
        style={{
          background:
            'linear-gradient(135deg, rgba(255,76,76,.10), rgba(255,76,76,.04))',

          border: '1px solid rgba(255,76,76,.18)',

          borderRadius: '18px',

          padding: '18px 20px',

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          gap: '20px',

          boxShadow: '0 10px 30px rgba(0,0,0,.2)',
        }}
      >
        <div>
          <div
            style={{
              color: 'var(--adm-red)',
              fontSize: '15px',
              fontWeight: 700,
              marginBottom: '6px',
            }}
          >
            ⚑ 3 items need your attention
          </div>

          <div
            style={{
              color: 'var(--adm-text3)',
              fontSize: '13px',
            }}
          >
            Wrong detection · Translation error · 42 inactive users
          </div>
        </div>

        <a
          href="/admin/flagged"
          style={{
            background: 'rgba(255,76,76,.12)',

            border: '1px solid rgba(255,76,76,.22)',

            borderRadius: '12px',

            padding: '10px 16px',

            color: 'var(--adm-red)',

            fontSize: '12px',

            fontWeight: 700,

            textDecoration: 'none',

            whiteSpace: 'nowrap',

            transition: '.2s ease',
          }}
        >
          View flagged →
        </a>
      </div>
    </div>
  );
}