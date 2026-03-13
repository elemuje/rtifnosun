import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { BLOG_POSTS, CATEGORY_COLORS } from '../data/content'

const CATEGORIES = ['All','Tinubu Achievements','Economic Reforms','RTIFN Activities','Policy Explainers','Press Releases','Grassroots Mobilization']

// ─────────────────────────────────────────────
//  BLOG LIST
// ─────────────────────────────────────────────
export function Blog() {
  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'
  const filtered = activeCategory === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === activeCategory)

  return (
    <>
      <div className="page-header green-gradient-bg hero-pattern">
        <div className="page-header-content">
          <p className="page-header-eyebrow">Media Hub</p>
          <h1>News & Blog</h1>
          <p>Policy updates, reform news, and RTIFN activities from Osun State</p>
        </div>
      </div>

      <section style={{ padding:'80px 0', background:'#f9fafb' }}>
        <div className="section-wrap">
          {/* Category filter */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:40 }}>
            {CATEGORIES.map(cat => (
              <Link
                key={cat}
                to={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                style={{
                  padding:'7px 18px', borderRadius:999, fontSize:'.85rem', fontWeight:600,
                  textDecoration:'none', border:'1.5px solid',
                  transition:'all .2s',
                  background: activeCategory === cat ? '#008751' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#374151',
                  borderColor: activeCategory === cat ? '#008751' : '#d1d5db',
                }}
              >
                {cat}
              </Link>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign:'center', padding:'80px 20px' }}>
              <p style={{ color:'#9ca3af', fontSize:'1.1rem', marginBottom:20 }}>No posts found in this category yet.</p>
              <Link to="/blog" className="btn-primary">View All Posts</Link>
            </div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:24 }}>
              {filtered.map(post => {
                const c = CATEGORY_COLORS[post.category] || { bg:'#f3f4f6', text:'#374151', border:'#d1d5db' }
                return (
                  <Link key={post.id} to={`/blog/${post.id}`} className="card" style={{ textDecoration:'none', display:'block' }}>
                    <div className="green-gradient-bg" style={{ height:160, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                      <span style={{ fontFamily:'var(--font-heading)', fontSize:'5rem', fontWeight:900, color:'rgba(255,255,255,.15)' }}>{post.title.charAt(0)}</span>
                      <span className="badge" style={{ position:'absolute', bottom:12, left:12, background:c.bg, color:c.text, borderColor:c.border }}>{post.category}</span>
                    </div>
                    <div style={{ padding:20 }}>
                      <h2 style={{ fontFamily:'var(--font-heading)', fontWeight:700, color:'#111827', fontSize:'1.05rem', lineHeight:1.5, marginBottom:12 }}>
                        {post.title}
                      </h2>
                      <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.8rem', color:'#9ca3af', borderTop:'1px solid #f3f4f6', paddingTop:12 }}>
                        <span>👤 {post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString('en-NG',{month:'short',day:'numeric',year:'numeric'})}</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
//  BLOG POST DETAIL
// ─────────────────────────────────────────────
export function BlogPost() {
  const { id } = useParams()
  const post = BLOG_POSTS.find(p => p.id === id)

  if (!post) {
    return (
      <div style={{ paddingTop:120, textAlign:'center' }}>
        <h1 style={{ color:'#005a35' }}>Post not found</h1>
        <Link to="/blog" className="btn-primary" style={{ marginTop:20, display:'inline-block' }}>Back to Blog</Link>
      </div>
    )
  }

  const c = CATEGORY_COLORS[post.category] || { bg:'#f3f4f6', text:'#374151', border:'#d1d5db' }
  const shareUrl = encodeURIComponent(window.location.href)
  const shareTitle = encodeURIComponent(post.title)

  return (
    <article>
      {/* Article hero */}
      <div className="green-gradient-bg hero-pattern" style={{ paddingTop:96, paddingBottom:64 }}>
        <div style={{ maxWidth:800, margin:'0 auto', padding:'0 24px' }}>
          <Link to="/blog" style={{ color:'#86efac', fontSize:'.875rem', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, marginBottom:24, transition:'color .2s' }}
            onMouseOver={e => e.currentTarget.style.color='#fff'}
            onMouseOut={e => e.currentTarget.style.color='#86efac'}>
            ← Back to Blog
          </Link>
          <span className="badge" style={{ background:c.bg, color:c.text, borderColor:c.border, display:'block', width:'fit-content', marginBottom:16 }}>
            {post.category}
          </span>
          <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(1.8rem,4vw,2.8rem)', color:'#fff', fontWeight:900, lineHeight:1.2, marginBottom:20 }}>
            {post.title}
          </h1>
          <div style={{ display:'flex', flexWrap:'wrap', gap:16, color:'rgba(255,255,255,.65)', fontSize:'.875rem' }}>
            <span>👤 {post.author}</span>
            <span>📅 {new Date(post.date).toLocaleDateString('en-NG',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'56px 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:32 }}>
          <div style={{ maxWidth:740 }}>
            <div className="prose">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Share */}
            <div style={{ marginTop:48, paddingTop:28, borderTop:'1px solid #e5e7eb' }}>
              <p style={{ fontWeight:600, color:'#374151', fontSize:'.875rem', marginBottom:14 }}>Share this article:</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                {[
                  { label:'Share on X', href:`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`, bg:'#000' },
                  { label:'Share on Facebook', href:`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, bg:'#1877F2' },
                  { label:'Share on WhatsApp', href:`https://wa.me/?text=${shareTitle}%20${shareUrl}`, bg:'#25D366' },
                ].map(btn => (
                  <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
                    style={{ background:btn.bg, color:'#fff', padding:'8px 18px', borderRadius:8, fontSize:'.82rem', fontWeight:600, textDecoration:'none', transition:'opacity .2s', display:'inline-block' }}
                    onMouseOver={e => e.currentTarget.style.opacity='.8'}
                    onMouseOut={e => e.currentTarget.style.opacity='1'}>
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
