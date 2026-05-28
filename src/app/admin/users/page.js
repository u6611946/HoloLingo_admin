const users = [
  { initial:'N', color:'#00e5ff', bg:'rgba(0,229,255,.12)',   name:'Nattaya K.', email:'nattaya@email.com', langs:['EN','JP'], words:48,  streak:'7 days',  lastActive:'Just now',  lastColor:'#4ade80',  canSuspend:false },
  { initial:'S', color:'#a78bfa', bg:'rgba(167,139,250,.12)', name:'Somchai P.', email:'somchai@email.com', langs:['EN'],      words:31,  streak:'4 days',  lastActive:'2h ago',    lastColor:'#ccc',     canSuspend:false },
  { initial:'M', color:'#4ade80', bg:'rgba(74,222,128,.12)',  name:'Malee T.',   email:'malee@email.com',   langs:['EN','KR'], words:67,  streak:'12 days', lastActive:'Yesterday', lastColor:'#ccc',     canSuspend:false },
  { initial:'W', color:'#ff6b6b', bg:'rgba(255,107,107,.12)', name:'Wiroj L.',   email:'wiroj@email.com',   langs:['JP'],      words:12,  streak:'0',       lastActive:'3 days ago',lastColor:'#ff6b6b',  canSuspend:true  },
  { initial:'P', color:'#ffc800', bg:'rgba(255,200,0,.12)',   name:'Praew S.',   email:'praew@email.com',   langs:['EN','FR'], words:29,  streak:'2 days',  lastActive:'5h ago',    lastColor:'#ccc',     canSuspend:false },
];

const langColors = { EN:'#00e5ff', JP:'#a78bfa', KR:'#4ade80', FR:'#ffc800' };
const cols = '2fr 1.2fr 0.8fr 0.8fr 0.8fr 1fr';

export default function UsersPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{marginBottom:'20px'}}>
        <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>All users</div>
        <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>1,284 total · 342 active today</div>
      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'16px'}}>
        <div style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'10px',padding:'7px 12px',display:'flex',alignItems:'center',gap:'8px'}}>
          <span style={{color:'#3a5060'}}>⌕</span>
          <input placeholder="Search name or email…" style={{background:'transparent',border:'none',outline:'none',color:'#ccc',fontSize:'12px',width:'200px',fontFamily:'inherit'}}/>
        </div>
        <div style={{display:'flex',gap:'8px'}}>
          <button style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'9px',padding:'8px 14px',color:'#6b8a9a',fontSize:'12px',cursor:'pointer',fontFamily:'inherit'}}>Filter ▾</button>
          <button style={{background:'#00e5ff',border:'none',borderRadius:'9px',padding:'8px 16px',color:'#042c3a',fontSize:'12px',fontWeight:700,cursor:'pointer',fontFamily:'inherit'}}>+ Add user</button>
        </div>
      </div>

      <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',overflow:'hidden'}}>
        {/* Head */}
        <div style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'10px 16px',background:'#0a1218'}}>
          {['User','Languages','Words','Streak','Last active','Actions'].map(h=>(
            <div key={h} style={{color:'#1e3040',fontSize:'9px',textTransform:'uppercase',letterSpacing:'.07em'}}>{h}</div>
          ))}
        </div>
        {/* Rows */}
        {users.map((u,i)=>(
          <div key={u.name} style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'11px 16px',borderTop:'1px solid #0d2030',background:i%2===1?'#0a1218':'transparent',alignItems:'center'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{width:'26px',height:'26px',borderRadius:'50%',background:u.bg,color:u.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',fontWeight:700,flexShrink:0}}>{u.initial}</div>
              <div>
                <div style={{color:'#ccc',fontSize:'12px'}}>{u.name}</div>
                <div style={{color:'#3a5060',fontSize:'10px',marginTop:'1px'}}>{u.email}</div>
              </div>
            </div>
            <div style={{display:'flex',gap:'4px',flexWrap:'wrap'}}>
              {u.langs.map(l=>(
                <span key={l} style={{background:`${langColors[l]}14`,color:langColors[l],border:`1px solid ${langColors[l]}2a`,borderRadius:'4px',padding:'1px 5px',fontSize:'8px',fontWeight:600}}>{l}</span>
              ))}
            </div>
            <div style={{color:'#ccc',fontSize:'12px'}}>{u.words}</div>
            <div style={{color:'#ffc800',fontSize:'12px'}}>{u.streak}</div>
            <div style={{color:u.lastColor,fontSize:'12px'}}>{u.lastActive}</div>
            <div style={{display:'flex',gap:'4px'}}>
              <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'6px',padding:'3px 8px',color:'#6b8a9a',fontSize:'10px',cursor:'pointer'}}>View</button>
              {u.canSuspend
                ? <button style={{background:'#111d26',border:'1px solid rgba(255,76,76,.3)',borderRadius:'6px',padding:'3px 8px',color:'#ff6b6b',fontSize:'10px',cursor:'pointer'}}>Suspend</button>
                : <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'6px',padding:'3px 8px',color:'#6b8a9a',fontSize:'10px',cursor:'pointer'}}>Edit</button>
              }
            </div>
          </div>
        ))}
        {/* Pager */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 16px',borderTop:'1px solid #0d2030'}}>
          <span style={{color:'#3a5060',fontSize:'11px'}}>Showing 5 of 1,284 users</span>
          <div style={{display:'flex',gap:'4px'}}>
            {['‹ Prev','1','2','3','Next ›'].map((p,i)=>(
              <button key={p} style={{background:p==='1'?'rgba(0,229,255,.15)':'#111d26',border:`1px solid ${p==='1'?'rgba(0,229,255,.3)':'#1a2d3a'}`,borderRadius:'6px',padding:'3px 8px',color:p==='1'?'#00e5ff':'#6b8a9a',fontSize:'10px',cursor:'pointer'}}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}