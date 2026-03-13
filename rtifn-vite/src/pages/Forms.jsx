import { useState } from 'react'
import { Link } from 'react-router-dom'
import { OSUN_LGAS, SITE_CONFIG } from '../data/content'

// ─────────────────────────────────────────────
//  JOIN
// ─────────────────────────────────────────────
export function Join() {
  const [form, setForm] = useState({ fullName:'', lga:'', ward:'', phone:'', email:'', occupation:'' })
  const [status, setStatus] = useState('idle')

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(r => setTimeout(r, 1600))
    setStatus('success')
  }

  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Become a Member</p>
          <h1>Join the Movement</h1>
          <p>Register as a member of RTIFN Osun State Chapter and be part of Nigeria's reform story</p>
        </div>
      </div>

      <section style={{ padding:'80px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:40, alignItems:'start' }}>

            {/* Why Join */}
            <div>
              <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.6rem', marginBottom:24 }}>Why Join RTIFN?</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {[
                  ['📣','Be the Voice',"Amplify the truth about Nigeria's reforms in your community."],
                  ['🤝','Connect with Leaders','Network with coordinators and leaders across Osun State.'],
                  ['📚','Get Informed','Receive regular policy briefings, updates, and training materials.'],
                  ['🌱','Shape the Future','Be part of the movement building a better Nigeria for the next generation.'],
                  ['🏆','Earn Recognition','Active members are recognized and elevated within the RTIFN structure.'],
                ].map(([emoji, title, desc]) => (
                  <div key={title} style={{ display:'flex', gap:12, padding:16, background:'#fff', borderRadius:12, boxShadow:'var(--shadow-sm)', border:'1px solid #e5e7eb' }}>
                    <span style={{ fontSize:'1.6rem' }}>{emoji}</span>
                    <div>
                      <p style={{ fontWeight:600, color:'#005a35', fontSize:'.9rem' }}>{title}</p>
                      <p style={{ color:'#6b7280', fontSize:'.83rem', marginTop:3 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            {status === 'success' ? (
              <div style={{ background:'#fff', borderRadius:20, padding:48, textAlign:'center', boxShadow:'var(--shadow-md)', border:'1px solid #e5e7eb' }}>
                <div style={{ width:72, height:72, background:'#f0fdf4', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', fontSize:'2.5rem' }}>✅</div>
                <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.6rem', marginBottom:12 }}>Welcome to RTIFN Osun!</h2>
                <p style={{ color:'#4b5563', lineHeight:1.75, marginBottom:20 }}>
                  Thank you, <strong>{form.fullName}</strong>! Your registration has been received. Our team will contact you via phone or email shortly.
                </p>
                <p style={{ color:'#008751', fontStyle:'italic', fontWeight:600 }}>"Relax, Tinubu Is Fixing Nigeria" 🇳🇬</p>
                <button onClick={() => { setStatus('idle'); setForm({ fullName:'', lga:'', ward:'', phone:'', email:'', occupation:'' }) }}
                  className="btn-outline" style={{ marginTop:24 }}>
                  Register Another Member
                </button>
              </div>
            ) : (
              <div style={{ background:'#fff', borderRadius:20, overflow:'hidden', boxShadow:'var(--shadow-md)', border:'1px solid #e5e7eb' }}>
                <div style={{ background:'#008751', padding:'20px 28px' }}>
                  <h2 style={{ color:'#fff', fontFamily:'var(--font-heading)', fontSize:'1.25rem' }}>Membership Registration Form</h2>
                  <p style={{ color:'rgba(255,255,255,.75)', fontSize:'.83rem', marginTop:4 }}>All fields are required. Membership is free.</p>
                </div>
                <form onSubmit={submit} style={{ padding:28, display:'flex', flexDirection:'column', gap:18 }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" type="text" name="fullName" value={form.fullName} onChange={handle} required placeholder="Enter your full name" />
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                    <div>
                      <label className="form-label">Local Government Area *</label>
                      <select className="form-input" name="lga" value={form.lga} onChange={handle} required>
                        <option value="">Select LGA</option>
                        {OSUN_LGAS.map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Ward *</label>
                      <input className="form-input" type="text" name="ward" value={form.ward} onChange={handle} required placeholder="e.g. Ward 5" />
                    </div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handle} required placeholder="+234 800 000 0000" />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Occupation *</label>
                    <input className="form-input" type="text" name="occupation" value={form.occupation} onChange={handle} required placeholder="e.g. Teacher, Trader, Civil Servant, Student..." />
                  </div>
                  <button type="submit" disabled={status === 'submitting'} className="btn-primary" style={{ width:'100%', padding:'14px', fontSize:'1rem', opacity: status === 'submitting' ? .65 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}>
                    {status === 'submitting'
                      ? <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                          <svg style={{ animation:'spin 1s linear infinite', width:18, height:18 }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity=".25"/><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
                          Submitting...
                        </span>
                      : '🤝 Join the Movement — Register Now'}
                  </button>
                  <p style={{ color:'#9ca3af', fontSize:'.78rem', textAlign:'center' }}>By registering you agree to receive communications from RTIFN Osun. Membership is free.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────
export function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle')

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('submitting')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Get in Touch</p>
          <h1>Contact Us</h1>
          <p>Reach out to the RTIFN Osun State Chapter team</p>
        </div>
      </div>

      <section style={{ padding:'80px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:40, alignItems:'start' }}>

            {/* Info */}
            <div>
              <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.6rem', marginBottom:24 }}>Contact Information</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:28 }}>
                {[
                  { emoji:'📍', label:'Office Address', value: SITE_CONFIG.address },
                  { emoji:'📧', label:'Email Address',  value: SITE_CONFIG.email },
                  { emoji:'📞', label:'Phone Number',   value: SITE_CONFIG.phone },
                  { emoji:'⏰', label:'Office Hours',   value:'Mon–Fri: 9:00AM–5:00PM\nSat: 10:00AM–2:00PM' },
                ].map(item => (
                  <div key={item.label} style={{ display:'flex', gap:12, padding:16, background:'#fff', borderRadius:12, boxShadow:'var(--shadow-sm)', border:'1px solid #e5e7eb' }}>
                    <span style={{ fontSize:'1.4rem' }}>{item.emoji}</span>
                    <div>
                      <p style={{ fontSize:'.72rem', fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:3 }}>{item.label}</p>
                      <p style={{ color:'#374151', fontSize:'.9rem', whiteSpace:'pre-line', lineHeight:1.6 }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:12, background:'#25D366', color:'#fff', padding:'14px 20px', borderRadius:12, textDecoration:'none', fontWeight:600, transition:'opacity .2s', boxShadow:'0 4px 16px rgba(37,211,102,.35)' }}
                onMouseOver={e => e.currentTarget.style.opacity='.88'}
                onMouseOut={e => e.currentTarget.style.opacity='1'}>
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Chat on WhatsApp — Fastest Response
              </a>
            </div>

            {/* Form */}
            {status === 'success' ? (
              <div style={{ background:'#fff', borderRadius:20, padding:48, textAlign:'center', boxShadow:'var(--shadow-md)', border:'1px solid #e5e7eb' }}>
                <div style={{ width:72, height:72, background:'#f0fdf4', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', fontSize:'2.5rem' }}>✅</div>
                <h2 style={{ fontFamily:'var(--font-heading)', color:'#005a35', fontSize:'1.5rem', marginBottom:12 }}>Message Sent!</h2>
                <p style={{ color:'#4b5563', marginBottom:24, lineHeight:1.75 }}>Thank you for contacting RTIFN Osun. Our team will respond within 24 hours.</p>
                <button onClick={() => { setStatus('idle'); setForm({ name:'', email:'', subject:'', message:'' }) }} className="btn-outline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <div style={{ background:'#fff', borderRadius:20, overflow:'hidden', boxShadow:'var(--shadow-md)', border:'1px solid #e5e7eb' }}>
                <div style={{ background:'#008751', padding:'20px 28px' }}>
                  <h2 style={{ color:'#fff', fontFamily:'var(--font-heading)', fontSize:'1.25rem' }}>Send Us a Message</h2>
                  <p style={{ color:'rgba(255,255,255,.75)', fontSize:'.83rem', marginTop:4 }}>We'll get back to you within 24 hours.</p>
                </div>
                <form onSubmit={submit} style={{ padding:28, display:'flex', flexDirection:'column', gap:18 }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" type="text" name="name" value={form.name} onChange={handle} required placeholder="Full name" />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Subject *</label>
                    <select className="form-input" name="subject" value={form.subject} onChange={handle} required>
                      <option value="">Select a subject</option>
                      {['Membership Inquiry','Media / Press Inquiry','Event Collaboration','Volunteer Opportunity','Policy Question','General Inquiry','Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Your Message *</label>
                    <textarea className="form-input" name="message" value={form.message} onChange={handle} required rows={6} placeholder="How can we help you?" style={{ resize:'vertical' }} />
                  </div>
                  <button type="submit" disabled={status === 'submitting'} className="btn-primary" style={{ width:'100%', padding:'14px', fontSize:'1rem', opacity: status === 'submitting' ? .65 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}>
                    {status === 'submitting'
                      ? <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                          <svg style={{ animation:'spin 1s linear infinite', width:18, height:18 }} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity=".25"/><path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
                          Sending...
                        </span>
                      : '📨 Send Message'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
