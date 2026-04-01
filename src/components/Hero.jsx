import React from 'react';
import { motion } from 'framer-motion';
import HeroOrbit from './HeroOrbit';
import SocialLinks from './SocialLinks';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '80px 5% 0', // Account for navbar
            position: 'relative'
        }}>
            {/* Split layout wrapper */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '4rem',
                width: '100%',
                alignItems: 'center',
                zIndex: 10
            }} className="hero-split-grid">

                {/* Left Side: Restored Glitch Text */}
                <div className="mobile-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-subtitle"
                        style={{ marginBottom: '0.5rem' }}
                    >
                        Hello, I'm
                    </motion.p>

                    <div className="glitch-wrapper" style={{ marginBottom: '1rem' }}>
                        <h1 className="hero-title" data-text="Hephzibah K.">
                            Hephzibah K.
                        </h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '3rem', lineHeight: '1.6' }}
                    >
                        <strong style={{ color: '#fff', fontWeight: 600 }}>Full Stack Developer & ML Engineer.</strong> <br />
                        Transforming complex challenges into high-performance, scalable infrastructure solutions.
                    </motion.p>

                    <SocialLinks style={{ marginBottom: '2rem' }} />

                </div>

                {/* Right Side: Orbital Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <HeroOrbit />
                </motion.div>

            </div>

            {/* Media query for the grid layout inserted inline for convenience to avoid overwriting global CSS unintentionally */}
            <style>{`
                @media (min-width: 900px) {
                    .hero-split-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
