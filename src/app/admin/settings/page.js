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

function AddAdminModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ email: '', name: '', role: 'admin' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    { value: 'super_admin', label: 'Super admin' },
    { value: 'admin',       label: 'Moderator'   },
    { value: 'viewer',      label: 'Viewer'       },
  ];

  const handleSubmit = async () => {
    if (!form.email.trim()) { setError('Email is required.'); return; }
    if (!form.name.trim())  { setError('Display name is required.'); return; }
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 800)); // replace with real API call
    setLoading(false);
    onAdd(form);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{position:'fixed',inset:0,background:'rgba(0,0,0,.55)',zIndex:50}}
      />

      {/* Modal */}
      <div style={{
        position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
        zIndex:51,width:'100%',maxWidth:'400px',
        background:'#0d1a22',border:'1px solid #0d2d40',borderRadius:'16px',
        padding:'24px',boxShadow:'0 24px 60px rgba(0,0,0,.6)',
      }}>
        {/* Header */}
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'20px'}}>
          <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'rgba(0,229,255,.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>
            👤
          </div>
          <div>
            <div style={{color:'#fff',fontSize:'15px',fontWeight:600}}>Add new admin</div>
            <div style={{color:'#3a5060',fontSize:'11px',marginTop:'2px'}}>They'll receive an invite email</div>
          </div>
          <button
            onClick={onClose}
            style={{marginLeft:'auto',background:'none',border:'none',color:'#3a5060',fontSize:'20px',cursor:'pointer',lineHeight:1}}
          >×</button>
        </div>

        {/* Email */}
        <div style={{marginBottom:'14px'}}>
          <div style={{color:'#3a8090',fontSize:'11px',marginBottom:'6px',textTransform:'uppercase',letterSpacing:'.06em'}}>Email address</div>
          <input
            type="email"
            placeholder="admin@example.com"
            value={form.email}
            onChange={e => setForm(p => ({...p, email: e.target.value}))}
            style={{width:'100%',background:'#071014',border:'1px solid #0d2030',borderRadius:'8px',padding:'9px 12px',color:'#ccc',fontSize:'13px',outline:'none',boxSizing:'border-box'}}
          />
        </div>

        {/* Display name */}
        <div style={{marginBottom:'14px'}}>
          <div style={{color:'#3a8090',fontSize:'11px',marginBottom:'6px',textTransform:'uppercase',letterSpacing:'.06em'}}>Display name</div>
          <input
            type="text"
            placeholder="Jane Doe"
            value={form.name}
            onChange={e => setForm(p => ({...p, name: e.target.value}))}
            style={{width:'100%',background:'#071014',border:'1px solid #0d2030',borderRadius:'8px',padding:'9px 12px',color:'#ccc',fontSize:'13px',outline:'none',boxSizing:'border-box'}}
          />
        </div>

        {/* Role */}
        <div style={{marginBottom:'18px'}}>
          <div style={{color:'#3a8090',fontSize:'11px',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'.06em'}}>Role</div>
          <div style={{display:'flex',gap:'8px'}}>
            {roles.map(r => (
              <button
                key={r.value}
                onClick={() => setForm(p => ({...p, role: r.value}))}
                style={{
                  flex:1,padding:'8px 6px',borderRadius:'8px',fontSize:'12px',cursor:'pointer',
                  border: form.role === r.value ? '1px solid rgba(0,229,255,.5)' : '1px solid #0d2030',
                  background: form.role === r.value ? 'rgba(0,229,255,.08)' : '#071014',
                  color: form.role === r.value ? '#00e5ff' : '#3a5060',
                  transition:'all .15s',
                }}
              >{r.label}</button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div style={{color:'#ff6b6b',fontSize:'11px',marginBottom:'12px'}}>{error}</div>
        )}

        {/* Actions */}
        <div style={{display:'flex',gap:'10px'}}>
          <button
            onClick={onClose}
            style={{flex:1,padding:'9px',borderRadius:'8px',border:'1px solid #0d2030',background:'transparent',color:'#3a5060',fontSize:'13px',cursor:'pointer'}}
          >Cancel</button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{flex:1,padding:'9px',borderRadius:'8px',border:'1px solid rgba(0,229,255,.4)',background:'rgba(0,229,255,.1)',color:'#00e5ff',fontSize:'13px',fontWeight:600,cursor:'pointer',opacity:loading?0.6:1}}
          >{loading ? 'Sending…' : 'Send invite'}</button>
        </div>
      </div>
    </>
  );
}

export default function SettingsPage() {
  const [tog, setTog] = useState({
    maintenance:false, registration:true, forceUpdate:false,
    twoFA:true, autoBackup:true,
  });
  const toggle = key => setTog(prev => ({...prev, [key]: !prev[key]}));

  const [adminCount, setAdminCount] = useState(2);
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  const handleAdminAdded = (newAdmin) => {
    setAdminCount(c => c + 1);
    // TODO: persist newAdmin via your API
    console.log('New admin invited:', newAdmin);
  };

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
            <SettingRow label="Maintenance mode"           sub="Take app offline for all users"   type="toggle" isOn={tog.maintenance}  onToggle={() => toggle('maintenance')} />
            <SettingRow label="New user registration"      sub="Allow new sign-ups"               type="toggle" isOn={tog.registration}  onToggle={() => toggle('registration')} />
            <SettingRow label="Force app update"           sub="Block old app versions"           type="toggle" isOn={tog.forceUpdate}   onToggle={() => toggle('forceUpdate')} />
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

            {/* Admin accounts row — with Add Admin button */}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',borderBottom:'1px solid #0d2030'}}>
              <div>
                <div style={{color:'#ccc',fontSize:'13px'}}>Admin accounts</div>
                <div style={{color:'#3a5060',fontSize:'10px',marginTop:'2px'}}>{adminCount} active admin{adminCount !== 1 ? 's' : ''}</div>
              </div>
              <button
                onClick={() => setShowAddAdmin(true)}
                style={{
                  display:'flex',alignItems:'center',gap:'6px',
                  padding:'6px 12px',borderRadius:'8px',
                  border:'1px solid rgba(0,229,255,.35)',
                  background:'rgba(0,229,255,.08)',
                  color:'#00e5ff',fontSize:'12px',fontWeight:600,
                  cursor:'pointer',whiteSpace:'nowrap',
                }}
              >
                + Add admin
              </button>
            </div>

            <SettingRow label="Activity log"               sub="All admin actions logged" />
            <SettingRow label="Two-factor authentication"  sub="Required for all admins" type="toggle" isOn={tog.twoFA} onToggle={() => toggle('twoFA')} />
          </SettingSection>

          <SettingSection title="Data & backup">
            <SettingRow label="Auto-backup"                sub="Daily at 2:00 AM"           type="toggle" isOn={tog.autoBackup} onToggle={() => toggle('autoBackup')} />
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

      {/* Add Admin Modal */}
      {showAddAdmin && (
        <AddAdminModal
          onClose={() => setShowAddAdmin(false)}
          onAdd={handleAdminAdded}
        />
      )}
    </div>
  );
}