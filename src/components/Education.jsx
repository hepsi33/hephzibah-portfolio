import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        year: '2026',
        institution: 'New Horizon College of Engineering',
        degree: 'BCA',
        detail: 'CGPA: 8.82',
        icon: '🎓',
        current: true,
    },
    {
        year: '2023',
        institution: 'Narayana College',
        degree: 'PU / CBSE',
        detail: 'Percentage: 81.83%',
        icon: '📚',
        current: false,
    },
    {
        year: '2021',
        institution: 'SEA International School',
        degree: 'ICSE',
        detail: 'Percentage: 82.5%',
        icon: '🏫',
        current: false,
    },
];

const Education = () => {
    return (
        <section id="education" className="section">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: '3rem', textAlign: 'left' }}
            >
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-1px',
                    marginBottom: '0.5rem',
                    lineHeight: 1.1
                }}>
                    Education
                </h2>
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        height: '3px', width: '120px',
                        background: 'linear-gradient(90deg, var(--accent-glow), transparent)',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px var(--accent-glow)',
                    }}
                />
            </motion.div>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: '3rem' }}>

                {/* Vertical line */}
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        position: 'absolute',
                        left: '18px',
                        top: '8px',
                        bottom: '30px',
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--accent-glow), rgba(157,78,221,0.1))',
                        borderRadius: '2px',
                    }}
                />

                {/* Timeline items */}
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                        style={{ position: 'relative', marginBottom: idx < educationData.length - 1 ? '2.5rem' : '0' }}
                    >
                        {/* Node dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.15 + 0.3, type: 'spring' }}
                            style={{
                                position: 'absolute',
                                left: '-2.65rem',
                                top: '22px',
                                width: edu.current ? '20px' : '16px',
                                height: edu.current ? '20px' : '16px',
                                borderRadius: '50%',
                                background: edu.current
                                    ? 'var(--accent-glow)'
                                    : 'rgba(157, 78, 221, 0.4)',
                                border: `2px solid ${edu.current ? '#e0aaff' : 'rgba(157,78,221,0.5)'}`,
                                boxShadow: edu.current ? '0 0 16px rgba(157,78,221,0.8)' : 'none',
                                zIndex: 2,
                                transform: edu.current ? 'translateX(-2px)' : 'none',
                            }}
                        />

                        {/* Card */}
                        <motion.div
                            className="glass-card"
                            whileHover={{ translateY: -4, boxShadow: '0 0 30px rgba(157,78,221,0.2)' }}
                            transition={{ duration: 0.2 }}
                            style={{ padding: '1.4rem 1.8rem' }}
                        >
                            {/* Top row: icon + institution + year badge */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{edu.icon}</span>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                                        {edu.institution}
                                    </h3>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {edu.current && (
                                        <span style={{
                                            fontSize: '0.72rem', fontWeight: 600,
                                            color: '#a3e635',
                                            background: 'rgba(163,230,53,0.12)',
                                            border: '1px solid rgba(163,230,53,0.3)',
                                            borderRadius: '20px', padding: '2px 10px',
                                            letterSpacing: '0.5px',
                                        }}>
                                            Current
                                        </span>
                                    )}
                                    <span style={{
                                        fontSize: '0.85rem', fontWeight: 700,
                                        color: 'var(--accent-light)',
                                        background: 'rgba(157,78,221,0.15)',
                                        border: '1px solid rgba(157,78,221,0.3)',
                                        borderRadius: '8px', padding: '3px 12px',
                                    }}>
                                        {edu.year}
                                    </span>
                                </div>
                            </div>

                            {/* Degree */}
                            <p style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.95rem', marginTop: '0.6rem' }}>
                                {edu.degree}
                            </p>

                            {/* Detail */}
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                                {edu.detail}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
