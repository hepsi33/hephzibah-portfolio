import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MapPin, Code, Briefcase } from 'lucide-react';

const Sidebar = () => {
    return (
        <motion.div
            className="glass-card sidebar"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
                position: 'sticky',
                top: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem 1.5rem',
                gap: '1.5rem',
                height: 'calc(100vh - 80px)',
                overflowY: 'auto',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                {/* Avatar with glow ring */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '34px',
                        background: 'conic-gradient(from 0deg, var(--accent-glow), transparent, var(--accent-light), transparent, var(--accent-glow))',
                        opacity: 0.5,
                        animation: 'spin 8s linear infinite',
                    }} />
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        border: '2px solid rgba(157, 78, 221, 0.4)',
                        boxShadow: '0 0 25px rgba(157, 78, 221, 0.3)',
                        background: 'var(--card-bg)',
                        position: 'relative',
                        zIndex: 1,
                    }}>
                        <img
                            src="https://github.com/hepsi33.png"
                            alt="Hephzibah K."
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Hephzibah K.</h2>
                    <span style={{
                        background: 'rgba(157, 78, 221, 0.12)',
                        padding: '6px 18px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        color: 'var(--accent-light)',
                        fontWeight: 500,
                        border: '1px solid rgba(157, 78, 221, 0.2)',
                    }}>
                        BCA Student
                    </span>
                </div>
            </div>

            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)' }} />

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                    { icon: Mail, label: 'Email', value: 'hepsikumar333@gmail.com' },
                    { icon: Phone, label: 'Phone', value: '+91 9606057586' },
                    { icon: Calendar, label: 'Birthday', value: '21 May, 2005' },
                    { icon: MapPin, label: 'Location', value: 'Bengaluru, India' },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="contact-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
                    >
                        <div style={{
                            background: 'rgba(157, 78, 221, 0.15)',
                            padding: '10px',
                            borderRadius: '12px',
                            color: 'var(--accent-light)',
                            flexShrink: 0,
                        }}>
                            <item.icon size={18} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
                                {item.label}
                            </p>
                            <p style={{ color: '#fff', fontSize: '0.85rem', wordBreak: 'break-all' }}>
                                {item.value}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)' }} />

            <motion.div
                style={{ display: 'flex', gap: '1.2rem', marginTop: 'auto' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                {[
                    { href: 'https://github.com/hepsi33', Icon: Code, label: 'GitHub' },
                    { href: '#', Icon: Briefcase, label: 'Portfolio' },
                ].map(({ href, Icon, label }, idx) => (
                    <motion.a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            color: 'var(--accent-light)',
                            background: 'rgba(157, 78, 221, 0.1)',
                            padding: '10px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            border: '1px solid transparent',
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.borderColor = 'var(--accent-glow)';
                            e.currentTarget.style.background = 'rgba(157, 78, 221, 0.2)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.background = 'rgba(157, 78, 221, 0.1)';
                        }}
                    >
                        <Icon size={20} />
                    </motion.a>
                ))}
            </motion.div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </motion.div>
    );
};

export default Sidebar;
