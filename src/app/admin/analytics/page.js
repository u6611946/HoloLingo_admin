import StatCard from '../../components/admin/StatCard';

export default function AnalyticsPage() {
  const langBreakdown = [
    { code:'EN', pct:82, color:'#00e5ff' },
    { code:'JP', pct:41, color:'#a78bfa' },
    { code:'KR', pct:18, color:'#4ade80' },
    { code:'MM', pct:12, color:'#ff6b6b' }, // Burmese
    { code:'FR', pct:9,  color:'#ffc800' },
    { code:'ZH', pct:6,  color:'#555' },
  ];

  const features = [
    { label:'AR Scan used',    pct:94, color:'#00e5ff' },
    { label:'Flashcards',      pct:67, color:'#a78bfa' },
    { label:'Pronunciation',   pct:55, color:'#4ade80' },
    { label:'Daily challenge', pct:41, color:'#ffc800' },
    { label:'Gobot AI',        pct:32, color:'#ff6b6b' },
  ];

  const chartData = [
    { w:'W1', h:55,  v:'210' },
    { w:'W2', h:70,  v:'268' },
    { w:'W3', h:88,  v:'336' },
    { w:'W4', h:100, v:'384' },
  ];

  return (
    <div style={{ padding:'24px' }}>

      {/* HEADER */}
      <div style={{ marginBottom:'20px' }}>
        <div
          style={{
            color:'#fff',
            fontSize:'18px',
            fontWeight:700
          }}
        >
          Analytics
        </div>

        <div
          style={{
            color:'#3a5060',
            fontSize:'11px',
            marginTop:'2px'
          }}
        >
          Last 30 days
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          display:'grid',
          gridTemplateColumns:'repeat(4,minmax(0,1fr))',
          gap:'14px',
          marginBottom:'20px'
        }}
      >
        <StatCard
          icon="%"
          num="73%"
          label="Daily retention"
          delta="+4% this month"
          deltaUp
          color="#00e5ff"
        />

        <StatCard
          icon="↺"
          num="3.2"
          label="Sessions/user/week"
          delta="+0.3 vs last month"
          deltaUp
          color="#4ade80"
        />

        <StatCard
          icon="✓"
          num="68%"
          label="Quiz completion"
          delta="-2% vs last month"
          deltaUp={false}
          color="#a78bfa"
        />

        <StatCard
          icon="⚑"
          num="41%"
          label="Dual-lang users"
          delta="+8% this month"
          deltaUp
          color="#ffc800"
        />
      </div>

      {/* TOP GRID */}
      <div
        style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:'16px',
          marginBottom:'16px'
        }}
      >

        {/* NEW USERS CHART */}
        <div
          style={{
            background:'#071821',
            border:'1px solid #0d2030',
            borderRadius:'16px',
            padding:'20px',
            minHeight:'440px',
            boxShadow:'0 0 0 1px rgba(0,229,255,.02) inset',
          }}
        >
          <div
            style={{
              color:'#fff',
              fontSize:'13px',
              fontWeight:700,
              marginBottom:'24px'
            }}
          >
            New users per week (4 weeks)
          </div>

          <div
            style={{
              display:'flex',
              alignItems:'flex-end',
              gap:'22px',
              height:'300px',
              marginTop:'20px'
            }}
          >
            {chartData.map((b) => (
              <div
                key={b.w}
                style={{
                  flex:1,
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center'
                }}
              >
                <div
                  style={{
                    marginBottom:'10px',
                    fontSize:'14px',
                    fontWeight:700,
                    color:b.h === 100
                      ? '#00e5ff'
                      : '#b388ff'
                  }}
                >
                  {b.v}
                </div>

                <div
                  style={{
                    width:'100%',
                    height:'160px',
                    background:'#0b1b25',
                    borderRadius:'10px 10px 0 0',
                    position:'relative',
                    overflow:'hidden'
                  }}
                >
                  <div
                    style={{
                      position:'absolute',
                      bottom:0,
                      left:0,
                      width:'100%',
                      height:b.h + '%',
                      background:
                        b.h === 100
                          ? '#22c7dc'
                          : '#9c7be8',
                      borderRadius:'10px 10px 0 0',
                      transition:'0.3s ease'
                    }}
                  />
                </div>

                <div
                  style={{
                    marginTop:'12px',
                    color:'#355063',
                    fontSize:'12px'
                  }}
                >
                  {b.w}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGE BREAKDOWN */}
        <div
          style={{
            background:'#0d1a22',
            border:'1px solid #0d2030',
            borderRadius:'14px',
            padding:'18px'
          }}
        >
          <div
            style={{
              color:'#fff',
              fontSize:'13px',
              fontWeight:700,
              marginBottom:'14px'
            }}
          >
            Language breakdown
          </div>

          <div
            style={{
              display:'flex',
              flexDirection:'column',
              gap:'10px'
            }}
          >
            {langBreakdown.map(l => (
              <div
                key={l.code}
                style={{
                  display:'flex',
                  alignItems:'center',
                  gap:'10px'
                }}
              >
                <span
                  style={{
                    color:l.color,
                    fontSize:'11px',
                    minWidth:'24px'
                  }}
                >
                  {l.code}
                </span>

                <div
                  style={{
                    flex:1,
                    height:'5px',
                    background:'#111d26',
                    borderRadius:'3px',
                    overflow:'hidden'
                  }}
                >
                  <div
                    style={{
                      width:l.pct + '%',
                      height:'100%',
                      background:l.color,
                      borderRadius:'3px'
                    }}
                  />
                </div>

                <span
                  style={{
                    color:'#ccc',
                    fontSize:'11px',
                    minWidth:'32px',
                    textAlign:'right'
                  }}
                >
                  {l.pct}%
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display:'grid',
              gridTemplateColumns:'repeat(3,1fr)',
              gap:'8px',
              marginTop:'14px',
              paddingTop:'10px',
              borderTop:'1px solid #0d2030'
            }}
          >
            {[
              {
                l:'Most studied',
                v:'English',
                c:'#00e5ff'
              },
              {
                l:'Fastest growing',
                v:'Burmese',
                c:'#ff6b6b'
              },
              {
                l:'Dual-lang',
                v:'526 users',
                c:'#ffc800'
              }
            ].map(i => (
              <div
                key={i.l}
                style={{
                  background:'#0a1218',
                  borderRadius:'8px',
                  padding:'8px',
                  textAlign:'center'
                }}
              >
                <div
                  style={{
                    color:'#3a5060',
                    fontSize:'9px'
                  }}
                >
                  {i.l}
                </div>

                <div
                  style={{
                    color:i.c,
                    fontSize:'11px',
                    fontWeight:700,
                    marginTop:'2px'
                  }}
                >
                  {i.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE USAGE */}
      <div
        style={{
          background:'#0d1a22',
          border:'1px solid #0d2030',
          borderRadius:'14px',
          padding:'18px'
        }}
      >
        <div
          style={{
            color:'#fff',
            fontSize:'13px',
            fontWeight:700,
            marginBottom:'14px'
          }}
        >
          Feature usage
        </div>

        <div
          style={{
            display:'grid',
            gridTemplateColumns:'repeat(5,minmax(0,1fr))',
            gap:'10px'
          }}
        >
          {features.map(f => (
            <div
              key={f.label}
              style={{
                background:'#0a1218',
                borderRadius:'10px',
                padding:'12px',
                textAlign:'center'
              }}
            >
              <div
                style={{
                  color:f.color,
                  fontSize:'18px',
                  fontWeight:700
                }}
              >
                {f.pct}%
              </div>

              <div
                style={{
                  color:'#3a5060',
                  fontSize:'10px',
                  marginTop:'4px'
                }}
              >
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}