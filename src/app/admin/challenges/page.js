import StatCard from '../../components/admin/StatCard';

const challenges = [
  { date:'Today',  title:'Household objects quiz', words:'Book, Desk, Cup, Chair, Window', langs:['EN'],       status:'Live',      statusColor:'#4ade80' },
  { date:'Wed 14', title:'Kitchen words',           words:'Bottle, Spoon, Plate, Cup, Fork',langs:['EN','JP'], status:'Scheduled', statusColor:'#ffc800' },
  { date:'Thu 15', title:'Office vocabulary',       words:'Desk, Chair, Pen, Computer, Door',langs:['EN'],     status:'Scheduled', statusColor:'#ffc800' },
  { date:'Fri 16', title:'Nature objects',           words:'Tree, Stone, Leaf, Flower, Sky', langs:['JP'],      status:'Draft',     statusColor:'#555'    },
];

const langColors = { EN:'#00e5ff', JP:'#a78bfa', KR:'#4ade80', FR:'#ffc800' };
const cols = '0.7fr 1.8fr 1.5fr 0.9fr 0.9fr 0.8fr';

export default function ChallengesPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{marginBottom:'20px'}}>
        <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>Daily challenges</div>
        <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>Schedule and manage challenges for users</div>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'14px',marginBottom:'20px'}}>
        <StatCard icon="✓" num="41%"  label="Completion rate today" delta="+6% vs yesterday" deltaUp color="#00e5ff" />
        <StatCard icon="◉" num="342"  label="Attempts today"        delta="+48 today"         deltaUp color="#4ade80" />
        <StatCard icon="★" num="7.2"  label="Avg score / 10"        color="#ffc800" />
      </div>

      {/* Table */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
        <div style={{color:'#fff',fontSize:'13px',fontWeight:700}}>Upcoming challenges</div>
        <div style={{display:'flex',gap:'8px'}}>
          <button style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'9px',padding:'8px 14px',color:'#6b8a9a',fontSize:'12px',cursor:'pointer',fontFamily:'inherit'}}>This week</button>
          <button style={{background:'#00e5ff',border:'none',borderRadius:'9px',padding:'8px 16px',color:'#042c3a',fontSize:'12px',fontWeight:700,cursor:'pointer',fontFamily:'inherit'}}>+ New challenge</button>
        </div>
      </div>

      <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',overflow:'hidden',marginBottom:'20px'}}>
        <div style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'10px 16px',background:'#0a1218'}}>
          {['Date','Title','Words','Language','Status','Actions'].map(h=>(
            <div key={h} style={{color:'#1e3040',fontSize:'9px',textTransform:'uppercase',letterSpacing:'.07em'}}>{h}</div>
          ))}
        </div>
        {challenges.map((c,i)=>(
          <div key={c.title} style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'11px 16px',borderTop:'1px solid #0d2030',background:i%2===1?'#0a1218':'transparent',alignItems:'center'}}>
            <div style={{color:c.date==='Today'?'#00e5ff':'#ccc',fontSize:'12px'}}>{c.date}</div>
            <div style={{color:'#ccc',fontSize:'12px'}}>{c.title}</div>
            <div style={{color:'#3a5060',fontSize:'10px'}}>{c.words}</div>
            <div style={{display:'flex',gap:'4px',flexWrap:'wrap'}}>
              {c.langs.map(l=>(
                <span key={l} style={{background:`${langColors[l]}14`,color:langColors[l],border:`1px solid ${langColors[l]}2a`,borderRadius:'4px',padding:'1px 5px',fontSize:'8px',fontWeight:600}}>{l}</span>
              ))}
            </div>
            <div>
              <span style={{background:`${c.statusColor}14`,color:c.statusColor,border:`1px solid ${c.statusColor}2a`,borderRadius:'10px',padding:'2px 8px',fontSize:'9px'}}>{c.status}</span>
            </div>
            <div style={{display:'flex',gap:'4px'}}>
              <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'6px',padding:'3px 8px',color:'#6b8a9a',fontSize:'10px',cursor:'pointer'}}>Edit</button>
              <button style={{background:'#111d26',border:'1px solid rgba(255,76,76,.25)',borderRadius:'6px',padding:'3px 8px',color:'#ff6b6b',fontSize:'10px',cursor:'pointer'}}>{c.status==='Live'?'End':'Delete'}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick create */}
      <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',padding:'18px'}}>
        <div style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'14px'}}>Quick create challenge</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginBottom:'10px'}}>
          {[{label:'Title',placeholder:'e.g. Weekend special quiz'},{label:'Date',placeholder:'e.g. Saturday 17 May'},{label:'Language',placeholder:'e.g. English + Japanese'},{label:'Word count',placeholder:'e.g. 5 words'}].map(f=>(
            <div key={f.label}>
              <div style={{color:'#3a5060',fontSize:'10px',marginBottom:'4px'}}>{f.label}</div>
              <input placeholder={f.placeholder} style={{background:'#0a1218',border:'1px solid #1a2d3a',borderRadius:'9px',padding:'9px 12px',color:'#ccc',fontSize:'12px',fontFamily:'inherit',width:'100%',outline:'none'}}/>
            </div>
          ))}
        </div>
        <button style={{background:'#00e5ff',border:'none',borderRadius:'9px',padding:'10px 20px',color:'#042c3a',fontSize:'13px',fontWeight:700,cursor:'pointer',fontFamily:'inherit'}}>Schedule challenge</button>
      </div>
    </div>
  );
}