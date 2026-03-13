import { Link } from 'react-router-dom'
import { BLOG_POSTS, ACHIEVEMENTS, CATEGORY_COLORS } from '../data/content'

export default function Home() {
  const latestPosts = BLOG_POSTS.slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <section className="green-gradient-bg hero-pattern" style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
        {/* Glow orbs */}
        <div style={{ position:'absolute', top:80, right:60, width:320, height:320, background:'rgba(255,255,255,.04)', borderRadius:'50%', filter:'blur(60px)' }} />
        <div style={{ position:'absolute', bottom:80, left:40, width:440, height:440, background:'rgba(0,135,81,.2)', borderRadius:'50%', filter:'blur(80px)' }} />

        <div style={{ position:'relative', zIndex:2, maxWidth:860, margin:'0 auto', padding:'100px 24px 60px', textAlign:'center' }}>
          {/* Badge */}
          <div className="animate-fade-up" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,.1)', border:'1px solid rgba(255,255,255,.18)', borderRadius:999, padding:'6px 18px', color:'rgba(255,255,255,.8)', fontSize:'.8rem', marginBottom:28, backdropFilter:'blur(6px)' }}>
            <span style={{ width:7, height:7, background:'#4ade80', borderRadius:'50%', display:'inline-block', animation:'pulse-dot 2s infinite' }} />
            RTIFN Osun State Chapter
          </div>

          <h1 className="animate-fade-up d1" style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.8rem,7vw,5rem)', color:'#fff', fontWeight:900, lineHeight:1.12, marginBottom:24 }}>
            Relax,
            <span style={{ display:'block', color:'#4ade80' }}>Tinubu Is</span>
            <span style={{ display:'block' }}>Fixing Nigeria</span>
          </h1>

          <p className="animate-fade-up d2" style={{ fontSize:'1.15rem', color:'rgba(255,255,255,.78)', maxWidth:620, margin:'0 auto 36px', lineHeight:1.75 }}>
            We are the grassroots media and mobilization platform of the RTIFN Osun State Chapter — amplifying the reform agenda of President Bola Ahmed Tinubu across every ward in Osun State.
          </p>

          <div className="animate-fade-up d3" style={{ display:'flex', flexWrap:'wrap', gap:14, justifyContent:'center' }}>
            <Link to="/join" className="btn-white">Join RTIFN Today</Link>
            <Link to="/achievements" className="btn-outline" style={{ borderColor:'rgba(255,255,255,.6)', color:'#fff' }}
              onMouseOver={e => { e.currentTarget.style.background='rgba(255,255,255,.12)' }}
              onMouseOut={e => { e.currentTarget.style.background='transparent' }}>
              Tinubu's Achievements
            </Link>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up d4" style={{ marginTop:64, paddingTop:48, borderTop:'1px solid rgba(255,255,255,.1)', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
            {[['30','Local Governments'],['332','Wards Covered'],['10K+','Members'],['1','Unified Goal']].map(([val, label]) => (
              <div key={label} style={{ textAlign:'center' }}>
                <p style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', fontWeight:900, color:'#4ade80' }}>{val}</p>
                <p style={{ color:'rgba(255,255,255,.55)', fontSize:'.78rem', marginTop:4 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll arrow */}
        <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', color:'rgba(255,255,255,.35)', animation:'bounce-y 2s infinite' }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ padding:'96px 0', background:'#fff' }}>
        <div className="section-wrap" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:56, alignItems:'center' }}>
          <div>
            <span style={{ color:'#008751', fontWeight:600, fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.1em' }}>About RTIFN</span>
            <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(1.8rem,4vw,2.6rem)', color:'#005a35', marginTop:8, marginBottom:20, lineHeight:1.2 }}>
              A Movement Built on Truth & Reform
            </h2>
            <p style={{ color:'#4b5563', lineHeight:1.8, marginBottom:16 }}>
              RTIFN (Relax, Tinubu Is Fixing Nigeria) is a pro-democracy, pro-reform movement dedicated to communicating President Bola Ahmed Tinubu's policy achievements to Nigerians at the grassroots level.
            </p>
            <p style={{ color:'#4b5563', lineHeight:1.8, marginBottom:28 }}>
              Our Osun State Chapter coordinates media, mobilization, and policy communication across all 30 local government areas and 332 wards in Osun State.
            </p>
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
            {[
              { title:'Our Vision', desc:'A Nigeria where every citizen understands and benefits from ongoing economic reforms.', emoji:'🎯' },
              { title:'Our Mission', desc:'To mobilize, educate, and empower Nigerians with factual policy information.', emoji:'📢' },
              { title:'Our Reach', desc:'Active in all 30 LGAs and 332 wards across Osun State.', emoji:'🌍' },
              { title:'Our Commitment', desc:'Transparent, factual, solution-oriented political communication.', emoji:'✅' },
            ].map(item => (
              <div key={item.title} style={{ background:'#f0fdf4', border:'1px solid #dcfce7', borderRadius:14, padding:20 }}>
                <div style={{ fontSize:'1.6rem', marginBottom:8 }}>{item.emoji}</div>
                <h3 style={{ fontWeight:700, color:'#005a35', fontSize:'.95rem', marginBottom:6 }}>{item.title}</h3>
                <p style={{ color:'#4b5563', fontSize:'.83rem', lineHeight:1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS PREVIEW ── */}
      <section style={{ padding:'96px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <span style={{ color:'#008751', fontWeight:600, fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.1em' }}>Track Record</span>
            <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(1.8rem,4vw,2.6rem)', color:'#005a35', marginTop:8, marginBottom:12 }}>Tinubu's Reform Milestones</h2>
            <p style={{ color:'#6b7280', maxWidth:560, margin:'0 auto' }}>A snapshot of key achievements since May 29, 2023.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:20, marginBottom:40 }}>
            {ACHIEVEMENTS.slice(0,6).map(a => (
              <div key={a.id} className="card" style={{ padding:24 }}>
                <div style={{ fontSize:'2.4rem', marginBottom:12 }}>{a.icon}</div>
                <h3 style={{ fontWeight:700, color:'#005a35', marginBottom:8, fontSize:'1.05rem' }}>{a.title}</h3>
                <p style={{ color:'#6b7280', fontSize:'.875rem', lineHeight:1.6 }}>{a.summary}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center' }}>
            <Link to="/achievements" className="btn-primary">View Full Achievements Tracker</Link>
          </div>
        </div>
      </section>

      {/* ── LATEST BLOG ── */}
      <section style={{ padding:'96px 0', background:'#fff' }}>
        <div className="section-wrap">
          <div style={{ display:'flex', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-between', gap:16, marginBottom:44 }}>
            <div>
              <span style={{ color:'#008751', fontWeight:600, fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.1em' }}>Latest News</span>
              <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(1.8rem,4vw,2.6rem)', color:'#005a35', marginTop:8 }}>From Our Media Hub</h2>
            </div>
            <Link to="/blog" className="btn-outline">View All Posts</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:24 }}>
            {latestPosts.map(post => {
              const colors = CATEGORY_COLORS[post.category] || { bg:'#f3f4f6', text:'#374151', border:'#d1d5db' }
              return (
                <Link key={post.id} to={`/blog/${post.id}`} className="card" style={{ textDecoration:'none', display:'block' }}>
                  <div className="green-gradient-bg" style={{ height:160, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                    <span style={{ fontFamily:'var(--font-heading)', fontSize:'5rem', fontWeight:900, color:'rgba(255,255,255,.15)' }}>
                      {post.title.charAt(0)}
                    </span>
                    <span className="badge" style={{ position:'absolute', bottom:12, left:12, background:colors.bg, color:colors.text, borderColor:colors.border }}>
                      {post.category}
                    </span>
                  </div>
                  <div style={{ padding:20 }}>
                    <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:700, color:'#111827', fontSize:'1.05rem', lineHeight:1.45, marginBottom:12 }}>
                      {post.title}
                    </h3>
                    <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.8rem', color:'#9ca3af', borderTop:'1px solid #f3f4f6', paddingTop:12 }}>
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString('en-NG', { month:'short', day:'numeric', year:'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="green-gradient-bg hero-pattern" style={{ padding:'96px 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,.08)' }} />
        <div style={{ position:'relative', zIndex:2, textAlign:'center', maxWidth:680, margin:'0 auto', padding:'0 24px' }}>
          <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem,5vw,3rem)', color:'#fff', fontWeight:900, marginBottom:18 }}>
            Join the Movement
          </h2>
          <p style={{ color:'rgba(255,255,255,.8)', fontSize:'1.1rem', marginBottom:36, lineHeight:1.7 }}>
            Be part of the grassroots revolution. Join RTIFN Osun State Chapter and help us tell Nigeria's reform story at every ward and household.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:14, justifyContent:'center' }}>
            <Link to="/join" className="btn-white">Register as a Member</Link>
            <Link to="/contact" style={{ display:'inline-block', border:'2px solid rgba(255,255,255,.6)', color:'#fff', padding:'12px 28px', borderRadius:10, fontWeight:600, textDecoration:'none', transition:'all .25s', fontSize:'.95rem' }}
              onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,.12)'}
              onMouseOut={e => e.currentTarget.style.background='transparent'}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
