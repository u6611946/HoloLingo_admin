'use client';

import { useState } from 'react';
import Image from 'next/image';
import StatCard from '../../components/admin/StatCard';

const questions = [
  { label:'"Use [word] in a sentence"', pct:78, color:'#00e5ff' },
  { label:'"What\'s the difference…"',  pct:54, color:'#a78bfa' },
  { label:'"Quiz me on my words"',       pct:42, color:'#4ade80' },
  { label:'"How do I say X in JP?"',     pct:31, color:'#ffc800' },
  { label:'"Save word from chat"',       pct:24, color:'#ff6b6b' },
];

const conversations = [
  {
    initial:'N',
    color:'#00e5ff',
    bg:'rgba(0,229,255,.12)',
    name:'Nattaya K.',
    last:'"Yes save mug! And use desk in a sentence"',
    msgs:6,
    saved:'+1 (mug)',
    savedColor:'#4ade80'
  },

  {
    initial:'S',
    color:'#a78bfa',
    bg:'rgba(167,139,250,.12)',
    name:'Somchai P.',
    last:'"Quiz me on all my review words"',
    msgs:12,
    saved:'0',
    savedColor:'#3a5060'
  },

  {
    initial:'M',
    color:'#4ade80',
    bg:'rgba(74,222,128,.12)',
    name:'Malee T.',
    last:'"How do I say window in Korean?"',
    msgs:4,
    saved:'+2',
    savedColor:'#4ade80'
  },
];

const settings = [
  {
    label:'Gobot enabled for all users',
    sub:'Show Gobot tab in app nav',
    defaultOn:true
  },

  {
    label:'Save word from chat',
    sub:'Allow "mug — save it?" pills in chat',
    defaultOn:true
  },

  {
    label:'Quiz mode in chat',
    sub:'Enable "Quiz me" inside Gobot',
    defaultOn:true
  },

  {
    label:'Scoped to saved vocab only',
    sub:"Bot uses only user's own saved words",
    defaultOn:true
  },
];

const convCols = '1.5fr 3fr 0.8fr 0.8fr';

export default function GobotPage() {
  const [toggles, setToggles] = useState(
    settings.map(s => s.defaultOn)
  );

  return (
    <div style={{padding:'24px'}}>

      {/* HEADER */}
      <div style={{marginBottom:'20px'}}>
        <div
          style={{
            color:'#fff',
            fontSize:'18px',
            fontWeight:700
          }}
        >
          Gobot AI
        </div>

        <div
          style={{
            color:'#3a5060',
            fontSize:'11px',
            marginTop:'2px'
          }}
        >
          AI tutor configuration & analytics
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          display:'grid',
          gridTemplateColumns:'repeat(4,minmax(0,1fr))',
          gap:'14px',
          marginBottom:'20px'
        }}
      >

        {/* ROBOT */}
        <StatCard
          icon={
            <Image
              src="/robot 1.png"
              alt="Robot"
              width={20}
              height={20}
              style={{ objectFit:'contain' }}
            />
          }
          num="1,840"
          label="Gobot chats today"
          delta="+22% this week"
          deltaUp
          color="#00e5ff"
        />

        {/* MESSAGE */}
        <StatCard
          icon={
            <Image
              src="/message.png"
              alt="Message"
              width={20}
              height={20}
              style={{ objectFit:'contain' }}
            />
          }
          num="4.2"
          label="Avg messages/session"
          delta="+0.5 vs last week"
          deltaUp
          color="#4ade80"
        />

        {/* POSITIVE */}
        <StatCard
          icon="✓"
          num="94%"
          label="Positive feedback"
          delta="steady"
          deltaUp
          color="#a78bfa"
        />

        {/* CHECK */}
        <StatCard
          icon={
            <Image
              src="/check1.png"
              alt="Check"
              width={20}
              height={20}
              style={{ objectFit:'contain' }}
            />
          }
          num="312"
          label="Words saved via Gobot"
          delta="+48 today"
          deltaUp
          color="#ffc800"
        />
      </div>

      {/* TOP GRID */}
      <div
        style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:'16px',
          marginBottom:'16px'
        }}
      >

        {/* QUESTION TYPES */}
        <div
          style={{
            background:'#0d1a22',
            border:'1px solid #0d2030',
            borderRadius:'14px',
            padding:'18px'
          }}
        >
          <div
            style={{
              color:'#fff',
              fontSize:'13px',
              fontWeight:700,
              marginBottom:'14px'
            }}
          >
            Most asked question types
          </div>

          <div
            style={{
              display:'flex',
              flexDirection:'column',
              gap:'10px'
            }}
          >
            {questions.map(q => (
              <div
                key={q.label}
                style={{
                  display:'flex',
                  alignItems:'center',
                  gap:'10px'
                }}
              >
                <span
                  style={{
                    color:'#ccc',
                    fontSize:'12px',
                    minWidth:'200px'
                  }}
                >
                  {q.label}
                </span>

                <div
                  style={{
                    flex:1,
                    height:'5px',
                    background:'#111d26',
                    borderRadius:'3px',
                    overflow:'hidden'
                  }}
                >
                  <div
                    style={{
                      width:q.pct+'%',
                      height:'100%',
                      background:q.color,
                      borderRadius:'3px'
                    }}
                  />
                </div>

                <span
                  style={{
                    color:q.color,
                    fontSize:'11px',
                    minWidth:'32px',
                    textAlign:'right'
                  }}
                >
                  {q.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CONFIG */}
        <div
          style={{
            background:'#0d1a22',
            border:'1px solid #0d2030',
            borderRadius:'14px',
            padding:'18px'
          }}
        >
          <div
            style={{
              color:'#fff',
              fontSize:'13px',
              fontWeight:700,
              marginBottom:'14px'
            }}
          >
            Gobot configuration
          </div>

          <div
            style={{
              display:'flex',
              flexDirection:'column'
            }}
          >
            {settings.map((s,i)=>(
              <div
                key={s.label}
                style={{
                  display:'flex',
                  justifyContent:'space-between',
                  alignItems:'center',
                  padding:'11px 0',
                  borderBottom:
                    i < settings.length - 1
                      ? '1px solid #0d2030'
                      : 'none'
                }}
              >
                <div>
                  <div
                    style={{
                      color:'#ccc',
                      fontSize:'12px'
                    }}
                  >
                    {s.label}
                  </div>

                  <div
                    style={{
                      color:'#3a5060',
                      fontSize:'10px',
                      marginTop:'2px'
                    }}
                  >
                    {s.sub}
                  </div>
                </div>

                <div
                  onClick={() =>
                    setToggles(prev => {
                      const n = [...prev];
                      n[i] = !n[i];
                      return n;
                    })
                  }
                  style={{
                    width:'40px',
                    height:'24px',
                    borderRadius:'12px',
                    position:'relative',
                    flexShrink:0,
                    cursor:'pointer',
                    background:
                      toggles[i]
                        ? '#00e5ff'
                        : '#1a2a34',
                    border:
                      toggles[i]
                        ? 'none'
                        : '1px solid #1a2d3a',
                    transition:'background .2s',
                  }}
                >
                  <div
                    style={{
                      position:'absolute',
                      top:'3px',
                      left:
                        toggles[i]
                          ? 'calc(100% - 21px)'
                          : '3px',
                      width:'18px',
                      height:'18px',
                      borderRadius:'50%',
                      background:
                        toggles[i]
                          ? '#fff'
                          : '#3a5060',
                      transition:'left .2s',
                    }}
                  />
                </div>
              </div>
            ))}

            <div
              style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                padding:'11px 0'
              }}
            >
              <div>
                <div
                  style={{
                    color:'#ccc',
                    fontSize:'12px'
                  }}
                >
                  AI model version
                </div>

                <div
                  style={{
                    color:'#3a5060',
                    fontSize:'10px',
                    marginTop:'2px'
                  }}
                >
                  Claude Sonnet 4.6
                </div>
              </div>

              <span
                style={{
                  color:'#1e3040',
                  fontSize:'16px'
                }}
              >
                ›
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CONVERSATIONS */}
      <div
        style={{
          background:'#0d1a22',
          border:'1px solid #0d2030',
          borderRadius:'14px',
          padding:'18px'
        }}
      >
        <div
          style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:'14px'
          }}
        >
          <div
            style={{
              color:'#fff',
              fontSize:'13px',
              fontWeight:700
            }}
          >
            Recent Gobot conversations
          </div>

          <button
            style={{
              background:'#0d1a22',
              border:'1px solid #1a2d3a',
              borderRadius:'7px',
              padding:'5px 12px',
              color:'#00e5ff',
              fontSize:'11px',
              cursor:'pointer',
              fontFamily:'inherit'
            }}
          >
            Export log ›
          </button>
        </div>

        <div
          style={{
            background:'#0a1218',
            borderRadius:'10px',
            overflow:'hidden'
          }}
        >
          <div
            style={{
              display:'grid',
              gridTemplateColumns:convCols,
              gap:'8px',
              padding:'8px 14px',
              background:'#0a1218'
            }}
          >
            {['User','Last message','Messages','Words saved'].map(h=>(
              <div
                key={h}
                style={{
                  color:'#1e3040',
                  fontSize:'9px',
                  textTransform:'uppercase',
                  letterSpacing:'.07em'
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {conversations.map((c,i)=>(
            <div
              key={c.name}
              style={{
                display:'grid',
                gridTemplateColumns:convCols,
                gap:'8px',
                padding:'10px 14px',
                borderTop:'1px solid #0d2030',
                alignItems:'center',
                background:
                  i % 2 === 1
                    ? '#080e14'
                    : 'transparent'
              }}
            >
              <div
                style={{
                  display:'flex',
                  alignItems:'center',
                  gap:'8px'
                }}
              >
                <div
                  style={{
                    width:'24px',
                    height:'24px',
                    borderRadius:'50%',
                    background:c.bg,
                    color:c.color,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    fontSize:'9px',
                    fontWeight:700,
                    flexShrink:0
                  }}
                >
                  {c.initial}
                </div>

                <span
                  style={{
                    color:'#ccc',
                    fontSize:'12px'
                  }}
                >
                  {c.name}
                </span>
              </div>

              <div
                style={{
                  color:'#6b8a9a',
                  fontSize:'11px'
                }}
              >
                {c.last}
              </div>

              <div
                style={{
                  color:'#00e5ff',
                  fontSize:'12px'
                }}
              >
                {c.msgs}
              </div>

              <div
                style={{
                  color:c.savedColor,
                  fontSize:'12px'
                }}
              >
                {c.saved}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}