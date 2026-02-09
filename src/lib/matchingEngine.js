// AI Matching Engine - Builds student profiles and matches to careers

import { careers } from './careerData';

// Question categories and their mappings to profile attributes
export const questionnaireData = {
    interests: {
        title: "🎯 Interests",
        subtitle: "What excites you?",
        questions: [
            {
                id: "int1",
                question: "Which subjects do you enjoy the most?",
                options: [
                    { text: "Mathematics & Logic", scores: { analytical: 0.3, dataOriented: 0.2 } },
                    { text: "Science & Experiments", scores: { analytical: 0.2, practical: 0.2 } },
                    { text: "Arts & Creative Expression", scores: { creativity: 0.3, independence: 0.1 } },
                    { text: "Social Studies & People", scores: { empathy: 0.2, peopleOriented: 0.2 } },
                    { text: "Technology & Computers", scores: { techSkill: 0.3, analytical: 0.1 } }
                ]
            },
            {
                id: "int2",
                question: "What do you prefer working with?",
                options: [
                    { text: "People - Helping and interacting", scores: { peopleOriented: 0.3, empathy: 0.2, communication: 0.1 } },
                    { text: "Data - Numbers and patterns", scores: { dataOriented: 0.3, analytical: 0.2 } },
                    { text: "Machines - Building and fixing", scores: { practical: 0.3, techSkill: 0.2 } },
                    { text: "Creative Ideas - Designing and innovating", scores: { creativity: 0.3, independence: 0.1 } }
                ]
            },
            {
                id: "int3",
                question: "Do you enjoy solving logical problems and puzzles?",
                options: [
                    { text: "Love it! I could do it all day", scores: { analytical: 0.4, dataOriented: 0.1 } },
                    { text: "Yes, I find them interesting", scores: { analytical: 0.25 } },
                    { text: "Sometimes, depends on my mood", scores: { analytical: 0.1 } },
                    { text: "Not really my thing", scores: { creativity: 0.1, empathy: 0.1 } }
                ]
            },
            {
                id: "int4",
                question: "What kind of projects excite you?",
                options: [
                    { text: "Building apps or websites", scores: { techSkill: 0.3, analytical: 0.1 } },
                    { text: "Creating art, music, or content", scores: { creativity: 0.3, independence: 0.1 } },
                    { text: "Organizing events or leading teams", scores: { leadership: 0.3, communication: 0.1 } },
                    { text: "Researching and analyzing information", scores: { analytical: 0.2, dataOriented: 0.2 } },
                    { text: "Helping others with their problems", scores: { empathy: 0.3, peopleOriented: 0.1 } }
                ]
            }
        ]
    },
    strengths: {
        title: "🧠 Strengths",
        subtitle: "What are you good at?",
        questions: [
            {
                id: "str1",
                question: "Which area do you feel most confident in?",
                options: [
                    { text: "Math and calculations", scores: { analytical: 0.3, dataOriented: 0.2 } },
                    { text: "Writing and expression", scores: { communication: 0.3, creativity: 0.1 } },
                    { text: "Design and visual thinking", scores: { creativity: 0.3, practical: 0.1 } },
                    { text: "Speaking and persuading", scores: { communication: 0.3, leadership: 0.1 } },
                    { text: "Building and making things", scores: { practical: 0.3, techSkill: 0.1 } }
                ]
            },
            {
                id: "str2",
                question: "How do you learn best?",
                options: [
                    { text: "Reading and researching", scores: { analytical: 0.2, dataOriented: 0.1, independence: 0.1 } },
                    { text: "Watching videos and demonstrations", scores: { creativity: 0.1, practical: 0.1 } },
                    { text: "Hands-on practice and experiments", scores: { practical: 0.3, techSkill: 0.1 } },
                    { text: "Discussing with others", scores: { communication: 0.2, peopleOriented: 0.2 } }
                ]
            },
            {
                id: "str3",
                question: "When working on a project, what role do you naturally take?",
                options: [
                    { text: "The leader who organizes everything", scores: { leadership: 0.4, communication: 0.1 } },
                    { text: "The creative one with ideas", scores: { creativity: 0.3, independence: 0.1 } },
                    { text: "The analyst who researches and plans", scores: { analytical: 0.3, dataOriented: 0.1 } },
                    { text: "The executor who gets things done", scores: { practical: 0.3, techSkill: 0.1 } },
                    { text: "The mediator who keeps everyone happy", scores: { empathy: 0.3, peopleOriented: 0.1 } }
                ]
            },
            {
                id: "str4",
                question: "What do others often compliment you on?",
                options: [
                    { text: "My problem-solving skills", scores: { analytical: 0.3, practical: 0.1 } },
                    { text: "My creativity and ideas", scores: { creativity: 0.3, independence: 0.1 } },
                    { text: "My ability to communicate", scores: { communication: 0.3, leadership: 0.1 } },
                    { text: "My kindness and understanding", scores: { empathy: 0.3, peopleOriented: 0.1 } },
                    { text: "My technical expertise", scores: { techSkill: 0.3, analytical: 0.1 } }
                ]
            }
        ]
    },
    workStyle: {
        title: "💼 Work Style",
        subtitle: "How do you like to work?",
        questions: [
            {
                id: "ws1",
                question: "What type of work environment appeals to you?",
                options: [
                    { text: "Stable corporate job with clear structure", scores: { practical: 0.2, dataOriented: 0.1 } },
                    { text: "High-risk, high-reward startup culture", scores: { leadership: 0.2, independence: 0.2, creativity: 0.1 } },
                    { text: "Flexible freelance or remote work", scores: { independence: 0.3, creativity: 0.1 } },
                    { text: "Field work with travel and variety", scores: { practical: 0.2, independence: 0.1 } }
                ]
            },
            {
                id: "ws2",
                question: "Do you prefer working in teams or independently?",
                options: [
                    { text: "Definitely in teams - I thrive on collaboration", scores: { peopleOriented: 0.3, communication: 0.1 } },
                    { text: "Mostly teams with some alone time", scores: { peopleOriented: 0.15, independence: 0.1 } },
                    { text: "Mostly alone with some team interaction", scores: { independence: 0.2, analytical: 0.1 } },
                    { text: "Independently - I do my best work alone", scores: { independence: 0.3, analytical: 0.1 } }
                ]
            },
            {
                id: "ws3",
                question: "Where would you prefer to work?",
                options: [
                    { text: "Office with colleagues around", scores: { peopleOriented: 0.2, communication: 0.1 } },
                    { text: "Remote from anywhere", scores: { independence: 0.3, techSkill: 0.1 } },
                    { text: "Out in the field or on-site", scores: { practical: 0.3, independence: 0.1 } },
                    { text: "Mix of office and remote (hybrid)", scores: { practical: 0.1, communication: 0.1 } }
                ]
            },
            {
                id: "ws4",
                question: "How do you handle pressure and deadlines?",
                options: [
                    { text: "I thrive under pressure - it motivates me", scores: { leadership: 0.2, practical: 0.2 } },
                    { text: "I prefer steady, planned work", scores: { analytical: 0.2, dataOriented: 0.1 } },
                    { text: "I can handle it but prefer flexibility", scores: { creativity: 0.1, independence: 0.1 } },
                    { text: "I need a calm, low-stress environment", scores: { empathy: 0.1, peopleOriented: 0.1 } }
                ]
            }
        ]
    },
    personality: {
        title: "🌍 Personality",
        subtitle: "Who are you?",
        questions: [
            {
                id: "per1",
                question: "Which word best describes you?",
                options: [
                    { text: "Analytical - I love to analyze and understand", scores: { analytical: 0.4, dataOriented: 0.1 } },
                    { text: "Creative - I see possibilities everywhere", scores: { creativity: 0.4, independence: 0.1 } },
                    { text: "Empathetic - I connect deeply with others", scores: { empathy: 0.4, peopleOriented: 0.1 } },
                    { text: "Practical - I focus on getting things done", scores: { practical: 0.4, techSkill: 0.1 } }
                ]
            },
            {
                id: "per2",
                question: "At a party, you are most likely to:",
                options: [
                    { text: "Lead conversations and be the life of the party", scores: { communication: 0.3, leadership: 0.2 } },
                    { text: "Have deep conversations with a few people", scores: { empathy: 0.2, analytical: 0.1 } },
                    { text: "Observe and analyze the social dynamics", scores: { analytical: 0.2, independence: 0.1 } },
                    { text: "Help organize and make sure everyone is comfortable", scores: { practical: 0.2, empathy: 0.2 } }
                ]
            },
            {
                id: "per3",
                question: "When faced with a problem, you typically:",
                options: [
                    { text: "Break it down logically step by step", scores: { analytical: 0.3, dataOriented: 0.1 } },
                    { text: "Think of creative, unconventional solutions", scores: { creativity: 0.3, independence: 0.1 } },
                    { text: "Talk to others for advice and perspectives", scores: { peopleOriented: 0.2, communication: 0.2 } },
                    { text: "Jump in and figure it out as you go", scores: { practical: 0.3, leadership: 0.1 } }
                ]
            },
            {
                id: "per4",
                question: "What motivates you the most?",
                options: [
                    { text: "Solving complex challenges", scores: { analytical: 0.3, techSkill: 0.1 } },
                    { text: "Making a positive impact on people's lives", scores: { empathy: 0.3, peopleOriented: 0.2 } },
                    { text: "Building something new and innovative", scores: { creativity: 0.2, leadership: 0.2 } },
                    { text: "Financial success and stability", scores: { practical: 0.2, dataOriented: 0.2 } },
                    { text: "Creative expression and freedom", scores: { creativity: 0.3, independence: 0.2 } }
                ]
            }
        ]
    },
    skills: {
        title: "🛠 Skills",
        subtitle: "Rate yourself (1-5)",
        questions: [
            {
                id: "sk1",
                question: "Programming / Technical Skills",
                type: "rating",
                attribute: "techSkill"
            },
            {
                id: "sk2",
                question: "Public Speaking / Presentation",
                type: "rating",
                attribute: "communication"
            },
            {
                id: "sk3",
                question: "Drawing / Design / Visual Arts",
                type: "rating",
                attribute: "creativity"
            },
            {
                id: "sk4",
                question: "Problem-Solving / Critical Thinking",
                type: "rating",
                attribute: "analytical"
            },
            {
                id: "sk5",
                question: "Leadership / Team Management",
                type: "rating",
                attribute: "leadership"
            }
        ]
    }
};

// Build student profile from answers
export function buildStudentProfile(answers) {
    const profile = {
        analytical: 0,
        creativity: 0,
        communication: 0,
        techSkill: 0,
        leadership: 0,
        empathy: 0,
        practical: 0,
        dataOriented: 0,
        peopleOriented: 0,
        independence: 0
    };

    // Process each answer
    Object.entries(answers).forEach(([questionId, answer]) => {
        // Check if it's a rating question
        if (answer.type === 'rating') {
            // Convert 1-5 rating to 0-1 scale
            const normalizedRating = (answer.value - 1) / 4;
            profile[answer.attribute] += normalizedRating * 0.5; // Weight ratings
        } else if (answer.scores) {
            // Add scores from the selected option
            Object.entries(answer.scores).forEach(([attribute, score]) => {
                profile[attribute] += score;
            });
        }
    });

    // Normalize profile values to 0-1 range
    const maxValue = Math.max(...Object.values(profile), 1);
    Object.keys(profile).forEach(key => {
        profile[key] = Math.min(profile[key] / maxValue, 1);
    });

    return profile;
}

// Calculate cosine similarity between two profiles
export function calculateSimilarity(studentProfile, careerProfile) {
    const attributes = Object.keys(studentProfile);

    let dotProduct = 0;
    let studentMagnitude = 0;
    let careerMagnitude = 0;

    attributes.forEach(attr => {
        const studentVal = studentProfile[attr] || 0;
        const careerVal = careerProfile[attr] || 0;

        dotProduct += studentVal * careerVal;
        studentMagnitude += studentVal * studentVal;
        careerMagnitude += careerVal * careerVal;
    });

    studentMagnitude = Math.sqrt(studentMagnitude);
    careerMagnitude = Math.sqrt(careerMagnitude);

    if (studentMagnitude === 0 || careerMagnitude === 0) return 0;

    return dotProduct / (studentMagnitude * careerMagnitude);
}

// Generate explanation for why a career matches
export function generateExplanation(studentProfile, career) {
    const explanations = [];
    const attributes = [
        { key: 'analytical', name: 'analytical thinking', career: career.analytical },
        { key: 'creativity', name: 'creativity', career: career.creativity },
        { key: 'communication', name: 'communication skills', career: career.communication },
        { key: 'techSkill', name: 'technical abilities', career: career.techSkill },
        { key: 'leadership', name: 'leadership qualities', career: career.leadership },
        { key: 'empathy', name: 'empathy', career: career.empathy },
        { key: 'practical', name: 'practical skills', career: career.practical },
        { key: 'dataOriented', name: 'data orientation', career: career.dataOriented },
        { key: 'peopleOriented', name: 'people orientation', career: career.peopleOriented },
        { key: 'independence', name: 'independence', career: career.independence }
    ];

    // Find top matching attributes
    const matches = attributes
        .filter(a => studentProfile[a.key] > 0.5 && a.career > 0.5)
        .sort((a, b) => (b.career * studentProfile[b.key]) - (a.career * studentProfile[a.key]))
        .slice(0, 3);

    if (matches.length > 0) {
        explanations.push(`Your strong ${matches.map(m => m.name).join(' and ')} align perfectly with what this career demands.`);
    }

    // Add career-specific insights
    if (career.techSkill > 0.7 && studentProfile.techSkill > 0.5) {
        explanations.push("Your technical aptitude will be a major asset in this technology-focused role.");
    }
    if (career.creativity > 0.7 && studentProfile.creativity > 0.5) {
        explanations.push("This role will let you express your creative side and bring innovative ideas to life.");
    }
    if (career.peopleOriented > 0.7 && studentProfile.peopleOriented > 0.5) {
        explanations.push("Your natural inclination toward working with people makes this an ideal fit.");
    }
    if (career.leadership > 0.7 && studentProfile.leadership > 0.5) {
        explanations.push("Your leadership qualities position you well for growth and advancement in this field.");
    }
    if (career.independence > 0.7 && studentProfile.independence > 0.5) {
        explanations.push("This career offers the autonomy and independence you value.");
    }

    return explanations.slice(0, 3).join(' ');
}

// Get skills to develop for a career
export function getSkillsToDevelope(studentProfile, career) {
    const gaps = [];
    const attributes = [
        { key: 'analytical', skill: 'Analytical Thinking', icon: '🧮' },
        { key: 'creativity', skill: 'Creative Design', icon: '🎨' },
        { key: 'communication', skill: 'Communication', icon: '💬' },
        { key: 'techSkill', skill: 'Technical Skills', icon: '💻' },
        { key: 'leadership', skill: 'Leadership', icon: '👑' },
        { key: 'empathy', skill: 'Emotional Intelligence', icon: '❤️' },
        { key: 'practical', skill: 'Practical Application', icon: '🔧' }
    ];

    attributes.forEach(attr => {
        const studentVal = studentProfile[attr.key] || 0;
        const careerVal = career[attr.key] || 0;

        if (careerVal > 0.6 && studentVal < careerVal - 0.2) {
            gaps.push({
                ...attr,
                gap: careerVal - studentVal,
                importance: careerVal
            });
        }
    });

    return gaps.sort((a, b) => b.importance - a.importance).slice(0, 3);
}

// Main function: Get top career matches
export function getTopCareerMatches(studentProfile, count = 5) {
    const matches = careers.map(career => {
        const careerProfile = {
            analytical: career.analytical,
            creativity: career.creativity,
            communication: career.communication,
            techSkill: career.techSkill,
            leadership: career.leadership,
            empathy: career.empathy,
            practical: career.practical,
            dataOriented: career.dataOriented,
            peopleOriented: career.peopleOriented,
            independence: career.independence
        };

        const similarity = calculateSimilarity(studentProfile, careerProfile);
        const matchPercentage = Math.round(similarity * 100);
        const explanation = generateExplanation(studentProfile, career);
        const skillsToDevelope = getSkillsToDevelope(studentProfile, career);

        return {
            ...career,
            matchPercentage,
            explanation,
            skillsToDevelope
        };
    });

    return matches
        .sort((a, b) => b.matchPercentage - a.matchPercentage)
        .slice(0, count);
}

// Get all question categories in order
export function getQuestionCategories() {
    return ['interests', 'strengths', 'workStyle', 'personality', 'skills'];
}

// Get total question count
export function getTotalQuestionCount() {
    let count = 0;
    Object.values(questionnaireData).forEach(category => {
        count += category.questions.length;
    });
    return count;
}
