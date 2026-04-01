import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About Me', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Skills', href: '#skills' },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu if open
        const element = document.querySelector(href);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 5%',
                zIndex: 100,
                background: 'var(--navbar-bg)',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--navbar-border)',
                transition: 'background 0.4s ease, border-color 0.4s ease'
            }}
        >
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
                hephzibah<span style={{ color: '#4facfe' }}>.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.href)}
                            style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    style={{
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        padding: '8px 24px',
                        borderRadius: '30px',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(123, 47, 190, 0.15)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                    Hire Me
                </a>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
                className="nav-mobile-btn"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'none', // Hidden on desktop, shown via CSS
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    padding: '8px'
                }}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="nav-mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: 0,
                            right: 0,
                            background: 'rgba(10, 5, 20, 0.95)',
                            backdropFilter: 'blur(16px)',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                style={{
                                    color: 'var(--text-main)',
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    padding: '8px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, '#contact')}
                            style={{
                                background: 'linear-gradient(135deg, #c084fc, #7b2fbe)',
                                textAlign: 'center',
                                padding: '12px',
                                borderRadius: '12px',
                                color: '#fff',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                marginTop: '0.5rem'
                            }}
                        >
                            Hire Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                /* Hide desktop nav and show hamburger button on mobile screens */
                @media (max-width: 900px) {
                    .nav-desktop {
                        display: none !important;
                    }
                    .nav-mobile-btn {
                        display: flex !important;
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
