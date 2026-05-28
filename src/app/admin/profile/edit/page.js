'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: 'Admin', email: 'admin@hololingo.app', bio: '' });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const set = (key, val) => setForm(p => ({ ...p, [key]: val }));

  const handleSave = async () => {
    if (!form.name.trim())  { setError('Display name is required.'); return; }
    if (!form.email.trim()) { setError('Email is required.'); return; }
    setError('');
    setSaving(true);
    await new Promise(r => setTimeout(r, 800)); // replace with real API call
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <button
          onClick={() => router.back()}
          style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: '10px', color: '#6a8090', fontSize: '18px', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >‹</button>
        <div>
          <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Edit profile</div>
          <div style={{ color: '#3a5060', fontSize: '11px', marginTop: '2px' }}>Update your display info</div>
        </div>
      </div>

      {/* Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', padding: '18px', background: '#0d1a22', border: '1px solid #0d2030', borderRadius: '14px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(0,229,255,.18), rgba(0,229,255,.05))', border: '2px solid rgba(0,229,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00e5ff', fontSize: '22px', fontWeight: 700, flexShrink: 0 }}>
          {form.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div style={{ color: '#ccc', fontSize: '13px', fontWeight: 600 }}>{form.name || 'Admin'}</div>
          <div style={{ color: '#3a5060', fontSize: '11px', marginTop: '3px' }}>Super admin</div>
          <div style={{ color: '#00e5ff', fontSize: '11px', marginTop: '6px', cursor: 'pointer' }}>Change avatar →</div>
        </div>
      </div>

      {/* Form */}
      <div style={{ background: '#0d1a22', border: '1px solid #0d2030', borderRadius: '14px', overflow: 'hidden' }}>

        <div style={{ color: '#00e5ff', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.08em', padding: '12px 16px 8px', borderBottom: '1px solid #0d2030' }}>
          Profile info
        </div>

        {/* Display name */}
        <div style={{ padding: '14px 16px', borderBottom: '1px solid #0d2030' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '8px' }}>Display name</div>
          <input
            type="text"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="Your name"
            style={{ width: '100%', background: '#071014', border: '1px solid #0d2030', borderRadius: '8px', padding: '9px 12px', color: '#ccc', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        {/* Email */}
        <div style={{ padding: '14px 16px', borderBottom: '1px solid #0d2030' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '8px' }}>Email address</div>
          <input
            type="email"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            placeholder="you@example.com"
            style={{ width: '100%', background: '#071014', border: '1px solid #0d2030', borderRadius: '8px', padding: '9px 12px', color: '#ccc', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>

        {/* Bio */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ color: '#3a8090', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '8px' }}>Bio <span style={{ color: '#2a4050' }}>(optional)</span></div>
          <textarea
            value={form.bio}
            onChange={e => set('bio', e.target.value)}
            placeholder="Short description about yourself..."
            rows={3}
            style={{ width: '100%', background: '#071014', border: '1px solid #0d2030', borderRadius: '8px', padding: '9px 12px', color: '#ccc', fontSize: '13px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit' }}
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '10px' }}>{error}</div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
        <button
          onClick={() => router.back()}
          style={{ flex: 1, padding: '11px', borderRadius: '10px', border: '1px solid #0d2030', background: 'transparent', color: '#3a5060', fontSize: '13px', cursor: 'pointer' }}
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{ flex: 2, padding: '11px', borderRadius: '10px', border: '1px solid rgba(0,229,255,.35)', background: saved ? 'rgba(74,222,128,.1)' : 'rgba(0,229,255,.1)', color: saved ? '#4ade80' : '#00e5ff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all .2s', opacity: saving ? 0.7 : 1 }}
        >
          {saving ? 'Saving…' : saved ? '✓ Saved' : 'Save changes'}
        </button>
      </div>

    </div>
  );
}