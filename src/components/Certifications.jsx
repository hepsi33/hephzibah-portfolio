import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    { name: "Javascript Essentials", org: "Cisco Networking Academy", year: "2026", image: "/certificates/javascript.png" },
    { name: "Data Science", org: "Cisco Networking Academy", year: "2025", image: "/certificates/data-science.png" },
    { name: "Software Testing", org: "Alpha Tech Academy", year: "2025", image: "/certificates/software-testing.png" },
    { name: "Ethical Hacking", org: "Alpha Tech Academy", year: "2024", image: "/certificates/ethical-hacking.png" },
    { name: "Angular JS", org: "Alpha Tech Academy", year: "2024", image: "/certificates/angular.png", rotate: true },
    { name: "Machine Learning", org: "Great Learning", year: "2024", image: "/certificates/machine-learning.png" }
];

const Certifications = () => {
    return (
        <section id="certifications" className="section container" style={{ paddingBottom: '100px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                            <Award size={32} color="var(--accent-glow)" /> Certifications
                        </span>
                    </h2>

                    {/* Auto-scrolling marquee container */}
                    <div style={{
                        overflow: 'hidden',
                        paddingBottom: '2rem',
                        paddingTop: '10px',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        width: '100%',
                    }}>
                        <div className="marquee-track">

                            {/* Duplicate the array to create a seamless infinite loop */}
                            {[...certifications, ...certifications].map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    className="glass-card cert-card"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ translateY: -5, boxShadow: '0 10px 30px rgba(157,78,221,0.2)' }}
                                    style={{
                                        flex: '0 0 350px',
                                        padding: '1.4rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.2rem',
                                    }}
                                >
                                    {/* Certificate Image */}
                                    <div style={{
                                        width: '100%',
                                        aspectRatio: '1.414',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        background: 'rgba(0,0,0,0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            inset: cert.rotate ? '-25%' : '0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img
                                                src={cert.image}
                                                alt={`${cert.name} Certificate`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    transform: cert.rotate ? 'rotate(90deg) scale(1.3)' : 'none',
                                                    transition: 'transform 0.3s ease',
                                                    background: '#fff'
                                                }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    const parent = e.target.parentElement;
                                                    const text = document.createElement('div');
                                                    text.style.color = 'var(--text-muted)';
                                                    text.style.fontSize = '0.85rem';
                                                    text.style.textAlign = 'center';
                                                    text.innerHTML = `Image missing<br/>Save as:<br/><code>public${cert.image}</code>`;
                                                    parent.appendChild(text);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.8rem' }}>
                                        <div>
                                            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '4px', lineHeight: 1.3 }}>{cert.name}</h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{cert.org}</p>
                                        </div>
                                        <span style={{
                                            background: 'rgba(157, 78, 221, 0.15)',
                                            color: 'var(--accent-light)',
                                            padding: '4px 12px',
                                            borderRadius: '12px',
                                            fontWeight: 700,
                                            fontSize: '0.85rem',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {cert.year}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <style>{`
                        @keyframes scrollCertificates {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-50% - 1rem)); } /* Shift halfway minus half the gap */
                        }
                        
                        .marquee-track {
                            display: flex;
                            gap: 2rem;
                            width: max-content;
                            animation: scrollCertificates 30s linear infinite;
                        }

                        /* Pause animation when hovering over the track */
                        .marquee-track:hover {
                            animation-play-state: paused;
                        }

                        /* Maintain hover effects on the cards themselves */
                        .cert-card {
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                        }
                    `}</style>
                </motion.div>

            </div>
        </section>
    );
};

export default Certifications;
