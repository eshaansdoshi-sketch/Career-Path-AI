'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Questions with emojis for friendliness
const questions = [
    // Category 1: Interests
    {
        category: "interests",
        categoryLabel: "✨ Let's learn about you",
        question: "Which subjects do you enjoy the most?",
        encouragement: "Choose the ones that feel most exciting — there are no wrong answers!",
        options: [
            { emoji: "📐", text: "Mathematics & Logic" },
            { emoji: "🧪", text: "Science & Experiments" },
            { emoji: "🎨", text: "Arts & Creative Expression" },
            { emoji: "🌍", text: "Social Studies & People" },
            { emoji: "💻", text: "Technology & Computers" }
        ]
    },
    {
        category: "interests",
        categoryLabel: "✨ Your interests matter",
        question: "How do you prefer to spend your free time?",
        encouragement: "Think about what genuinely makes you happy!",
        options: [
            { emoji: "📚", text: "Reading and learning new things" },
            { emoji: "🎮", text: "Playing games or sports" },
            { emoji: "🎭", text: "Creative projects and hobbies" },
            { emoji: "👥", text: "Hanging out with friends" },
            { emoji: "🔧", text: "Building or fixing things" }
        ]
    },
    {
        category: "interests",
        categoryLabel: "✨ Dream big",
        question: "What kind of impact do you want to make?",
        encouragement: "There's no right answer — just follow your heart!",
        options: [
            { emoji: "💡", text: "Invent new technologies" },
            { emoji: "❤️", text: "Help people directly" },
            { emoji: "🎨", text: "Create beautiful things" },
            { emoji: "📊", text: "Solve complex problems" },
            { emoji: "🌱", text: "Protect the environment" }
        ]
    },
    {
        category: "interests",
        categoryLabel: "✨ Curiosity check",
        question: "What topics could you talk about for hours?",
        encouragement: "Pick what genuinely fascinates you!",
        options: [
            { emoji: "🚀", text: "Space and technology" },
            { emoji: "🧬", text: "Science and discoveries" },
            { emoji: "💰", text: "Business and money" },
            { emoji: "🎬", text: "Movies, art, and culture" },
            { emoji: "🏥", text: "Health and wellness" }
        ]
    },
    // Category 2: Strengths
    {
        category: "strengths",
        categoryLabel: "💪 Your superpowers",
        question: "What do people usually come to you for help with?",
        encouragement: "Think about your natural talents!",
        options: [
            { emoji: "🧮", text: "Math problems and calculations" },
            { emoji: "✍️", text: "Writing and communication" },
            { emoji: "🤝", text: "Advice and listening" },
            { emoji: "🔧", text: "Technical and hands-on issues" },
            { emoji: "💡", text: "Creative ideas and solutions" }
        ]
    },
    {
        category: "strengths",
        categoryLabel: "💪 Problem-solving style",
        question: "How do you usually approach a challenging problem?",
        encouragement: "There's no wrong way to solve problems!",
        options: [
            { emoji: "📝", text: "Break it into smaller steps" },
            { emoji: "🎲", text: "Try different approaches" },
            { emoji: "👥", text: "Ask others for input" },
            { emoji: "📖", text: "Research and learn first" },
            { emoji: "💭", text: "Trust my intuition" }
        ]
    },
    {
        category: "strengths",
        categoryLabel: "💪 Learning style",
        question: "How do you learn new skills best?",
        encouragement: "Everyone learns differently — that's what makes you unique!",
        options: [
            { emoji: "📚", text: "Reading and studying" },
            { emoji: "👀", text: "Watching demonstrations" },
            { emoji: "🖐️", text: "Hands-on practice" },
            { emoji: "💬", text: "Discussing with others" },
            { emoji: "🎯", text: "Trial and error" }
        ]
    },
    {
        category: "strengths",
        categoryLabel: "💪 Under pressure",
        question: "How do you perform under tight deadlines?",
        encouragement: "Be honest — self-awareness is a strength!",
        options: [
            { emoji: "🔥", text: "I thrive under pressure" },
            { emoji: "📋", text: "I plan carefully to avoid stress" },
            { emoji: "😰", text: "I get stressed but push through" },
            { emoji: "👥", text: "I work better with team support" },
            { emoji: "⏰", text: "I need buffer time to do my best" }
        ]
    },
    // Category 3: Work Style
    {
        category: "workstyle",
        categoryLabel: "🏢 Your ideal workspace",
        question: "What's your ideal work environment?",
        encouragement: "Imagine your perfect day at work!",
        options: [
            { emoji: "🏠", text: "Quiet space, working alone" },
            { emoji: "👥", text: "Collaborative team setting" },
            { emoji: "🌳", text: "Outdoors or on the move" },
            { emoji: "🎨", text: "Creative, flexible studio" },
            { emoji: "🧪", text: "Lab or research environment" }
        ]
    },
    {
        category: "workstyle",
        categoryLabel: "🏢 Team dynamics",
        question: "What role do you usually take in group projects?",
        encouragement: "Every role is valuable to the team!",
        options: [
            { emoji: "👑", text: "The leader who organizes" },
            { emoji: "💡", text: "The idea generator" },
            { emoji: "📋", text: "The planner and executor" },
            { emoji: "🤝", text: "The mediator and supporter" },
            { emoji: "🔍", text: "The researcher and fact-checker" }
        ]
    },
    {
        category: "workstyle",
        categoryLabel: "🏢 Risk appetite",
        question: "How do you feel about taking risks?",
        encouragement: "Both caution and boldness have their place!",
        options: [
            { emoji: "🚀", text: "Love big risks, big rewards" },
            { emoji: "⚖️", text: "Calculated risks are good" },
            { emoji: "🛡️", text: "Prefer stability and safety" },
            { emoji: "📊", text: "Depends on the data" },
            { emoji: "🎲", text: "I'm flexible about risk" }
        ]
    },
    {
        category: "workstyle",
        categoryLabel: "🏢 Work-life balance",
        question: "How important is work-life balance to you?",
        encouragement: "Your priorities matter!",
        options: [
            { emoji: "⚖️", text: "Essential — I need boundaries" },
            { emoji: "🔥", text: "I'll work hard when needed" },
            { emoji: "🎯", text: "Balance career and personal goals" },
            { emoji: "💼", text: "Career comes first for now" },
            { emoji: "🌴", text: "Flexibility is most important" }
        ]
    },
    // Category 4: Personality
    {
        category: "personality",
        categoryLabel: "🌟 Who you are",
        question: "How would your friends describe you?",
        encouragement: "Embrace your personality!",
        options: [
            { emoji: "🎉", text: "Outgoing and energetic" },
            { emoji: "🤔", text: "Thoughtful and analytical" },
            { emoji: "❤️", text: "Caring and empathetic" },
            { emoji: "🎨", text: "Creative and unique" },
            { emoji: "💪", text: "Determined and driven" }
        ]
    },
    {
        category: "personality",
        categoryLabel: "🌟 Social energy",
        question: "What energizes you more?",
        encouragement: "Both introverts and extroverts have superpowers!",
        options: [
            { emoji: "🎊", text: "Being around people" },
            { emoji: "🧘", text: "Quiet time alone" },
            { emoji: "👥", text: "Small group of close friends" },
            { emoji: "🎭", text: "Depends on my mood" },
            { emoji: "💻", text: "Online interactions" }
        ]
    },
    {
        category: "personality",
        categoryLabel: "🌟 Decision style",
        question: "How do you make important decisions?",
        encouragement: "Trust your process!",
        options: [
            { emoji: "❤️", text: "Follow my heart and gut" },
            { emoji: "🧠", text: "Logic and careful analysis" },
            { emoji: "👥", text: "Consult trusted friends" },
            { emoji: "📊", text: "Research all options first" },
            { emoji: "⏳", text: "Take time to reflect" }
        ]
    },
    {
        category: "personality",
        categoryLabel: "🌟 Motivation",
        question: "What motivates you to work hard?",
        encouragement: "Understanding your motivation is key!",
        options: [
            { emoji: "💰", text: "Financial success" },
            { emoji: "🏆", text: "Recognition and achievement" },
            { emoji: "❤️", text: "Helping others" },
            { emoji: "📚", text: "Learning and growth" },
            { emoji: "🎨", text: "Creating something meaningful" }
        ]
    },
    // Category 5: Skills
    {
        category: "skills",
        categoryLabel: "🛠️ Your skill set",
        question: "Rate your comfort with technology:",
        encouragement: "Be honest — we're here to help you grow!",
        type: "rating",
        skill: "Technical Skills"
    },
    {
        category: "skills",
        categoryLabel: "🛠️ Communication",
        question: "Rate your written and verbal communication:",
        encouragement: "Communication is a learnable skill!",
        type: "rating",
        skill: "Communication"
    },
    {
        category: "skills",
        categoryLabel: "🛠️ Creativity",
        question: "Rate your creative thinking ability:",
        encouragement: "Creativity shows up in many ways!",
        type: "rating",
        skill: "Creativity"
    },
    {
        category: "skills",
        categoryLabel: "🛠️ Leadership",
        question: "Rate your leadership experience:",
        encouragement: "Leadership can be developed over time!",
        type: "rating",
        skill: "Leadership"
    },
    {
        category: "skills",
        categoryLabel: "🛠️ Problem Solving",
        question: "Rate your analytical problem-solving:",
        encouragement: "This is the final question — you're almost there!",
        type: "rating",
        skill: "Analytical Thinking"
    }
];

const categoryInfo = {
    interests: { name: "Interests", icon: "✨", color: "#7c3aed" },
    strengths: { name: "Strengths", icon: "💪", color: "#3b82f6" },
    workstyle: { name: "Work Style", icon: "🏢", color: "#10b981" },
    personality: { name: "Personality", icon: "🌟", color: "#f59e0b" },
    skills: { name: "Skills", icon: "🛠️", color: "#ec4899" }
};

export default function Assessment() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);

    const totalQuestions = questions.length;
    const progress = Math.round((currentQuestion / totalQuestions) * 100);
    const currentQ = questions[currentQuestion];
    const category = categoryInfo[currentQ.category];

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    const handleNext = () => {
        if (selectedOption === null) return;

        const newAnswers = {
            ...answers,
            [currentQuestion]: selectedOption
        };
        setAnswers(newAnswers);
        setSelectedOption(null);

        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            localStorage.setItem('careerAnswers', JSON.stringify(newAnswers));
            router.push('/processing');
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(answers[currentQuestion - 1] ?? null);
        }
    };

    const handleRating = (rating) => {
        setSelectedOption(rating);
    };

    return (
        <main
            className="min-h-screen"
            style={{
                background: 'linear-gradient(180deg, #f6f7ff 0%, #ffffff 60%)',
                backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(124,58,237,0.08), transparent 35%),
          radial-gradient(circle at 90% 80%, rgba(56,189,248,0.08), transparent 35%)
        `
            }}
        >
            {/* ==================== TOP BAR ==================== */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #f0f0f0'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                        {/* Logo */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '140px' }}>
                            <span style={{ fontSize: '20px' }}>🎓</span>
                            <span style={{ fontSize: '16px', fontWeight: '600', color: '#7c3aed' }}>CareerPath AI</span>
                        </div>

                        {/* Progress Bar */}
                        <div style={{ flex: 1, maxWidth: '400px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    flex: 1,
                                    height: '8px',
                                    background: '#e5e7eb',
                                    borderRadius: '6px',
                                    overflow: 'hidden'
                                }}>
                                    <motion.div
                                        style={{
                                            height: '100%',
                                            background: 'linear-gradient(90deg, #7c3aed, #22d3ee)',
                                            borderRadius: '6px'
                                        }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500', minWidth: '80px' }}>
                                    {progress}% Complete
                                </span>
                            </div>
                        </div>

                        {/* Exit */}
                        <Link
                            href="/"
                            style={{ fontSize: '13px', color: '#9ca3af', textDecoration: 'none' }}
                        >
                            Exit
                        </Link>
                    </div>
                </div>
            </div>

            {/* ==================== MAIN CONTENT ==================== */}
            <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
                <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Question Card */}
                            <div style={{
                                background: 'white',
                                borderRadius: '20px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                                padding: '40px',
                                borderTop: `4px solid ${category.color}`
                            }}>

                                {/* Category Label */}
                                <div style={{
                                    fontSize: '14px',
                                    color: category.color,
                                    fontWeight: '600',
                                    marginBottom: '12px'
                                }}>
                                    {currentQ.categoryLabel}
                                </div>

                                {/* Question */}
                                <h2 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    color: '#1a1a2e',
                                    marginBottom: '8px',
                                    lineHeight: '1.3'
                                }}>
                                    {currentQ.question}
                                </h2>

                                {/* Encouragement */}
                                <p style={{
                                    fontSize: '15px',
                                    color: '#9ca3af',
                                    marginBottom: '28px'
                                }}>
                                    {currentQ.encouragement}
                                </p>

                                {/* Options or Rating */}
                                {currentQ.type === 'rating' ? (
                                    // Rating Scale
                                    <div>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginBottom: '12px'
                                        }}>
                                            <span style={{ fontSize: '13px', color: '#9ca3af' }}>Beginner</span>
                                            <span style={{ fontSize: '13px', color: '#9ca3af' }}>Expert</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '12px' }}>
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <button
                                                    key={rating}
                                                    onClick={() => handleRating(rating)}
                                                    style={{
                                                        flex: 1,
                                                        padding: '20px',
                                                        borderRadius: '14px',
                                                        border: selectedOption === rating
                                                            ? '2px solid #7c3aed'
                                                            : '2px solid #f1f1f1',
                                                        background: selectedOption === rating
                                                            ? '#f3e8ff'
                                                            : 'white',
                                                        cursor: 'pointer',
                                                        fontSize: '24px',
                                                        fontWeight: '700',
                                                        color: selectedOption === rating ? '#7c3aed' : '#374151',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    {rating}
                                                </button>
                                            ))}
                                        </div>
                                        <div style={{
                                            textAlign: 'center',
                                            marginTop: '16px',
                                            fontSize: '14px',
                                            color: '#7c3aed',
                                            fontWeight: '500'
                                        }}>
                                            {currentQ.skill}
                                        </div>
                                    </div>
                                ) : (
                                    // Options List
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        {currentQ.options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleOptionSelect(index)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '14px',
                                                    padding: '16px 20px',
                                                    borderRadius: '14px',
                                                    border: selectedOption === index
                                                        ? '2px solid #7c3aed'
                                                        : '2px solid #f1f1f1',
                                                    background: selectedOption === index
                                                        ? '#f3e8ff'
                                                        : 'white',
                                                    cursor: 'pointer',
                                                    textAlign: 'left',
                                                    fontSize: '16px',
                                                    fontWeight: '500',
                                                    color: '#374151',
                                                    transition: 'all 0.2s ease',
                                                    transform: selectedOption === index ? 'translateY(-2px)' : 'none'
                                                }}
                                                className="option-button"
                                            >
                                                <span style={{ fontSize: '22px' }}>{option.emoji}</span>
                                                <span>{option.text}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Navigation */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: '32px',
                                    paddingTop: '24px',
                                    borderTop: '1px solid #f0f0f0'
                                }}>
                                    <button
                                        onClick={handleBack}
                                        disabled={currentQuestion === 0}
                                        style={{
                                            padding: '12px 20px',
                                            borderRadius: '10px',
                                            border: '1px solid #e5e7eb',
                                            background: 'white',
                                            color: currentQuestion === 0 ? '#d1d5db' : '#6b7280',
                                            cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}
                                    >
                                        ← Back
                                    </button>

                                    <span style={{ fontSize: '14px', color: '#9ca3af' }}>
                                        {currentQuestion + 1} of {totalQuestions}
                                    </span>

                                    <button
                                        onClick={handleNext}
                                        disabled={selectedOption === null}
                                        style={{
                                            padding: '12px 24px',
                                            borderRadius: '10px',
                                            background: selectedOption !== null
                                                ? 'linear-gradient(90deg, #7c3aed, #6d28d9)'
                                                : '#e5e7eb',
                                            color: selectedOption !== null ? 'white' : '#9ca3af',
                                            border: 'none',
                                            cursor: selectedOption !== null ? 'pointer' : 'not-allowed',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}
                                    >
                                        {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Category Progress Pills */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '32px',
                        flexWrap: 'wrap'
                    }}>
                        {Object.entries(categoryInfo).map(([key, info]) => {
                            const categoryQuestions = questions.filter(q => q.category === key);
                            const startIndex = questions.findIndex(q => q.category === key);
                            const isActive = currentQ.category === key;
                            const isPast = currentQuestion > startIndex + categoryQuestions.length - 1;

                            return (
                                <div
                                    key={key}
                                    style={{
                                        padding: '8px 14px',
                                        borderRadius: '20px',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        background: isActive ? info.color : isPast ? '#e5e7eb' : '#f3f4f6',
                                        color: isActive ? 'white' : isPast ? '#6b7280' : '#9ca3af',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}
                                >
                                    <span>{info.icon}</span>
                                    <span>{info.name}</span>
                                    {isPast && <span>✓</span>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Hover Styles */}
            <style jsx global>{`
        .option-button:hover {
          border-color: #7c3aed !important;
          background: #faf7ff !important;
          transform: translateY(-2px);
        }
      `}</style>
        </main>
    );
}
