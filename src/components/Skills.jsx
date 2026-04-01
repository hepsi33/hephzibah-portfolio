import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Languages & Frameworks", items: ["Python", "Java", "C/C++", "C#", "VB.NET", "HTML & CSS", "JavaScript", "R Programming", "PHP", "React", "Next.js", "Expo Router", "Angular JS", "Android SDK", "LangChain"] },
  { category: "Tools", items: ["Git", "GitHub", "Linux", "Vercel", "WordPress", "Microsoft Office", "APIs", "LLMs", "RAG"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "SQL", "Supabase", "Convex"] },
  { category: "Soft Skills", items: ["Leadership", "Problem Solving", "Detail Oriented", "Teamwork", "Communication"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-light)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>
              {skillGroup.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(157, 78, 221, 0.3)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: '#e0e0e0',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(157, 78, 221, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;