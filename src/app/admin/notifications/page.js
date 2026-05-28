import StatCard from '../../components/admin/StatCard';

const recentPushes = [
  { dot:'#4ade80', title:'Daily reminder',        body:"Your review words are waiting!", meta:'Today · 1,284 users · 74% opened' },
  { dot:'#a78bfa', title:'New challenge available', body:"Today's daily challenge is live — can you score 10/10?", meta:'Yesterday · 1,284 users · 68% opened' },
  { dot:'#ffc800', title:'Re-engagement push',    body:'We miss you! You have new words waiting.', meta:'3 days ago · 42 inactive users · 31% opened' },
];

export default function NotificationsPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{marginBottom:'20px'}}>
        <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>Notifications</div>
        <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>Send and schedule push messages to users</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'14px',marginBottom:'20px'}}>
        <StatCard icon="◯" num="1,284" label="Subscribed users" color="#00e5ff" />
        <StatCard icon="%" num="74%" label="Open rate (last push)" delta="+6% vs avg" deltaUp color="#4ade80" />
        <StatCard icon="⊕" num="3" label="Scheduled pushes" color="#ffc800" />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>

        {/* Compose */}
        <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',padding:'18px'}}>
          <div style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'14px'}}>
            Compose push notification
          </div>

          <div style={{marginBottom:'10px'}}>
            <div style={{color:'#3a5060',fontSize:'10px',marginBottom:'4px'}}>
              Target audience
            </div>
            <input
              defaultValue="All users (1,284)"
              style={{
                background:'#0a1218',
                border:'1px solid #1a2d3a',
                borderRadius:'9px',
                padding:'9px 12px',
                color:'#ccc',
                fontSize:'12px',
                fontFamily:'inherit',
                width:'100%',
                outline:'none'
              }}
            />
          </div>

          <div style={{marginBottom:'10px'}}>
            <div style={{color:'#3a5060',fontSize:'10px',marginBottom:'4px'}}>
              Message title
            </div>
            <input
              defaultValue="Keep learning today!"
              style={{
                background:'#0a1218',
                border:'1px solid rgba(0,229,255,.25)',
                borderRadius:'9px',
                padding:'9px 12px',
                color:'#fff',
                fontSize:'12px',
                fontFamily:'inherit',
                width:'100%',
                outline:'none'
              }}
            />
          </div>

          <div style={{marginBottom:'10px'}}>
            <div style={{color:'#3a5060',fontSize:'10px',marginBottom:'4px'}}>
              Message body
            </div>
            <textarea
              defaultValue="You have new words ready for review today. Open the app and continue learning!"
              rows={3}
              style={{
                background:'#0a1218',
                border:'1px solid #1a2d3a',
                borderRadius:'9px',
                padding:'9px 12px',
                color:'#ccc',
                fontSize:'12px',
                fontFamily:'inherit',
                width:'100%',
                outline:'none',
                resize:'none'
              }}
            />
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'14px'}}>
            <div>
              <div style={{color:'#3a5060',fontSize:'10px',marginBottom:'4px'}}>
                Send time
              </div>
              <input
                defaultValue="Today, 8:00 PM"
                style={{
                  background:'#0a1218',
                  border:'1px solid #1a2d3a',
                  borderRadius:'9px',
                  padding:'9px 12px',
                  color:'#ccc',
                  fontSize:'12px',
                  fontFamily:'inherit',
                  width:'100%',
                  outline:'none'
                }}
              />
            </div>

            <div>
              <div style={{color:'#3a5060',fontSize:'10px',marginBottom:'4px'}}>
                Type
              </div>
              <input
                defaultValue="Learning reminder"
                style={{
                  background:'#0a1218',
                  border:'1px solid #1a2d3a',
                  borderRadius:'9px',
                  padding:'9px 12px',
                  color:'#ccc',
                  fontSize:'12px',
                  fontFamily:'inherit',
                  width:'100%',
                  outline:'none'
                }}
              />
            </div>
          </div>

          <div style={{display:'flex',gap:'8px'}}>
            <button
              style={{
                flex:1,
                background:'#00e5ff',
                border:'none',
                borderRadius:'9px',
                padding:'11px',
                color:'#042c3a',
                fontSize:'13px',
                fontWeight:700,
                cursor:'pointer',
                fontFamily:'inherit'
              }}
            >
              Schedule send
            </button>

            <button
              style={{
                background:'#0d1a22',
                border:'1px solid #1a2d3a',
                borderRadius:'9px',
                padding:'11px 16px',
                color:'#6b8a9a',
                fontSize:'12px',
                cursor:'pointer',
                fontFamily:'inherit'
              }}
            >
              Send now
            </button>
          </div>
        </div>

        {/* Recent pushes */}
        <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',padding:'18px'}}>
          <div style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'14px'}}>
            Recent pushes sent
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
            {recentPushes.map(p=>(
              <div
                key={p.title}
                style={{
                  background:'#0a1218',
                  border:'1px solid #0d2030',
                  borderRadius:'12px',
                  padding:'14px',
                  display:'flex',
                  gap:'12px'
                }}
              >
                <div
                  style={{
                    width:'10px',
                    height:'10px',
                    borderRadius:'50%',
                    background:p.dot,
                    marginTop:'3px',
                    flexShrink:0
                  }}
                />

                <div>
                  <div style={{color:'#ccc',fontSize:'12px',fontWeight:600}}>
                    {p.title}
                  </div>

                  <div style={{color:'#3a5060',fontSize:'11px',marginTop:'3px'}}>
                    {p.body}
                  </div>

                  <div style={{color:'#1e3040',fontSize:'10px',marginTop:'5px'}}>
                    {p.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}