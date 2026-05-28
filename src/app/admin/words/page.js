const words = [
  { en:'Book',         thai:'หนังสือ',  jp:'本 (ほん)',   phonetic:'/bʊk/',      scanned:4821, broken:false },
  { en:'Desk',         thai:'โต๊ะ',     jp:'机 (つくえ)', phonetic:'/dɛsk/',     scanned:3654, broken:false },
  { en:'Cup',          thai:'ถ้วย',     jp:'コップ',      phonetic:'/kʌp/',      scanned:2440, broken:false },
  { en:'Window',       thai:'หน้าตา ⚠', jp:'窓 (まど)',   phonetic:'/ˈwɪndoʊ/', scanned:1203, broken:'thai' },
  { en:'Bottle',       thai:'ขวด',      jp:'ボトル',      phonetic:'/ˈbɒtəl/',  scanned:986,  broken:false },
  { en:'Refrigerator', thai:'ตู้เย็น',  jp:'— missing ⚠',phonetic:'/rɪˈfrɪdʒ/',scanned:312,  broken:'jp' },
];
const cols = '1.5fr 1fr 1fr 0.8fr 0.7fr 0.9fr';

export default function WordsPage() {
  return (
    <div style={{padding:'24px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
        <div>
          <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>Word database</div>
          <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>3,842 words across 5 languages</div>
        </div>
        <div style={{display:'flex',gap:'8px'}}>
          <button style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'9px',padding:'8px 14px',color:'#6b8a9a',fontSize:'12px',cursor:'pointer',fontFamily:'inherit'}}>Filter ▾</button>
          <button style={{background:'#00e5ff',border:'none',borderRadius:'9px',padding:'8px 16px',color:'#042c3a',fontSize:'12px',fontWeight:700,cursor:'pointer',fontFamily:'inherit'}}>+ Add word</button>
        </div>
      </div>

      <div style={{background:'rgba(0,229,255,.08)',border:'1px solid rgba(0,229,255,.2)',borderRadius:'10px',padding:'10px 14px',marginBottom:'12px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{color:'#00e5ff',fontSize:'12px'}}>⚠ 2 words highlighted in red need fixing</span>
        <button style={{background:'#0d1a22',border:'1px solid #1a2d3a',borderRadius:'7px',padding:'5px 12px',color:'#00e5ff',fontSize:'11px',cursor:'pointer',fontFamily:'inherit'}}>Fix all ›</button>
      </div>

      <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',overflow:'hidden'}}>
        <div style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'10px 16px',background:'#0a1218'}}>
          {['Word (EN)','Thai','Japanese','Phonetic','Scanned','Actions'].map(h=>(
            <div key={h} style={{color:'#1e3040',fontSize:'9px',textTransform:'uppercase',letterSpacing:'.07em'}}>{h}</div>
          ))}
        </div>
        {words.map((w,i)=>(
          <div key={w.en} style={{display:'grid',gridTemplateColumns:cols,gap:'8px',padding:'11px 16px',borderTop:'1px solid #0d2030',background:w.broken?'rgba(255,76,76,.04)':i%2===1?'#0a1218':'transparent',alignItems:'center'}}>
            <div>
              <div style={{color:'#ccc',fontSize:'12px'}}>{w.en}</div>
              <div style={{color:'#3a5060',fontSize:'10px'}}>Noun</div>
            </div>
            <div style={{color:w.broken==='thai'?'#ff6b6b':'#ccc',fontSize:'12px'}}>{w.thai}</div>
            <div style={{color:w.broken==='jp'?'#ff6b6b':'#ccc',fontSize:'12px'}}>{w.jp}</div>
            <div style={{color:'#00e5ff',fontSize:'12px'}}>{w.phonetic}</div>
            <div style={{color:w.broken?'#ccc':'#00e5ff',fontSize:'12px'}}>{w.scanned.toLocaleString()}</div>
            <div style={{display:'flex',gap:'4px'}}>
              {w.broken
                ? <button style={{background:'#111d26',border:'1px solid rgba(255,76,76,.3)',borderRadius:'6px',padding:'3px 8px',color:'#ff6b6b',fontSize:'10px',cursor:'pointer'}}>{w.broken==='jp'?'Add JP':'Fix'}</button>
                : <button style={{background:'#111d26',border:'1px solid #1a2d3a',borderRadius:'6px',padding:'3px 8px',color:'#6b8a9a',fontSize:'10px',cursor:'pointer'}}>Edit</button>
              }
              <button style={{background:'#111d26',border:'1px solid rgba(255,76,76,.2)',borderRadius:'6px',padding:'3px 8px',color:'#ff6b6b',fontSize:'10px',cursor:'pointer'}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}