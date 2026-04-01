import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{ position: 'relative', zIndex: 10, marginTop: '-130px', overflow: 'hidden' }}>

            {/* Animated Halo / Galaxy Horizon */}
            <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                {/* Deep dark background */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse 100% 80% at 50% 110%, #1a0033 0%, transparent 70%)',
                }} />

                {/* Outer soft halo ring — pulsing */}
                <div className="halo-outer" style={{
                    position: 'absolute',
                    bottom: '-60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1300px',
                    height: '280px',
                    borderRadius: '50%',
                    background: 'transparent',
                    border: '1px solid rgba(192, 132, 252, 0.08)',
                    boxShadow: '0 0 40px 15px rgba(157, 78, 221, 0.15), inset 0 0 30px 10px rgba(157, 78, 221, 0.05)',
                }} />

                {/* Inner bright halo ring */}
                <div className="halo-inner" style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '950px',
                    height: '190px',
                    borderRadius: '50%',
                    background: 'transparent',
                    border: '1px solid rgba(224, 170, 255, 0.15)',
                    boxShadow: '0 0 30px 12px rgba(192, 132, 252, 0.2), inset 0 0 20px 5px rgba(192, 132, 252, 0.08)',
                }} />

                {/* The glowing flat horizon line */}
                <div className="beam-line" style={{
                    position: 'absolute',
                    bottom: '70px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.5) 25%, rgba(255,255,255,0.6) 50%, rgba(192,132,252,0.5) 75%, transparent 100%)',
                    borderRadius: '50%',
                }} />

                {/* Soft upward glow — pure radial, no rectangle edges */}
                <div className="beam-shaft" style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '400px',
                    height: '260px',
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse at 50% 100%, rgba(192, 132, 252, 0.55) 0%, rgba(157, 78, 221, 0.2) 40%, transparent 75%)',
                    pointerEvents: 'none',
                }} />

                {/* Micro sparkles scattered around the halo */}
                {[
                    { l: '25%', b: 72, s: 0.4 },
                    { l: '35%', b: 68, s: 0.6 },
                    { l: '45%', b: 74, s: 0.8 },
                    { l: '55%', b: 66, s: 0.5 },
                    { l: '65%', b: 71, s: 0.7 },
                    { l: '72%', b: 69, s: 0.4 },
                    { l: '30%', b: 80, s: 0.3 },
                    { l: '60%', b: 78, s: 0.5 },
                ].map((sp, i) => (
                    <div key={i} className="sparkle" style={{
                        position: 'absolute',
                        bottom: `${sp.b}px`,
                        left: sp.l,
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        background: '#e9d5ff',
                        boxShadow: '0 0 6px 2px rgba(192, 132, 252, 0.8)',
                        animationDelay: `${sp.s}s`,
                    }} />
                ))}
            </div>

            {/* Credits */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    textAlign: 'center',
                    padding: '0.5rem 0 2.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '1rem',
                    letterSpacing: '0.5px',
                }}
            >
                Created and developed by{' '}
                <span style={{ color: 'var(--accent-light)', fontWeight: 700 }}>hepsi</span>
                {' '}!{' '}
                <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ display: 'inline-block', fontSize: '1.2rem' }}
                >
                    🪻
                </motion.span>
            </motion.div>

            <style>{`
                .halo-outer {
                    animation: haloPulse 4s ease-in-out infinite;
                }
                .halo-inner {
                    animation: haloPulse 4s ease-in-out infinite 0.5s;
                }
                .beam-line {
                    animation: beamGlow 4s ease-in-out infinite;
                }
                .beam-shaft {
                    animation: shaftBreath 4s ease-in-out infinite;
                }
                .sparkle {
                    animation: sparkleTwinkle 2.5s ease-in-out infinite;
                }

                @keyframes haloPulse {
                    0%, 100% {
                        box-shadow: 0 0 40px 15px rgba(157, 78, 221, 0.15), inset 0 0 30px 10px rgba(157, 78, 221, 0.05);
                        opacity: 0.7;
                    }
                    50% {
                        box-shadow: 0 0 60px 30px rgba(157, 78, 221, 0.25), inset 0 0 40px 15px rgba(192, 132, 252, 0.1);
                        opacity: 1;
                    }
                }
                @keyframes beamGlow {
                    0%, 100% { opacity: 0.7; box-shadow: none; }
                    50% { opacity: 1; box-shadow: 0 0 40px 15px rgba(255,255,255,0.3), 0 0 80px 30px rgba(192, 132, 252, 0.5); }
                }
                @keyframes shaftBreath {
                    0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleY(0.9); }
                    50% { opacity: 0.9; transform: translateX(-50%) scaleY(1.1); }
                }
                @keyframes sparkleTwinkle {
                    0%, 100% { opacity: 0.2; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.6); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
