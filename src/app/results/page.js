'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTopCareerMatches, buildStudentProfile } from '@/lib/matchingEngine';

export default function Results() {
    const [matches, setMatches] = useState([]);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedAnswers = localStorage.getItem('careerAnswers');
        if (storedAnswers) {
            const answers = JSON.parse(storedAnswers);
            const studentProfile = buildStudentProfile(answers);
            const careerMatches = getTopCareerMatches(studentProfile, 5);
            setProfile(studentProfile);
            setMatches(careerMatches);
        }
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '24px' }}>Loading your results...</div>
            </div>
        );
    }

    if (matches.length === 0) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                textAlign: 'center'
            }}>
                <span style={{ fontSize: '64px', marginBottom: '24px' }}>🎯</span>
                <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>No Results Yet</h1>
                <p style={{ color: '#6b7280', marginBottom: '32px' }}>Take the assessment first to discover your ideal career path!</p>
                <Link
                    href="/assessment"
                    style={{
                        background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                        color: 'white',
                        padding: '14px 28px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: '600'
                    }}
                >
                    Start Assessment
                </Link>
            </div>
        );
    }

    const topMatch = matches[0];
    const otherMatches = matches.slice(1);
    // explanation and skillsToDevelope are already computed by getTopCareerMatches
    const explanation = topMatch.explanation || '';
    const skillsToDevlop = topMatch.skillsToDevelope || [];

    // Profile traits for visualization
    const traits = [
        { name: 'Analytical', value: Math.round((profile?.analytical || 0) * 100), color: '#7c3aed' },
        { name: 'Creativity', value: Math.round((profile?.creativity || 0) * 100), color: '#3b82f6' },
        { name: 'Communication', value: Math.round((profile?.communication || 0) * 100), color: '#10b981' },
        { name: 'Technical', value: Math.round((profile?.techSkill || 0) * 100), color: '#f59e0b' },
        { name: 'Leadership', value: Math.round((profile?.leadership || 0) * 100), color: '#ec4899' },
        { name: 'Empathy', value: Math.round((profile?.empathy || 0) * 100), color: '#14b8a6' },
    ];

    return (
        <main
            className="min-h-screen"
            style={{
                background: 'linear-gradient(180deg, #f6f7ff 0%, #ffffff 60%)',
                backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(124,58,237,0.06), transparent 35%),
          radial-gradient(circle at 90% 80%, rgba(56,189,248,0.06), transparent 35%)
        `
            }}
        >
            {/* Navigation */}
            <nav style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #f0f0f0',
                padding: '16px 0'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <span style={{ fontSize: '20px' }}>🎓</span>
                        <span style={{ fontSize: '16px', fontWeight: '600', color: '#7c3aed' }}>CareerPath AI</span>
                    </Link>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Link href="/careers" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '14px' }}>
                            Explore All Careers
                        </Link>
                        <Link href="/assessment" style={{ color: '#7c3aed', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
                            Retake Quiz
                        </Link>
                    </div>
                </div>
            </nav>

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', padding: '60px 0 40px' }}
                >
                    <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🎉</span>
                    <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#1a1a2e', marginBottom: '12px' }}>
                        Your Career Matches Are Ready!
                    </h1>
                    <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                        These careers match your strengths — explore where your future could go!
                    </p>
                </motion.div>

                {/* ==================== TOP MATCH CARD ==================== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                        borderRadius: '24px',
                        padding: '48px',
                        color: 'white',
                        boxShadow: '0 25px 60px rgba(124,58,237,0.35)',
                        marginBottom: '32px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Background decoration */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '200px',
                        height: '200px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-30px',
                        left: '20%',
                        width: '100px',
                        height: '100px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '50%'
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Badge */}
                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.2)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            fontWeight: '600',
                            marginBottom: '24px'
                        }}>
                            🏆 BEST MATCH FOR YOU
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center' }} className="top-match-grid">
                            {/* Left - Career Info */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                    <span style={{ fontSize: '56px' }}>{topMatch.icon}</span>
                                    <div>
                                        <div style={{ fontSize: '14px', opacity: 0.8 }}>{topMatch.category}</div>
                                        <h2 style={{ fontSize: '36px', fontWeight: '700', margin: 0 }}>{topMatch.name}</h2>
                                    </div>
                                </div>
                                <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6', maxWidth: '500px' }}>
                                    {topMatch.description}
                                </p>

                                {/* Stats */}
                                <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
                                    <div>
                                        <div style={{ fontSize: '13px', opacity: 0.7 }}>Salary Range</div>
                                        <div style={{ fontSize: '18px', fontWeight: '600' }}>{topMatch.salary}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px', opacity: 0.7 }}>Job Demand</div>
                                        <div style={{ fontSize: '18px', fontWeight: '600' }}>{topMatch.demand}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '13px', opacity: 0.7 }}>Growth</div>
                                        <div style={{ fontSize: '18px', fontWeight: '600' }}>{topMatch.growth}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Match % */}
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '72px',
                                    fontWeight: '800',
                                    lineHeight: '1',
                                    textShadow: '0 4px 20px rgba(0,0,0,0.2)'
                                }}>
                                    {topMatch.matchPercentage}%
                                </div>
                                <div style={{ fontSize: '16px', opacity: 0.8, marginTop: '8px' }}>Match Score</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ==================== WHY THIS FITS YOU ==================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        background: 'white',
                        borderRadius: '20px',
                        padding: '32px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        border: '1px solid #f0f0f0',
                        marginBottom: '32px'
                    }}
                >
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#1a1a2e',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span>💬</span> Why This Career Fits You
                    </h3>
                    <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.7' }}>
                        {explanation}
                    </p>

                    {/* Skills to Develop */}
                    {skillsToDevlop.length > 0 && (
                        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #f0f0f0' }}>
                            <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a2e', marginBottom: '12px' }}>
                                🚀 Skills to Develop
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {skillsToDevlop.map((skill, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            padding: '8px 14px',
                                            background: '#f3e8ff',
                                            color: '#7c3aed',
                                            borderRadius: '20px',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {skill.icon} {skill.skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* ==================== YOUR PROFILE ==================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        background: 'white',
                        borderRadius: '20px',
                        padding: '32px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                        border: '1px solid #f0f0f0',
                        marginBottom: '48px'
                    }}
                >
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#1a1a2e',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span>📊</span> Your Personality Profile
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="profile-grid">
                        {traits.map((trait, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>{trait.name}</span>
                                    <span style={{ fontSize: '14px', fontWeight: '600', color: trait.color }}>{trait.value}%</span>
                                </div>
                                <div style={{
                                    height: '10px',
                                    background: '#eee',
                                    borderRadius: '6px',
                                    overflow: 'hidden'
                                }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${trait.value}%` }}
                                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                                        style={{
                                            height: '100%',
                                            background: trait.color,
                                            borderRadius: '6px'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ==================== OTHER MATCHES ==================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ marginBottom: '80px' }}
                >
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#1a1a2e',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span>🎯</span> More Great Matches For You
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '20px'
                    }}>
                        {otherMatches.map((match, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    border: '1px solid #f0f0f0',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '40px' }}>{match.icon}</span>
                                    <span style={{
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        color: '#7c3aed',
                                        background: '#f3e8ff',
                                        padding: '4px 12px',
                                        borderRadius: '20px'
                                    }}>
                                        {match.matchPercentage}%
                                    </span>
                                </div>
                                <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '4px' }}>{match.category}</div>
                                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>
                                    {match.name}
                                </h4>
                                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                                    {match.description.slice(0, 100)}...
                                </p>
                                <div style={{ display: 'flex', gap: '16px', marginTop: '16px', fontSize: '13px', color: '#6b7280' }}>
                                    <span>💰 {match.salary}</span>
                                    <span>📈 {match.demand}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    style={{
                        background: '#f8faff',
                        borderRadius: '16px',
                        padding: '40px',
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}
                >
                    <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a2e', marginBottom: '12px' }}>
                        Want to explore more options?
                    </h3>
                    <p style={{ color: '#6b7280', marginBottom: '24px' }}>
                        Browse all 50+ careers in our database with detailed information.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            href="/careers"
                            style={{
                                background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                                color: 'white',
                                padding: '14px 28px',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '15px'
                            }}
                        >
                            Explore All Careers
                        </Link>
                        <Link
                            href="/assessment"
                            style={{
                                border: '1.5px solid #e5e7eb',
                                background: 'white',
                                color: '#374151',
                                padding: '14px 28px',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontWeight: '500',
                                fontSize: '15px'
                            }}
                        >
                            Retake Assessment
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Responsive Styles */}
            <style jsx global>{`
        @media (max-width: 768px) {
          .top-match-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .profile-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </main>
    );
}
