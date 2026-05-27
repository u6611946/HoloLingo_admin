export default function StatCard({
  icon,
  num,
  label,
  delta,
  deltaUp,
  color,
}) {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(17,29,38,.95), rgba(10,18,24,.95))',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '22px',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,.02), 0 10px 30px rgba(0,0,0,.35)',
        transition: '0.25s ease',
      }}
    >
      {/* glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `${color}12`,
          filter: 'blur(30px)',
        }}
      />

      {/* icon */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '16px',
          background: `${color}15`,
          border: `1px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: color,
          marginBottom: '18px',
          boxShadow: `0 0 25px ${color}20`,
        }}
      >
        {icon}
      </div>

      {/* number */}
      <div
        style={{
          color: '#ffffff',
          fontSize: '30px',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}
      >
        {num}
      </div>

      {/* label */}
      <div
        style={{
          color: 'var(--adm-text3)',
          fontSize: '13px',
          marginTop: '8px',
          fontWeight: 500,
        }}
      >
        {label}
      </div>

      {/* delta */}
      {delta && (
        <div
          style={{
            marginTop: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 10px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 700,
            background: deltaUp
              ? 'rgba(74,222,128,.10)'
              : 'rgba(255,107,107,.10)',
            border: deltaUp
              ? '1px solid rgba(74,222,128,.18)'
              : '1px solid rgba(255,107,107,.18)',
            color: deltaUp
              ? 'var(--adm-green)'
              : 'var(--adm-red)',
          }}
        >
          {deltaUp ? '▲' : '▼'} {delta}
        </div>
      )}
    </div>
  );
}