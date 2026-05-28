const langs = [
  { code:'EN', label:'English (US)', flagBg:'#1a3a5a', flagColor:'#60a5fa', users:1054, words:1842, border:'rgba(0,229,255,.25)',  live:true  },
  { code:'JP', label:'Japanese',     flagBg:'#3a1a4a', flagColor:'#c4b5fd', users:526,  words:987,  border:'rgba(167,139,250,.25)',live:true  },
  { code:'KR', label:'Korean',       flagBg:'#1a3a1a', flagColor:'#86efac', users:231,  words:614,  border:'rgba(74,222,128,.25)', live:true  },
];
const userColors = ['#00e5ff','#a78bfa','#4ade80'];

export default function LanguagesPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
        <div>
          <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>Languages</div>
          <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>5 languages configured · 4 live</div>
        </div>
        <button style={{background:'#00e5ff',border:'none',borderRadius:'9px',padding:'8px 16px',color:'#042c3a',fontSize:'12px',fontWeight:700,cursor:'pointer',fontFamily:'inherit'}}>+ Add language</button>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
        {langs.map((l,i)=>(
          <div key={l.code} style={{background:'#0d1a22',border:`1px solid ${l.border}`,borderRadius:'14px',padding:'16px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <div style={{width:'34px',height:'24px',background:l.flagBg,borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',color:l.flagColor,fontSize:'11px',fontWeight:700}}>{l.code}</div>
                <div style={{color:'#fff',fontSize:'14px',fontWeight:700}}>{l.label}</div>
              </div>
              <span style={{background:'rgba(74,222,128,.12)',color:'#4ade80',border:'1px solid rgba(74,222,128,.25)',borderRadius:'10px',padding:'2px 9px',fontSize:'9px'}}>Live</span>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'10px'}}>
              <div style={{background:'#0a1218',borderRadius:'8px',padding:'8px'}}>
                <div style={{color:'#3a5060',fontSize:'9px'}}>Users studying</div>
                <div style={{color:userColors[i],fontSize:'13px',fontWeight:700,marginTop:'3px'}}>{l.users.toLocaleString()}</div>
              </div>
              <div style={{background:'#0a1218',borderRadius:'8px',padding:'8px'}}>
                <div style={{color:'#3a5060',fontSize:'9px'}}>Words in DB</div>
                <div style={{color:'#ccc',fontSize:'13px',fontWeight:700,marginTop:'3px'}}>{l.words.toLocaleString()}</div>
              </div>
            </div>
            <div style={{display:'flex',gap:'6px'}}>
              <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'7px',padding:'5px 12px',color:'#6b8a9a',fontSize:'11px',cursor:'pointer',fontFamily:'inherit'}}>Edit words</button>
              <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'7px',padding:'5px 12px',color:'#6b8a9a',fontSize:'11px',cursor:'pointer',fontFamily:'inherit'}}>View stats</button>
              <button style={{background:'rgba(255,76,76,.1)',border:'1px solid rgba(255,76,76,.25)',borderRadius:'7px',padding:'5px 12px',color:'#ff6b6b',fontSize:'11px',cursor:'pointer',fontFamily:'inherit'}}>Disable</button>
            </div>
          </div>
        ))}

        {/* Coming soon */}
        <div style={{background:'#0d1a22',border:'1px dashed #1a2d3a',borderRadius:'14px',padding:'16px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <div style={{width:'34px',height:'24px',background:'#1e2130',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'center',color:'#555',fontSize:'11px',fontWeight:700}}>ZH</div>
              <div style={{color:'#6b8a9a',fontSize:'14px',fontWeight:700}}>Chinese</div>
            </div>
            <span style={{background:'rgba(255,200,0,.12)',color:'#ffc800',border:'1px solid rgba(255,200,0,.25)',borderRadius:'10px',padding:'2px 9px',fontSize:'9px'}}>Coming soon</span>
          </div>
          <div style={{color:'#3a5060',fontSize:'11px',marginBottom:'8px'}}>142 words added · need 1,000 to launch</div>
          <div style={{height:'5px',background:'#111d26',borderRadius:'3px',overflow:'hidden',marginBottom:'6px'}}>
            <div style={{width:'14%',height:'100%',background:'#ffc800',borderRadius:'3px'}}/>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
            <span style={{color:'#3a5060',fontSize:'10px'}}>14% complete</span>
            <span style={{color:'#ffc800',fontSize:'10px'}}>858 more needed</span>
          </div>
          <div style={{display:'flex',gap:'6px'}}>
            <button style={{background:'#111d26',border:'1px solid rgba(255,200,0,.3)',borderRadius:'7px',padding:'5px 12px',color:'#ffc800',fontSize:'11px',cursor:'pointer',fontFamily:'inherit'}}>Add words</button>
            <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'7px',padding:'5px 12px',color:'#6b8a9a',fontSize:'11px',cursor:'pointer',fontFamily:'inherit'}}>Launch now</button>
          </div>
        </div>
      </div>
    </div>
  );
}