'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { careers, getCategories } from '@/lib/careerData';

export default function Careers() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDemand, setSelectedDemand] = useState('All');
    const [expandedCareer, setExpandedCareer] = useState(null);

    const categories = ['All', ...getCategories()];
    const demandLevels = ['All', 'Very High', 'High', 'Medium'];

    const filteredCareers = useMemo(() => {
        return careers.filter(career => {
            const matchesSearch = career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                career.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || career.category === selectedCategory;
            const matchesDemand = selectedDemand === 'All' || career.demand === selectedDemand;

            return matchesSearch && matchesCategory && matchesDemand;
        });
    }, [searchQuery, selectedCategory, selectedDemand]);

    return (
        <main
            className="min-h-screen"
            style={{
                background: 'linear-gradient(180deg, #f6f7ff 0%, #ffffff 55%)',
            }}
        >
            {/* Header */}
            <nav style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #f0f0f0',
                position: 'sticky',
                top: 0,
                zIndex: 50
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <span style={{ fontSize: '24px' }}>🎓</span>
                        <span style={{ fontSize: '18px', fontWeight: '700', color: '#7c3aed' }}>CareerPath AI</span>
                    </Link>
                    <Link
                        href="/assessment"
                        style={{
                            background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '14px'
                        }}
                    >
                        Take Assessment
                    </Link>
                </div>
            </nav>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px 80px' }}>

                {/* ==================== HERO SECTION ==================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        alignItems: 'center',
                        gap: '40px',
                        marginBottom: '40px'
                    }}
                    className="hero-grid"
                >
                    <div>
                        <h1 style={{ fontSize: '42px', fontWeight: '700', color: '#1a1a2e', lineHeight: '1.2', marginBottom: '16px' }}>
                            Explore <span style={{ color: '#7c3aed' }}>Career Paths</span> That Fit Your Future
                        </h1>
                        <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '500px' }}>
                            Browse careers by your interests, skills, and job demand. Discover what excites you.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '48px' }} className="hero-icons">
                        <span>🎓</span>
                        <span>🧭</span>
                        <span>🚀</span>
                    </div>
                </motion.div>

                {/* ==================== GUIDANCE STRIP ==================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        background: 'linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%)',
                        borderRadius: '16px',
                        padding: '20px 24px',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '16px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '24px' }}>💡</span>
                        <span style={{ fontSize: '15px', color: '#4b5563' }}>
                            <strong>Not sure where to start?</strong> Take our career assessment to get personalized matches.
                        </span>
                    </div>
                    <Link
                        href="/assessment"
                        style={{
                            background: '#7c3aed',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '10px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '14px'
                        }}
                    >
                        Take Career Quiz
                    </Link>
                </motion.div>

                {/* ==================== SEARCH & FILTERS (SOFT CONTAINER) ==================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '16px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        marginBottom: '30px'
                    }}
                >
                    {/* Search Bar */}
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Search careers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '14px 16px 14px 48px',
                                borderRadius: '12px',
                                border: '2px solid #f0f0f0',
                                fontSize: '16px',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                        />
                        <svg
                            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#9ca3af' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Filter Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                        {/* Category Filter */}
                        <div style={{ flex: 1, minWidth: '280px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#6b7280', marginBottom: '10px' }}>
                                Category
                            </label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            transition: 'all 0.2s',
                                            background: selectedCategory === category ? '#7c3aed' : '#f3f4f6',
                                            color: selectedCategory === category ? 'white' : '#4b5563'
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Demand Filter */}
                        <div style={{ minWidth: '200px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#6b7280', marginBottom: '10px' }}>
                                Job Demand
                            </label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {demandLevels.map(demand => (
                                    <button
                                        key={demand}
                                        onClick={() => setSelectedDemand(demand)}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            transition: 'all 0.2s',
                                            background: selectedDemand === demand ? '#10b981' : '#f3f4f6',
                                            color: selectedDemand === demand ? 'white' : '#4b5563'
                                        }}
                                    >
                                        {demand}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ==================== RESULTS COUNT ==================== */}
                <div style={{ marginBottom: '20px', fontSize: '15px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>🎯</span>
                    <span>Showing <strong style={{ color: '#1a1a2e' }}>{filteredCareers.length}</strong> career paths based on your filters</span>
                </div>

                {/* ==================== CAREER GRID ==================== */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {filteredCareers.map((career, index) => (
                        <motion.div
                            key={career.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.03 }}
                            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                            style={{
                                background: 'white',
                                borderRadius: '18px',
                                padding: '24px',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
                                transition: 'all 0.25s ease',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Header Row */}
                            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '40px' }}>{career.icon}</span>
                                    <div>
                                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', margin: 0 }}>{career.name}</h3>
                                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>{career.category}</span>
                                    </div>
                                </div>
                                <span style={{
                                    padding: '6px 12px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    background: career.demand === 'Very High' ? '#dcfce7' : career.demand === 'High' ? '#e0f2fe' : '#f3f4f6',
                                    color: career.demand === 'Very High' ? '#166534' : career.demand === 'High' ? '#0369a1' : '#374151'
                                }}>
                                    {career.demand}
                                </span>
                            </div>

                            {/* Description */}
                            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', marginBottom: '16px' }}>
                                {career.description.slice(0, 100)}...
                            </p>

                            {/* Stats Row */}
                            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '14px', color: '#4b5563' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span>💰</span>
                                    <span>{career.salary}</span>
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span>📈</span>
                                    <span style={{ color: '#10b981', fontWeight: '600' }}>{career.growth}</span>
                                </span>
                            </div>

                            {/* Learn More Button */}
                            <button
                                onClick={() => setExpandedCareer(expandedCareer === career.id ? null : career.id)}
                                style={{
                                    background: '#f3e8ff',
                                    color: '#7c3aed',
                                    padding: '10px 16px',
                                    borderRadius: '10px',
                                    border: 'none',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {expandedCareer === career.id ? 'Show Less' : 'Learn More'}
                                <svg
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        transition: 'transform 0.2s',
                                        transform: expandedCareer === career.id ? 'rotate(180deg)' : 'rotate(0)'
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Expanded Content */}
                            {expandedCareer === career.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    style={{
                                        marginTop: '20px',
                                        paddingTop: '20px',
                                        borderTop: '1px solid #f0f0f0'
                                    }}
                                >
                                    <div style={{ marginBottom: '16px' }}>
                                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Education Required</h4>
                                        <p style={{ fontSize: '14px', color: '#6b7280' }}>{career.education}</p>
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Key Skills</h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                            {career.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        padding: '6px 12px',
                                                        background: '#f3e8ff',
                                                        color: '#7c3aed',
                                                        borderRadius: '20px',
                                                        fontSize: '13px',
                                                        fontWeight: '500'
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href="/assessment"
                                        style={{
                                            display: 'block',
                                            textAlign: 'center',
                                            background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Check Your Match
                                    </Link>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredCareers.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '80px 20px' }}
                    >
                        <span style={{ fontSize: '64px', display: 'block', marginBottom: '16px' }}>🔍</span>
                        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px' }}>No careers found</h3>
                        <p style={{ color: '#6b7280' }}>Try adjusting your filters or search query.</p>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        marginTop: '60px',
                        background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                        borderRadius: '24px',
                        padding: '48px',
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>Not Sure Which Career is Right?</h2>
                    <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 32px' }}>
                        Take our AI-powered assessment to get personalized career recommendations based on your unique profile.
                    </p>
                    <Link
                        href="/assessment"
                        style={{
                            display: 'inline-block',
                            background: 'white',
                            color: '#7c3aed',
                            padding: '14px 32px',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '16px',
                            textDecoration: 'none'
                        }}
                    >
                        Start Your Assessment
                    </Link>
                </motion.div>
            </div>

            {/* Footer */}
            <footer style={{
                background: '#1a1a2e',
                color: '#9ca3af',
                padding: '32px 20px',
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '14px' }}>© 2026 CareerPath AI. Empowering students to find their perfect career.</p>
            </footer>

            {/* Responsive Styles */}
            <style jsx global>{`
                @media (max-width: 768px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                    .hero-icons {
                        justify-content: center;
                    }
                }
            `}</style>
        </main>
    );
}
