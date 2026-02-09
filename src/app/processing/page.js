'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Processing() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const steps = [
        { icon: "📊", text: "Analyzing your responses..." },
        { icon: "🧠", text: "Building your unique profile..." },
        { icon: "🔍", text: "Matching with career database..." },
        { icon: "✨", text: "Generating personalized insights..." },
        { icon: "🎯", text: "Preparing your results..." }
    ];

    useEffect(() => {
        // Animate through steps
        const stepInterval = setInterval(() => {
            setCurrentStep(prev => {
                if (prev < steps.length - 1) return prev + 1;
                return prev;
            });
        }, 800);

        // Animate progress bar
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 100;
                return prev + 2;
            });
        }, 50);

        // Navigate to results after animation
        const timeout = setTimeout(() => {
            router.push('/results');
        }, 4500);

        return () => {
            clearInterval(stepInterval);
            clearInterval(progressInterval);
            clearTimeout(timeout);
        };
    }, [router, steps.length]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
            <div className="text-center px-6 max-w-lg">
                {/* Animated Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="mb-8"
                >
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity }
                        }}
                        className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl"
                    >
                        <span className="text-5xl">🎯</span>
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold mb-4"
                >
                    <span className="gradient-text">Analyzing Your Profile</span>
                </motion.h1>

                {/* Progress Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{progress}%</p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: index <= currentStep ? 1 : 0.3,
                                x: 0
                            }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className={`flex items-center gap-3 justify-center transition-all ${index === currentStep ? 'text-purple-600 font-medium' : 'text-gray-500'
                                }`}
                        >
                            <span className="text-xl">{step.icon}</span>
                            <span>{step.text}</span>
                            {index < currentStep && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="text-green-500"
                                >
                                    ✓
                                </motion.span>
                            )}
                            {index === currentStep && (
                                <motion.span
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="w-2 h-2 bg-purple-500 rounded-full"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Fun Fact */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 text-sm text-gray-400 italic"
                >
                    💡 Did you know? We're comparing your profile against 50+ career paths!
                </motion.p>
            </div>
        </main>
    );
}
