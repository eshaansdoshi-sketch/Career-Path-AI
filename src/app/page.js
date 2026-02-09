'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: "🎯",
      title: "Smart Questionnaire",
      description: "Answer engaging questions about your interests, strengths, and personality in an intuitive flow."
    },
    {
      icon: "🧠",
      title: "AI-Powered Analysis",
      description: "Our matching engine builds your unique profile and compares it against 50+ career paths."
    },
    {
      icon: "📊",
      title: "Personalized Matches",
      description: "Get ranked recommendations with match percentages and clear explanations."
    },
    {
      icon: "🚀",
      title: "Growth Roadmap",
      description: "Discover skills to develop and actionable steps to achieve your goals."
    }
  ];

  const stats = [
    { icon: "📚", value: "50+", label: "Career Paths" },
    { icon: "🎯", value: "95%", label: "Match Accuracy" },
    { icon: "👥", value: "10K+", label: "Students Helped" },
    { icon: "⭐", value: "4.9", label: "User Rating" }
  ];

  const steps = [
    { icon: "📝", title: "Take the Assessment", desc: "Answer questions about your interests and preferences." },
    { icon: "⚡", title: "AI Analyzes Profile", desc: "Our engine matches you against career paths." },
    { icon: "🎯", title: "Get Career Matches", desc: "Receive personalized recommendations." }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: '#ffffff' }}>

      {/* ==================== NAVIGATION ==================== */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>🎓</span>
              <span style={{ fontSize: '20px', fontWeight: '600', color: '#7c3aed' }}>CareerPath AI</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <Link href="/careers" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }} className="hidden sm:block hover:text-purple-600">
                Explore Careers
              </Link>
              <Link
                href="/assessment"
                style={{
                  background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section
        style={{
          background: 'linear-gradient(180deg, #f5f7ff 0%, #ffffff 60%)',
          position: 'relative',
          paddingTop: '100px',
          paddingBottom: '120px'
        }}
      >
        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.06), transparent 50%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '60px', alignItems: 'center' }} className="hero-grid">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{
                display: 'inline-block',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#7c3aed',
                background: 'rgba(124, 58, 237, 0.1)',
                marginBottom: '28px'
              }}>
                ✨ AI-Powered Guidance
              </span>

              <h1 style={{
                fontSize: '56px',
                fontWeight: '700',
                lineHeight: '1.1',
                marginBottom: '0',
                color: '#1a1a2e'
              }}>
                <span style={{ color: '#374151' }}>Discover Your</span>
                <br />
                <span style={{ color: '#7c3aed' }}>Ideal Career Path</span>
                <br />
                <span style={{ color: '#374151' }}>with AI</span>
              </h1>

              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#555',
                marginTop: '24px',
                marginBottom: '0',
                maxWidth: '480px'
              }}>
                An intelligent platform that analyzes your interests, strengths, and skills to recommend personalized career paths.
              </p>

              <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
                <Link
                  href="/assessment"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                    color: 'white',
                    padding: '14px 24px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    boxShadow: '0 8px 20px rgba(124, 58, 237, 0.25)'
                  }}
                >
                  Start Your Assessment
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/careers"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '14px 24px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    border: '1.5px solid #e5e7eb',
                    background: 'white',
                    color: '#374151'
                  }}
                >
                  Explore Careers
                </Link>
              </div>
            </motion.div>

            {/* Right - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div style={{
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                padding: '28px'
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  paddingBottom: '16px',
                  marginBottom: '20px',
                  borderBottom: '1px solid #eee'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(124, 58, 237, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '20px' }}>👤</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a2e' }}>Your Career Profile</div>
                    <div style={{ fontSize: '13px', color: '#9ca3af' }}>AI Analysis Complete</div>
                  </div>
                </div>

                {/* Skills Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                  {[
                    { label: 'Analytical', value: 85, color: '#7c3aed' },
                    { label: 'Creativity', value: 72, color: '#3b82f6' },
                    { label: 'Technical', value: 90, color: '#10b981' },
                    { label: 'Leadership', value: 68, color: '#f59e0b' },
                  ].map((skill, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '14px', color: '#6b7280' }}>{skill.label}</span>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a2e' }}>{skill.value}%</span>
                      </div>
                      <div style={{ height: '8px', background: '#eee', borderRadius: '6px', overflow: 'hidden' }}>
                        <motion.div
                          style={{ height: '100%', background: skill.color, borderRadius: '6px' }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.value}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top Match */}
                <div style={{ background: 'rgba(124, 58, 237, 0.06)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#7c3aed', fontWeight: '500', marginBottom: '6px' }}>🏆 Top Match</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '24px' }}>💻</span>
                      <span style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a2e' }}>Software Engineer</span>
                    </div>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#7c3aed' }}>94%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ==================== STATS - Inside Hero ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: '#f8faff',
              borderRadius: '16px',
              padding: '40px 20px',
              marginTop: '80px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', textAlign: 'center' }} className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 12px',
                    borderRadius: '12px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '22px' }}>{stat.icon}</span>
                  </div>
                  <div style={{ fontSize: '34px', fontWeight: '700', color: '#1a1a2e' }}>{stat.value}</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SPACER ==================== */}
      <div style={{ height: '120px' }} />

      {/* ==================== FEATURES SECTION ==================== */}
      <section style={{ background: '#fafbfc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500',
              color: '#7c3aed',
              background: 'rgba(124, 58, 237, 0.1)',
              marginBottom: '16px'
            }}>
              Features
            </span>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
              Intelligent Career Profiling
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>
              AI-powered insights to guide your future
            </p>
          </motion.div>

          {/* Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #f0f0f0'
                }}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(124, 58, 237, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '26px' }}>{feature.icon}</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#6b7280', margin: 0 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPACER ==================== */}
      <div style={{ height: '140px' }} />

      {/* ==================== HOW IT WORKS ==================== */}
      <section>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500',
              color: '#10b981',
              background: 'rgba(16, 185, 129, 0.1)',
              marginBottom: '16px'
            }}>
              Process
            </span>
            <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
              How It Works
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280' }}>
              Three simple steps to your ideal career
            </p>
          </motion.div>

          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', textAlign: 'center' }} className="steps-grid">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(124, 58, 237, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '32px' }}>{item.icon}</span>
                  </div>
                  <span style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#7c3aed',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    {index + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#6b7280', maxWidth: '260px', margin: '0 auto' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPACER ==================== */}
      <div style={{ height: '140px' }} />

      {/* ==================== CTA ==================== */}
      <section style={{ paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              borderRadius: '16px',
              padding: '64px 40px',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
              Ready to Find Your Path?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
              Join thousands of students who discovered their ideal career with our AI-powered guidance.
            </p>
            <Link
              href="/assessment"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                color: '#7c3aed',
                padding: '16px 32px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Start Your Free Assessment
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer style={{ background: '#111827', padding: '48px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>🎓</span>
              <span style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>CareerPath AI</span>
            </div>
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>
              © 2026 CareerPath AI. Empowering students to find their perfect career.
            </p>
            <div style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
              <Link href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy</Link>
              <Link href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms</Link>
              <Link href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </main>
  );
}
