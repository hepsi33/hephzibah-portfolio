import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "AI RAG Web App",
        tech: "Next.js, TypeScript, PostgreSQL",
        desc: "A Full Stack Dashboard with secure role-based access, AI-Powered Youtube Summaries and RAG Workspace Chat handling documents, URLs, and images.",
        githubUrl: "https://github.com/hepsi33/Role-based-Dashboard"
    },
    {
        title: "NHAPP - Whatsapp Clone",
        tech: "React Native (Expo), Convex",
        desc: "Real-time messaging mobile app with email-OTP authentication, multimedia chat, voice notes, status updates with viewer tracking, and group messaging.",
        githubUrl: "https://github.com/hepsi33/NHAPP_Chat"
    },
    {
        title: "Robot CLI System Intelligence",
        tech: "Python, OpenRouter API",
        desc: "AI-powered Windows CLI agent using natural language to manage files, monitor system health (CPU/RAM), and automate tasks.",
        githubUrl: "https://github.com/hepsi33/System-Intelligence"
    },
    {
        title: "File Organizer",
        tech: "Python",
        desc: "Multithreaded engine for fast sorting, smart collision handling to prevent data loss, and GUI for automated categorization of files.",
        githubUrl: "https://github.com/hepsi33/FileOrganizer"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
            >
                Featured Projects
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        initial={{ opacity: 0, y: 60, rotateX: 8 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '260px',
                        }}
                    >
                        {/* Number indicator */}
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            right: '20px',
                            fontSize: '4rem',
                            fontWeight: 800,
                            color: 'rgba(255, 255, 255, 0.25)',
                            lineHeight: 1,
                            fontFamily: 'monospace',
                            textShadow: '0 0 10px rgba(157, 78, 221, 0.2)'
                        }}>
                            {String(index + 1).padStart(2, '0')}
                        </div>

                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '8px', paddingRight: '60px', lineHeight: 1.3 }}>{project.title}</h3>
                            <p style={{
                                color: 'var(--accent-light)',
                                fontSize: '0.85rem',
                                marginBottom: '16px',
                                fontFamily: "'Space Grotesk', monospace",
                                letterSpacing: '0.5px'
                            }}>
                                {project.tech}
                            </p>
                            <p style={{
                                color: 'var(--text-muted)',
                                lineHeight: '1.6',
                                fontSize: '0.95rem',
                                marginBottom: '2rem',
                                flexGrow: 1
                            }}>
                                {project.desc}
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="primary-btn"
                                    style={{ padding: '8px 16px', fontSize: '0.9rem', textDecoration: 'none' }}
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
