import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "AI ML Intern",
        company: "Networker's Home",
        date: "Feb-Mar 26",
        desc: [
            "Completed an intensive 1-month AI & Machine Learning internship, developing 6+ production-ready projects including a RAG-based AI Study Notes Generator and a WhatsApp Clone.",
            "Recognized as AI Champ among top performers.",
            "Built multi-functional applications including a CLI File Management Robot with API integration, Python-based file organizer, and a Role-Based Access Control Dashboard.",
            "Deployed projects on Vercel and leveraged Firecrawl for advanced web crawling."
        ]
    },
    {
        role: "Visual Intern | Assistant Squad Leader",
        company: "Gao Tek",
        date: "Nov-Jan 26",
        desc: [
            "Developed visually engaging designs and creative concepts using Canva, translating complex ideas into compelling visual storytelling solutions aligned with brand guidelines.",
            "Coordinated a team of 62 visual interns as Assistant Squad Leader, optimizing workflow efficiency by assisting in task allocation and reviewing design outputs."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
            >
                Experience
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.15,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        style={{ position: 'relative', overflow: 'hidden' }}
                    >
                        {/* Accent bar */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: 'linear-gradient(180deg, var(--accent-glow), transparent)',
                            borderRadius: '0 2px 2px 0',
                        }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingLeft: '12px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-light)' }}>{exp.role}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                                    <Briefcase size={18} color="var(--accent-glow)" /> {exp.company}
                                </h4>
                            </div>
                            <span style={{
                                padding: '6px 16px',
                                background: 'rgba(157, 78, 221, 0.15)',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                color: 'var(--accent-light)',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                            }}>
                                {exp.date}
                            </span>
                        </div>

                        <ul style={{ paddingLeft: '32px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            {exp.desc.map((bullet, i) => (
                                <motion.li
                                    key={i}
                                    style={{ marginBottom: '8px' }}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                >
                                    {bullet}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
