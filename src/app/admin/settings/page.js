'use client';
import { useState } from 'react';

function SettingSection({ title, children }) {
  return (
    <div style={{background:'#0d1a22',border:'1px solid #0d2030',borderRadius:'14px',marginBottom:'12px',overflow:'hidden'}}>
      <div style={{color:'#00e5ff',fontSize:'10px',textTransform:'uppercase',letterSpacing:'.08em',padding:'12px 16px 8px',borderBottom:'1px solid #0d2030'}}>{title}</div>
      {children}
    </div>
  );
}

function SettingRow({ label, sub, type='chevron', defaultOn=false, danger=false, onToggle, isOn }) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',borderBottom:'1px solid #0d2030'}}>
      <div>
        <div style={{color:danger?'#ff6b6b':'#ccc',fontSize:'13px'}}>{label}</div>
        {sub && <div style={{color:danger?'rgba(255,76,76,.5)':'#3a5060',fontSize:'10px',marginTop:'2px'}}>{sub}</div>}
      </div>
      {type==='toggle' ? (
        <div onClick={onToggle} style={{width:'40px',height:'24px',borderRadius:'12px',position:'relative',flexShrink:0,cursor:'pointer',background:isOn?'#00e5ff':'#1a2a34',border:isOn?'none':'1px solid #1a2d3a',transition:'background .2s'}}>
          <div style={{position:'absolute',top:'3px',left:isOn?'calc(100% - 21px)':'3px',width:'18px',height:'18px',borderRadius:'50%',background:isOn?'#fff':'#3a5060',transition:'left .2s'}}/>
        </div>
      ) : (
        <span style={{color:danger?'#ff6b6b':'#1e3040',fontSize:'16px'}}>›</span>
      )}
    </div>
  );
}

export default function SettingsPage() {
  const [tog, setTog] = useState({
    maintenance:false, registration:true, forceUpdate:false,
    twoFA:true, autoBackup:true,
  });
  const toggle = key => setTog(prev=>({...prev,[key]:!prev[key]}));

  return (
    <div style={{padding:'24px'}}>
      <div style={{marginBottom:'20px'}}>
        <div style={{color:'#fff',fontSize:'18px',fontWeight:700}}>Settings</div>
        <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>App-wide configuration</div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>

        {/* Left col */}
        <div>
          <SettingSection title="App settings">
            <SettingRow label="App name"                   sub="Hololingo v1.0.0" />
            <SettingRow label="Maintenance mode"           sub="Take app offline for all users"   type="toggle" isOn={tog.maintenance}  onToggle={()=>toggle('maintenance')} />
            <SettingRow label="New user registration"      sub="Allow new sign-ups"               type="toggle" isOn={tog.registration}  onToggle={()=>toggle('registration')} />
            <SettingRow label="Force app update"           sub="Block old app versions"           type="toggle" isOn={tog.forceUpdate}   onToggle={()=>toggle('forceUpdate')} />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px'}}>
              <div>
                <div style={{color:'#ccc',fontSize:'13px'}}>Default language for new users</div>
                <div style={{color:'#3a5060',fontSize:'10px',marginTop:'2px'}}>English (US)</div>
              </div>
              <span style={{color:'#1e3040',fontSize:'16px'}}>›</span>
            </div>
          </SettingSection>

          <SettingSection title="AR & detection">
            <SettingRow label="AR confidence threshold"    sub="Min score to show label: 0.82" />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px'}}>
              <div>
                <div style={{color:'#ccc',fontSize:'13px'}}>Fallback message on detection fail</div>
                <div style={{color:'#3a5060',fontSize:'10px',marginTop:'2px'}}>"Point at a clear object"</div>
              </div>
              <span style={{color:'#1e3040',fontSize:'16px'}}>›</span>
            </div>
          </SettingSection>
        </div>

        {/* Right col */}
        <div>
          <SettingSection title="Admin access">
            <SettingRow label="Admin accounts"             sub="2 active admins" />
            <SettingRow label="Activity log"               sub="All admin actions logged" />
            <SettingRow label="Two-factor authentication"  sub="Required for all admins" type="toggle" isOn={tog.twoFA} onToggle={()=>toggle('twoFA')} />
          </SettingSection>

          <SettingSection title="Data & backup">
            <SettingRow label="Auto-backup"                sub="Daily at 2:00 AM"           type="toggle" isOn={tog.autoBackup} onToggle={()=>toggle('autoBackup')} />
            <SettingRow label="Export all user data"       sub="Full CSV dump" />
            <SettingRow label="Data retention policy"      sub="Keep inactive data 180 days" />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px'}}>
              <div>
                <div style={{color:'#ff6b6b',fontSize:'13px'}}>Delete all user data</div>
                <div style={{color:'rgba(255,76,76,.5)',fontSize:'10px',marginTop:'2px'}}>Permanent — cannot be undone</div>
              </div>
              <span style={{color:'#ff6b6b',fontSize:'16px'}}>›</span>
            </div>
          </SettingSection>
        </div>

      </div>
    </div>
  );
}