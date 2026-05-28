const msgs = [
  { initial:'N', color:'#00e5ff', bg:'rgba(0,229,255,.12)',   name:'Nattaya K.', msg:'"Pronunciation feature doesn\'t work for Japanese on my phone"', date:'Today' },
  { initial:'S', color:'#a78bfa', bg:'rgba(167,139,250,.12)', name:'Somchai P.', msg:'"Can you add Chinese and Spanish language support?"',             date:'Yesterday' },
  { initial:'M', color:'#4ade80', bg:'rgba(74,222,128,.12)',  name:'Malee T.',   msg:'"Gobot AI is so helpful! Love the save word from chat feature"',   date:'2 days ago' },
  { initial:'P', color:'#ffc800', bg:'rgba(255,200,0,.12)',   name:'Praew S.',   msg:'"The AR scanner sometimes misidentifies objects in low light"',     date:'3 days ago' },
];
const cols = '1.5fr 2.5fr 1fr 1fr';

export default function FeedbackPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
        <div>
          <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>Feedback</div>
          <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>12 unread · 48 total this month</div>
        </div>
        <button style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'9px',padding:'8px 14px',color:'#6b8a9a',fontSize:'12px',cursor:'pointer',fontFamily:'inherit'}}>Mark all read</button>
      </div>

      <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',overflow:'hidden'}}>
        <div style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'10px 16px',background:'#0a1218'}}>
          {['User','Message','Date','Actions'].map(h=>(
            <div key={h} style={{color:'#1e3040',fontSize:'9px',textTransform:'uppercase',letterSpacing:'.07em'}}>{h}</div>
          ))}
        </div>
        {msgs.map((m,i)=>(
          <div key={m.name} style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'12px 16px',borderTop:'1px solid #0d2030',alignItems:'center',background:i%2===1?'#0a1218':'transparent'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{width:'26px',height:'26px',borderRadius:'50%',background:m.bg,color:m.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',fontWeight:700,flexShrink:0}}>{m.initial}</div>
              <div style={{color:'#ccc',fontSize:'12px'}}>{m.name}</div>
            </div>
            <div style={{color:'#ccc',fontSize:'12px'}}>{m.msg}</div>
            <div style={{color:'#ccc',fontSize:'12px'}}>{m.date}</div>
            <div style={{display:'flex',gap:'4px'}}>
              <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'6px',padding:'3px 8px',color:'#6b8a9a',fontSize:'10px',cursor:'pointer'}}>Reply</button>
              <button style={{background:'#111d26',border:'1px solid rgba(255,76,76,.3)',borderRadius:'6px',padding:'3px 8px',color:'#ff6b6b',fontSize:'10px',cursor:'pointer'}}>Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}