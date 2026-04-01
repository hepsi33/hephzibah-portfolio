import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const About = () => {
    return (
        <section id="about" className="section" style={{ paddingTop: 0 }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mobile-center"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2.5rem', textAlign: 'left' }}
            >
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-1px',
                    marginBottom: '0.5rem',
                    lineHeight: 1.1
                }}>
                    About Me
                </h2>
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        height: '3px',
                        width: '120px',
                        background: 'linear-gradient(90deg, var(--accent-glow), transparent)',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px var(--accent-glow)',
                    }}
                />
            </motion.div>

            <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.9',
                    position: 'relative',
                }}
            >
                {/* Decorative gradient orb inside card */}
                <div style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(157, 78, 221, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                <ul style={{ marginBottom: '1.2rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none' }}>
                    {[
                        'Full Stack Developer with 1 year of experience in AI application development and production-ready software.',
                        'Track record in building 8+ projects including a RAG-based AI Study Notes Generator and deploying scalable applications on Vercel using advanced web crawling and API integration.',
                        'Skilled in Python, RAG Architecture, and React, known for delivering AI-driven automation solutions.'
                    ].map((point, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <span style={{ color: 'var(--accent-light)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>▹</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
                <p>
                    My goal is to build secure, user-friendly apps and constantly explore new technologies. I love collaborating on real-time projects and believe in lifelong learning.
                </p>

                <div className="mobile-center" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <SocialLinks style={{ marginTop: '1.5rem' }} />
                </div>
            </motion.div>
        </section>
    );
};

export default About;
