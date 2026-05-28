import StatCard from '../../components/admin/StatCard';
import Link from 'next/link';

const recentUsers = [
  { initial:'N', color:'#00e5ff', bg:'rgba(0,229,255,.12)', name:'Nattaya K.', loc:'Bangkok · today',     langs:['EN','JP'], status:'Active',   statusColor:'#4ade80' },
  { initial:'S', color:'#a78bfa', bg:'rgba(167,139,250,.12)', name:'Somchai P.',  loc:'Chiang Mai · 2h ago', langs:['EN'],       status:'Active',   statusColor:'#4ade80' },
  { initial:'M', color:'#4ade80', bg:'rgba(74,222,128,.12)', name:'Malee T.',    loc:'Phuket · yesterday',  langs:['EN','KR'],   status:'Active',   statusColor:'#4ade80' },
  { initial:'W', color:'#ff6b6b', bg:'rgba(255,107,107,.12)', name:'Wiroj L.',    loc:'Bangkok · 3 days ago',langs:['JP'],       status:'Inactive', statusColor:'#ff6b6b' },
  { initial:'P', color:'#ffc800', bg:'rgba(255,200,0,.12)', name:'Praew S.',    loc:'Khon Kaen · 5h ago',  langs:['EN','FR'],   status:'Active',   statusColor:'#4ade80' },
];

const langColors = { EN:'#00e5ff', JP:'#a78bfa', KR:'#4ade80', FR:'#ffc800' };

export default function DashboardPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{marginBottom:'20px'}}>
        <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>Dashboard</div>
        <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>Wednesday, 27 May 2026</div>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'14px',marginBottom:'20px'}}>
        <StatCard icon="◯" num="1,284" label="Total users"         delta="+48 this week"     deltaUp color="#00e5ff" />
        <StatCard icon="◉" num="342"   label="Active today"        delta="+12% vs yesterday" deltaUp color="#4ade80" />
        <StatCard icon="☷" num="24,610" label="Words scanned today" delta="+5% vs last week"  deltaUp color="#a78bfa" />
        <StatCard icon="🤖" num="1,840" label="Gobot chats today"   delta="+22% this week"    deltaUp color="#ffc800" />
      </div>

      {/* Two col */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginBottom:'16px'}}>

        {/* Scan chart */}
        <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',padding:'18px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'14px'}}>
            <div style={{color:'#fff',fontSize:'13px',fontWeight:700}}>Scans per day (this week)</div>
            <div style={{color:'#00e5ff',fontSize:'11px'}}>Full report ›</div>
          </div>
          <div style={{display:'flex',alignItems:'flex-end',gap:'6px',height:'90px',marginBottom:'8px'}}>
            {[{d:'Mon',h:44,v:'3.1k'},{d:'Tue',h:60,v:'4.2k'},{d:'Wed',h:52,v:'3.6k'},{d:'Thu',h:75,v:'5.2k'},{d:'Fri',h:85,v:'5.9k'},{d:'Sat',h:100,v:'6.9k',highlight:true},{d:'Sun',h:30,v:'2.1k',dim:true}].map(b=>(
              <div key={b.d} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'100%',background:'#111d26',borderRadius:'4px 4px 0 0',position:'relative',height:'80px'}}>
                  <div style={{background:b.highlight?'#ffc800':b.dim?'#333':'#00e5ff',borderRadius:'4px 4px 0 0',width:'100%',position:'absolute',bottom:0,height:b.h+'%'}}/>
                  <div style={{position:'absolute',top:'-14px',width:'100%',textAlign:'center',color:b.highlight?'#ffc800':b.dim?'#333':'#00e5ff',fontSize:'8px'}}>{b.v}</div>
                </div>
                <div style={{color:'#3a5060',fontSize:'8px',marginTop:'4px'}}>{b.d}</div>
              </div>
            ))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px',marginTop:'10px',paddingTop:'10px',borderTop:'1px solid #0d2030'}}>
            {[{l:'Top language',v:'English',c:'#00e5ff'},{l:'Most scanned',v:'Book',c:'#ccc'},{l:'Avg words/user',v:'19.2',c:'#ccc'}].map(i=>(
              <div key={i.l} style={{background:'#0a1218',borderRadius:'8px',padding:'8px',textAlign:'center'}}>
                <div style={{color:'#3a5060',fontSize:'9px'}}>{i.l}</div>
                <div style={{color:i.c,fontSize:'12px',fontWeight:700,marginTop:'2px'}}>{i.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent users */}
        <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',padding:'18px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'14px'}}>
            <div style={{color:'#fff',fontSize:'13px',fontWeight:700}}>Recent users</div>
            <Link href="/admin/users" style={{color:'#00e5ff',fontSize:'11px',textDecoration:'none'}}>See all ›</Link>
          </div>
          {recentUsers.map(u=>(
            <div key={u.name} style={{display:'flex',alignItems:'center',gap:'10px',padding:'9px 0',borderBottom:'1px solid #0d2030'}}>
              <div style={{width:'28px',height:'28px',borderRadius:'50%',background:u.bg,color:u.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',fontWeight:700,flexShrink:0}}>{u.initial}</div>
              <div style={{flex:1}}>
                <div style={{color:'#ccc',fontSize:'12px',fontWeight:600}}>{u.name}</div>
                <div style={{color:'#3a5060',fontSize:'10px'}}>{u.loc}</div>
              </div>
              <div style={{display:'flex',gap:'4px'}}>
                {u.langs.map(l=>(
                  <span key={l} style={{background:`${langColors[l]}18`,color:langColors[l],border:`1px solid ${langColors[l]}33`,borderRadius:'4px',padding:'1px 6px',fontSize:'8px',fontWeight:600}}>{l}</span>
                ))}
              </div>
              <span style={{background:`${u.statusColor}18`,color:u.statusColor,border:`1px solid ${u.statusColor}33`,borderRadius:'10px',padding:'2px 8px',fontSize:'9px'}}>{u.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flagged banner */}
      <div style={{background:'rgba(255,76,76,.08)',border:'1px solid rgba(255,76,76,.2)',borderRadius:'12px',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{color:'#ff6b6b',fontSize:'13px',fontWeight:700}}>⚑ 3 items need your attention</div>
        <div style={{color:'#3a5060',fontSize:'11px'}}>Wrong detection · Translation error · 42 inactive users</div>
        <Link href="/admin/flagged" style={{background:'rgba(255,76,76,.15)',border:'1px solid rgba(255,76,76,.3)',borderRadius:'8px',padding:'6px 12px',color:'#ff6b6b',fontSize:'11px',textDecoration:'none'}}>View flagged ›</Link>
      </div>
    </div>
  );
}