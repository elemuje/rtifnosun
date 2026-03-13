import { Link } from 'react-router-dom'
import { EXECUTIVES, ACHIEVEMENTS, EVENTS, GALLERY_ITEMS, EVENT_TYPE_COLORS } from '../data/content'

// ─────────────────────────────────────────────
//  ABOUT
// ─────────────────────────────────────────────
export function About() {
  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Who We Are</p>
          <h1>About RTIFN Osun</h1>
          <p>Our mission, vision, objectives, and the message from our State Coordinator</p>
        </div>
      </div>

      <section style={{ padding:'80px 0', background:'#fff' }}>
        <div className="section-wrap">
          {/* About block */}
          <div style={{ background:'#f0fdf4', borderLeft:'4px solid #008751', borderRadius:'0 16px 16px 0', padding:36, marginBottom:48 }}>
            <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.9rem', marginBottom:16 }}>About RTIFN</h2>
            <p style={{ color:'#374151', lineHeight:1.85, fontSize:'1.05rem', marginBottom:14 }}>
              <strong>RTIFN (Relax, Tinubu Is Fixing Nigeria)</strong> is a pro-reform, pro-democracy grassroots movement established to counter disinformation and communicate the transformational reform agenda of President Bola Ahmed Tinubu to every corner of Nigeria.
            </p>
            <p style={{ color:'#374151', lineHeight:1.85, fontSize:'1.05rem' }}>
              The RTIFN Osun State Chapter operates as the official state-level media, mobilization, and policy communication unit, covering all 30 local government areas and 332 wards in Osun State.
            </p>
          </div>

          {/* Vision & Mission */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20, marginBottom:48 }}>
            {[
              { icon:'🎯', title:'Our Vision', desc:"A Nigeria where every citizen — regardless of location, education, or socioeconomic background — has access to accurate, credible, and empowering information about the ongoing national transformation under President Tinubu's administration." },
              { icon:'📢', title:'Our Mission', desc:"To mobilize, educate, and empower Nigerians at the grassroots level with factual, data-driven information about President Tinubu's reform agenda — while building a strong, connected network of reform advocates across all 332 wards in Osun State." },
            ].map(item => (
              <div key={item.title} className="card" style={{ padding:32 }}>
                <div style={{ width:48, height:48, background:'#f0fdf4', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem', marginBottom:16 }}>{item.icon}</div>
                <h3 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.4rem', marginBottom:12 }}>{item.title}</h3>
                <p style={{ color:'#4b5563', lineHeight:1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.9rem', marginBottom:28 }}>Our Objectives</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:56 }}>
            {[
              ['01','Counter Disinformation','Combat fake news and deliberate misinformation about the Tinubu administration\'s policies and achievements.'],
              ['02','Policy Communication','Translate complex government policies into simple, understandable language for everyday Nigerians.'],
              ['03','Grassroots Mobilization','Build a strong grassroots network of informed citizens who can advocate for the reform agenda at community level.'],
              ['04','Media Engagement','Engage print, broadcast, and digital media to ensure balanced and accurate coverage of government programs.'],
              ['05','Youth Empowerment','Engage Nigeria\'s youth population with relevant, digital-first political education and mobilization initiatives.'],
              ['06','Community Development','Support community-level projects that demonstrate the tangible benefits of the reform agenda.'],
            ].map(([num, title, desc]) => (
              <div key={num} style={{ display:'flex', gap:18, padding:20, background:'#f9fafb', borderRadius:12, alignItems:'flex-start', transition:'background .2s', cursor:'default' }}
                onMouseOver={e => e.currentTarget.style.background='#f0fdf4'}
                onMouseOut={e => e.currentTarget.style.background='#f9fafb'}>
                <span style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', fontWeight:900, color:'rgba(0,135,81,.2)', flexShrink:0, lineHeight:1 }}>{num}</span>
                <div>
                  <h4 style={{ fontWeight:700, color:'#005a35', marginBottom:4 }}>{title}</h4>
                  <p style={{ color:'#6b7280', fontSize:'.9rem', lineHeight:1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coordinator Message */}
          <div style={{ background:'linear-gradient(135deg,#052e16 0%,#005a35 100%)', borderRadius:20, padding:40, color:'#fff' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:28 }}>
              <div style={{ height:1, flex:1, background:'rgba(255,255,255,.15)' }} />
              <span style={{ color:'#86efac', fontSize:'.78rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', whiteSpace:'nowrap' }}>Message from the State Coordinator</span>
              <div style={{ height:1, flex:1, background:'rgba(255,255,255,.15)' }} />
            </div>
            <div style={{ display:'flex', gap:24, flexWrap:'wrap', alignItems:'flex-start' }}>
              <div style={{ width:72, height:72, background:'#008751', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem', flexShrink:0 }}>👤</div>
              <div style={{ flex:1, minWidth:260 }}>
                <blockquote style={{ fontStyle:'italic', color:'rgba(255,255,255,.88)', lineHeight:1.85, fontSize:'1.05rem', marginBottom:20 }}>
                  "Nigeria is not broken. Nigeria is being fixed. Every reform has a process — and that process requires patience, participation, and truth-telling. That is exactly what RTIFN Osun is here to do. We will carry the message of reform to every household, every community, every ward in Osun State. Relax. Tinubu is fixing Nigeria."
                </blockquote>
                <p style={{ fontWeight:700, color:'#fff', fontSize:'1rem' }}>State Coordinator</p>
                <p style={{ color:'#4ade80', fontSize:'.875rem' }}>RTIFN Osun State Chapter</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
//  EXECUTIVES
// ─────────────────────────────────────────────
export function Executives() {
  const featured = EXECUTIVES[0]
  const others = EXECUTIVES.slice(1)

  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Leadership</p>
          <h1>Meet Our Executives</h1>
          <p>The dedicated team driving RTIFN Osun State Chapter forward</p>
        </div>
      </div>

      <section style={{ padding:'80px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          {/* Featured */}
          <div style={{ maxWidth:700, margin:'0 auto 40px' }}>
            <div className="card" style={{ overflow:'hidden' }}>
              <div style={{ background:featured.gradient, padding:32, display:'flex', flexWrap:'wrap', alignItems:'center', gap:24 }}>
                <div style={{ width:96, height:96, background:'rgba(255,255,255,.12)', border:'3px solid rgba(255,255,255,.25)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem', flexShrink:0 }}>
                  {featured.emoji}
                </div>
                <div style={{ color:'#fff' }}>
                  <span style={{ background:'rgba(255,255,255,.15)', padding:'3px 12px', borderRadius:999, fontSize:'.72rem', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase' }}>
                    {featured.position}
                  </span>
                  <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'1.6rem', fontWeight:800, margin:'8px 0 6px' }}>{featured.name}</h2>
                  <p style={{ color:'rgba(255,255,255,.78)', fontSize:'.9rem', lineHeight:1.65, maxWidth:480 }}>{featured.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:20 }}>
            {others.map(exec => (
              <div key={exec.position} className="card">
                <div style={{ background:exec.gradient, padding:24, display:'flex', alignItems:'center', gap:16 }}>
                  <div style={{ width:58, height:58, background:'rgba(255,255,255,.12)', border:'2px solid rgba(255,255,255,.2)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.8rem', flexShrink:0 }}>
                    {exec.emoji}
                  </div>
                  <div style={{ color:'#fff' }}>
                    <p style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1rem', lineHeight:1.3 }}>{exec.name}</p>
                    <p style={{ color:'#86efac', fontSize:'.78rem', marginTop:3 }}>{exec.position}</p>
                  </div>
                </div>
                <div style={{ padding:20 }}>
                  <p style={{ color:'#4b5563', fontSize:'.875rem', lineHeight:1.7 }}>{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop:56, background:'#fff', borderRadius:20, padding:48, textAlign:'center', boxShadow:'var(--shadow-sm)', border:'1px solid #e5e7eb' }}>
            <h3 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.6rem', marginBottom:12 }}>Want to Serve?</h3>
            <p style={{ color:'#6b7280', maxWidth:480, margin:'0 auto 24px' }}>RTIFN Osun is always looking for dedicated, passionate Nigerians. Join us and be part of something bigger.</p>
            <Link to="/join" className="btn-primary">Join RTIFN Today</Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
//  ACHIEVEMENTS
// ─────────────────────────────────────────────
const STATUS_COLORS = {
  'Implemented': { bg:'#dcfce7', text:'#166534', border:'#86efac' },
  'In Progress':  { bg:'#dbeafe', text:'#1e40af', border:'#93c5fd' },
  'Ongoing':      { bg:'#fef9c3', text:'#854d0e', border:'#fde047' },
}
const IMPACT_COLORS = {
  'High':   { bg:'#fee2e2', text:'#991b1b' },
  'Medium': { bg:'#ffedd5', text:'#9a3412' },
}

export function Achievements() {
  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Reform Tracker</p>
          <h1>Tracking Tinubu's Reforms</h1>
          <p>A factual record of President Bola Tinubu's reform milestones since May 29, 2023</p>
        </div>
      </div>

      <section style={{ padding:'80px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          {/* Stats */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:14, marginBottom:44 }}>
            {[['8+','Major Reform Areas','#008751'],['5','Fully Implemented','#16a34a'],['3','In Progress','#1d4ed8'],['2023','Reform Year One','#005a35']].map(([val,label,color]) => (
              <div key={label} style={{ background:color, color:'#fff', borderRadius:14, padding:20, textAlign:'center' }}>
                <p style={{ fontFamily:'var(--font-heading)', fontSize:'2.2rem', fontWeight:900 }}>{val}</p>
                <p style={{ fontSize:'.78rem', color:'rgba(255,255,255,.75)', marginTop:4 }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {ACHIEVEMENTS.map(a => {
              const sc = STATUS_COLORS[a.status] || STATUS_COLORS['Ongoing']
              const ic = IMPACT_COLORS[a.impact] || IMPACT_COLORS['Medium']
              return (
                <div key={a.id} className="card" style={{ padding:28 }}>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:20, alignItems:'flex-start' }}>
                    <span style={{ fontSize:'3rem', flexShrink:0 }}>{a.icon}</span>
                    <div style={{ flex:1, minWidth:240 }}>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:12 }}>
                        <span className="badge" style={{ background:sc.bg, color:sc.text, borderColor:sc.border }}>{a.status}</span>
                        <span className="badge" style={{ background:'#f3f4f6', color:'#374151', borderColor:'#d1d5db' }}>{a.category}</span>
                        <span className="badge" style={{ background:ic.bg, color:ic.text, borderColor:ic.bg }}>{a.impact} Impact</span>
                        <span style={{ fontSize:'.78rem', color:'#9ca3af', padding:'4px 8px' }}>📅 {a.date}</span>
                      </div>
                      <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.4rem', marginBottom:10 }}>{a.title}</h2>
                      <p style={{ color:'#4b5563', lineHeight:1.75, marginBottom:16 }}>{a.summary}</p>
                      <div style={{ background:'#f0fdf4', borderRadius:12, padding:16 }}>
                        <p style={{ fontSize:'.78rem', fontWeight:700, color:'#005a35', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:10 }}>Key Details:</p>
                        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:7 }}>
                          {a.details.map((d,i) => (
                            <li key={i} style={{ display:'flex', gap:8, alignItems:'flex-start', fontSize:'.875rem', color:'#374151' }}>
                              <span style={{ color:'#008751', flexShrink:0, marginTop:1 }}>✓</span> {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ marginTop:48, background:'#005a35', borderRadius:20, padding:48, textAlign:'center', color:'#fff' }}>
            <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.7rem', marginBottom:12 }}>This is Just the Beginning</h3>
            <p style={{ color:'rgba(255,255,255,.78)', maxWidth:500, margin:'0 auto 24px', lineHeight:1.7 }}>
              President Tinubu's reform agenda is a multi-year programme. Join RTIFN to stay updated with every milestone.
            </p>
            <Link to="/join" className="btn-white">Join RTIFN Osun</Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
//  EVENTS
// ─────────────────────────────────────────────
export function Events() {
  const upcoming = EVENTS.filter(e => e.status === 'upcoming')
  const past = EVENTS.filter(e => e.status === 'past')

  const EventCard = ({ event, dim }) => {
    const tc = EVENT_TYPE_COLORS[event.type] || EVENT_TYPE_COLORS['State Meeting']
    return (
      <div className="card" style={{ padding:24, borderLeft:`4px solid ${dim ? '#d1d5db' : '#008751'}`, opacity: dim ? .82 : 1 }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:16, alignItems:'flex-start' }}>
          <div style={{ background: dim ? '#9ca3af' : '#008751', color:'#fff', borderRadius:12, padding:'12px 14px', textAlign:'center', minWidth:72, flexShrink:0 }}>
            <span style={{ fontSize:'1.6rem', display:'block' }}>{event.emoji}</span>
            <span style={{ fontSize:'.72rem', display:'block', marginTop:2 }}>{new Date(event.date).toLocaleDateString('en-NG',{month:'short'})}</span>
            <span style={{ fontSize:'1.4rem', fontWeight:700, display:'block', lineHeight:1.1 }}>{new Date(event.date).getDate()}</span>
          </div>
          <div style={{ flex:1, minWidth:200 }}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:10 }}>
              <span className="badge" style={{ background:tc.bg, color:tc.text, borderColor:tc.bg }}>{event.type}</span>
              <span className="badge" style={{ background: dim ? '#f3f4f6' : '#dcfce7', color: dim ? '#6b7280' : '#166534', borderColor: dim ? '#d1d5db' : '#86efac' }}>
                {dim ? 'Completed' : 'Upcoming'}
              </span>
            </div>
            <h3 style={{ fontFamily:'var(--font-heading)', color: dim ? '#6b7280' : '#005a35', fontSize:'1.2rem', marginBottom:8 }}>{event.title}</h3>
            <p style={{ color:'#6b7280', fontSize:'.875rem', lineHeight:1.65, marginBottom:10 }}>{event.description}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:16, fontSize:'.82rem', color:'#9ca3af' }}>
              <span>📅 {new Date(event.date).toLocaleDateString('en-NG',{weekday:'long',year:'numeric',month:'long',day:'numeric'})} at {event.time}</span>
              <span>📍 {event.location}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Events Calendar</p>
          <h1>RTIFN Events</h1>
          <p>Meetings, outreaches, and mobilization activities across Osun State</p>
        </div>
      </div>
      <section style={{ padding:'80px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
            <span style={{ width:10, height:10, background:'#008751', borderRadius:'50%', display:'inline-block', animation:'pulse-dot 2s infinite' }} />
            <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.5rem' }}>Upcoming Events</h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:52 }}>
            {upcoming.map(e => <EventCard key={e.id} event={e} dim={false} />)}
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
            <span style={{ width:10, height:10, background:'#9ca3af', borderRadius:'50%', display:'inline-block' }} />
            <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.5rem' }}>Past Events</h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {past.map(e => <EventCard key={e.id} event={e} dim={true} />)}
          </div>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
//  GALLERY
// ─────────────────────────────────────────────
export function Gallery() {
  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Photo Gallery</p>
          <h1>Media Gallery</h1>
          <p>Visual highlights from RTIFN Osun activities, events, and community engagements</p>
        </div>
      </div>
      <section style={{ padding:'80px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          <div style={{ background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:12, padding:16, marginBottom:32, display:'flex', gap:10, alignItems:'flex-start' }}>
            <span style={{ fontSize:'1.2rem' }}>ℹ️</span>
            <div>
              <p style={{ fontWeight:600, color:'#1e40af', fontSize:'.875rem' }}>Gallery Administrator Note</p>
              <p style={{ color:'#1d4ed8', fontSize:'.83rem', marginTop:3 }}>To add real photos, place image files in <code style={{ background:'#dbeafe', padding:'1px 5px', borderRadius:4 }}>public/gallery/</code> and update the <code style={{ background:'#dbeafe', padding:'1px 5px', borderRadius:4 }}>GALLERY_ITEMS</code> array in <code style={{ background:'#dbeafe', padding:'1px 5px', borderRadius:4 }}>src/data/content.js</code>.</p>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:14 }}>
            {GALLERY_ITEMS.map(item => (
              <div key={item.id} className="card" style={{ cursor:'pointer' }}>
                <div style={{ background:item.color, aspectRatio:'1', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
                  <span style={{ fontSize:'3.5rem' }}>{item.emoji}</span>
                  <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0)', transition:'background .25s', display:'flex', alignItems:'center', justifyContent:'center' }}
                    onMouseOver={e => { e.currentTarget.style.background='rgba(0,0,0,.2)'; e.currentTarget.querySelector('div').style.opacity='1' }}
                    onMouseOut={e => { e.currentTarget.style.background='rgba(0,0,0,0)'; e.currentTarget.querySelector('div').style.opacity='0' }}>
                    <div style={{ background:'rgba(255,255,255,.9)', color:'#111', fontSize:'.75rem', fontWeight:700, padding:'5px 12px', borderRadius:999, opacity:0, transition:'opacity .2s' }}>View Photo</div>
                  </div>
                </div>
                <div style={{ padding:12 }}>
                  <p style={{ fontWeight:600, fontSize:'.83rem', color:'#111827', lineHeight:1.4, marginBottom:6 }}>{item.title}</p>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:'.72rem', color:'#9ca3af' }}>{item.date}</span>
                    <span style={{ fontSize:'.68rem', fontWeight:700, color:'#fff', background:item.color, padding:'2px 7px', borderRadius:999 }}>
                      {item.category.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:56, background:'#fff', borderRadius:20, padding:44, textAlign:'center', boxShadow:'var(--shadow-sm)', border:'1px solid #e5e7eb' }}>
            <div style={{ fontSize:'3rem', marginBottom:12 }}>📸</div>
            <h3 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.5rem', marginBottom:10 }}>Have Photos to Share?</h3>
            <p style={{ color:'#6b7280', maxWidth:440, margin:'0 auto 24px', lineHeight:1.7 }}>Are you an RTIFN member with event photos? Send them to our media team.</p>
            <Link to="/contact" className="btn-primary">Send Photos to Media Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
