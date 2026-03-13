import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About' },
  { to: '/executives',  label: 'Executives' },
  { to: '/blog',        label: 'Blog' },
  { to: '/achievements',label: 'Achievements' },
  { to: '/events',      label: 'Events' },
  { to: '/gallery',     label: 'Gallery' },
  { to: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all .3s',
      background: scrolled ? '#fff' : 'transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.10)' : 'none',
      padding: scrolled ? '10px 0' : '18px 0',
    }}>
      <div className="section-wrap" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
          <div style={{
            width:40, height:40, borderRadius:'50%', background:'#008751',
            border:'2px solid #00a862', display:'flex', alignItems:'center', justifyContent:'center',
            flexShrink:0,
          }}>
            <span style={{ color:'#fff', fontWeight:700, fontSize:10, fontFamily:'var(--font-body)' }}>RTIFN</span>
          </div>
          <div>
            <p style={{ fontWeight:700, fontSize:'.9rem', lineHeight:1.2, color: scrolled ? '#005a35' : '#fff', transition:'color .3s' }}>RTIFN Osun</p>
            <p style={{ fontSize:'.7rem', color: scrolled ? '#6b7280' : 'rgba(255,255,255,.65)', transition:'color .3s' }}>Osun State Chapter</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display:'flex', alignItems:'center', gap:2 }}>
          {NAV_LINKS.slice(0,7).map(l => (
            <Link key={l.to} to={l.to} style={{
              padding:'8px 12px', borderRadius:8, fontSize:'.88rem', fontWeight:500,
              textDecoration:'none', transition:'all .2s',
              color: scrolled ? '#374151' : 'rgba(255,255,255,.9)',
              background: location.pathname === l.to ? (scrolled ? '#f0fdf4' : 'rgba(255,255,255,.12)') : 'transparent',
            }}>
              {l.label}
            </Link>
          ))}
          <Link to="/join" className="btn-primary" style={{ marginLeft:8, padding:'9px 20px', fontSize:'.88rem' }}>
            Join RTIFN
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hide-desktop"
          onClick={() => setOpen(o => !o)}
          style={{ background:'none', border:'none', cursor:'pointer', padding:8, color: scrolled ? '#374151' : '#fff' }}
          aria-label="Toggle menu"
        >
          {open
            ? <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background:'#fff', margin:'8px 16px 0', borderRadius:14,
          boxShadow:'0 8px 40px rgba(0,0,0,.14)', overflow:'hidden',
          border:'1px solid #e5e7eb',
        }}>
          {NAV_LINKS.map((l, i) => (
            <Link key={l.to} to={l.to} style={{
              display:'block', padding:'14px 20px', textDecoration:'none',
              color: location.pathname === l.to ? '#008751' : '#374151',
              fontWeight: location.pathname === l.to ? 600 : 400,
              borderBottom: i < NAV_LINKS.length - 1 ? '1px solid #f3f4f6' : 'none',
              background: location.pathname === l.to ? '#f0fdf4' : 'transparent',
              fontSize:'.95rem',
            }}>
              {l.label}
            </Link>
          ))}
          <div style={{ padding:14 }}>
            <Link to="/join" className="btn-primary" style={{ display:'block', textAlign:'center' }}>Join RTIFN</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
