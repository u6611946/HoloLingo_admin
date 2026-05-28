import Link from 'next/link';

const critical = [
  { title:'Wrong AR detection reported',    sub:'3 users flagged "bottle" labelled as "cup" — needs object model fix', action:'Fix in Word DB', href:'/admin/words' },
  { title:'Incorrect Thai translation',     sub:'"Window" mapped to หน้าตา — should be หน้าต่าง', action:'Fix word', href:'/admin/words' },
  { title:'Missing Japanese word',          sub:'"Refrigerator" has no JP translation — 8 users saw a blank label', action:'Add JP word', href:'/admin/words' },
];

const warnings = [
  { title:'42 users inactive 30+ days', sub:'Last session over 30 days ago — at risk of churn', action:'Send re-engage push', href:'/admin/notifications' },
  { title:'18 users with broken streaks', sub:'Streak hit 0 in the last 24h', action:'Send streak reminder', href:'/admin/notifications' },
];

const feedback = [
  { initial:'N', color:'#00e5ff', bg:'rgba(0,229,255,.12)', name:'Nattaya K.', msg:'"Pronunciation feature doesn\'t work for Japanese on my phone"' },
  { initial:'S', color:'#a78bfa', bg:'rgba(167,139,250,.12)', name:'Somchai P.', msg:'"Can you add Chinese and Spanish language support?"' },
];

export default function FlaggedPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{marginBottom:'20px'}}>
        <div style={{color:'#ff6b6b',fontSize:'18px',fontWeight:700}}>Flagged items</div>
        <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>3 critical issues · 42 inactive users need re-engagement</div>
      </div>

      {/* Critical */}
      <div style={{color:'#3a5060',fontSize:'10px',textTransform:'uppercase',letterSpacing:'.08em',marginBottom:'8px'}}>Critical — content errors</div>
      {critical.map(f=>(
        <div key={f.title} style={{background:'rgba(255,76,76,.06)',border:'1px solid rgba(255,76,76,.2)',borderRadius:'10px',padding:'12px 14px',marginBottom:'8px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'12px'}}>
          <div style={{flex:1}}>
            <div style={{color:'#ccc',fontSize:'12px',fontWeight:600}}>{f.title}</div>
            <div style={{color:'#3a5060',fontSize:'10px',marginTop:'2px'}}>{f.sub}</div>
          </div>
          <div style={{display:'flex',gap:'6px',flexShrink:0}}>
            <Link href={f.href} style={{background:'rgba(255,76,76,.15)',border:'1px solid rgba(255,76,76,.3)',borderRadius:'8px',padding:'5px 12px',color:'#ff6b6b',fontSize:'11px',textDecoration:'none'}}>{f.action}</Link>
            <button style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'8px',padding:'5px 12px',color:'#6b8a9a',fontSize:'11px',cursor:'pointer',fontFamily:'inherit'}}>Dismiss</button>
          </div>
        </div>
      ))}

      {/* Warnings */}
      <div style={{color:'#3a5060',fontSize:'10px',textTransform:'uppercase',letterSpacing:'.08em',margin:'18px 0 8px'}}>User engagement warnings</div>
      {warnings.map(w=>(
        <div key={w.title} style={{background:'rgba(255,200,0,.06)',border:'1px solid rgba(255,200,0,.2)',borderRadius:'10px',padding:'12px 14px',marginBottom:'8px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'12px'}}>
          <div style={{flex:1}}>
            <div style={{color:'#ffc800',fontSize:'12px',fontWeight:600}}>{w.title}</div>
            <div style={{color:'#3a5060',fontSize:'10px',marginTop:'2px'}}>{w.sub}</div>
          </div>
          <Link href={w.href} style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'8px',padding:'5px 12px',color:'#6b8a9a',fontSize:'11px',textDecoration:'none',flexShrink:0}}>{w.action} ›</Link>
        </div>
      ))}

      {/* Feedback */}
      <div style={{color:'#3a5060',fontSize:'10px',textTransform:'uppercase',letterSpacing:'.08em',margin:'18px 0 8px'}}>User feedback (unread)</div>
      <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',overflow:'hidden'}}>
        {feedback.map((f,i)=>(
          <div key={f.name} style={{display:'flex',alignItems:'center',gap:'10px',padding:'12px 16px',borderBottom:i<feedback.length-1?'1px solid #0d2030':'none'}}>
            <div style={{width:'26px',height:'26px',borderRadius:'50%',background:f.bg,color:f.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',fontWeight:700,flexShrink:0}}>{f.initial}</div>
            <div style={{flex:1}}>
              <div style={{color:'#ccc',fontSize:'12px',fontWeight:600}}>{f.name}</div>
              <div style={{color:'#6b8a9a',fontSize:'11px',marginTop:'3px'}}>{f.msg}</div>
            </div>
            <div style={{display:'flex',gap:'5px',flexShrink:0}}>
              <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'6px',padding:'3px 8px',color:'#6b8a9a',fontSize:'10px',cursor:'pointer'}}>Reply</button>
              <button style={{background:'#111d26',border:'1px solid rgba(255,76,76,.3)',borderRadius:'6px',padding:'3px 8px',color:'#ff6b6b',fontSize:'10px',cursor:'pointer'}}>Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}