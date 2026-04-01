import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Calling our own secure Vercel Serverless Function instead of Resend directly
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
      } else {
        const errorData = await res.json();
        console.error('API Error:', errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      setStatus('error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '12px',
    transition: 'background 0.3s ease'
  };

  return (
    <section id="contact" className="section container" style={{ paddingBottom: '2rem', paddingTop: '2rem', position: 'relative', zIndex: 100 }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', position: 'relative', zIndex: 100 }}>
        <motion.div
          className="glass-card flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Ensure it stays on top of footer animations to capture clicks
          style={{ position: 'relative', zIndex: 100 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Contact Information</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Email - Clickable */}
            <motion.a
              href="mailto:hepsikumar333@gmail.com"
              style={contactItemStyle}
              whileHover={{ x: 5, background: 'rgba(255,255,255,0.05)' }}
            >
              <div style={{ background: 'rgba(157, 78, 221, 0.2)', padding: '12px', borderRadius: '12px', color: 'var(--accent-light)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</p>
                <p style={{ color: '#fff', fontWeight: 500 }}>hepsikumar333@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone - Clickable */}
            <motion.a
              href="tel:+919606057586"
              style={contactItemStyle}
              whileHover={{ x: 5, background: 'rgba(255,255,255,0.05)' }}
            >
              <div style={{ background: 'rgba(157, 78, 221, 0.2)', padding: '12px', borderRadius: '12px', color: 'var(--accent-light)' }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Phone</p>
                <p style={{ color: '#fff', fontWeight: 500 }}>+91 9606057586</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              style={contactItemStyle}
              whileHover={{ x: 5, background: 'rgba(255,255,255,0.05)' }}
            >
              <div style={{ background: 'rgba(157, 78, 221, 0.2)', padding: '12px', borderRadius: '12px', color: 'var(--accent-light)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Location</p>
                <p style={{ color: '#fff', fontWeight: 500 }}>Bengaluru, India</p>
              </div>
            </motion.div>
          </div>

          {/* Social links (GitHub, LinkedIn, Resume) */}
          <div style={{ position: 'relative', zIndex: 100 }}>
            <SocialLinks style={{ marginTop: '1.5rem' }} />
          </div>
        </motion.div>

        {/* Email Contact Form */}
        <motion.form
          className="glass-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 100 }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', outline: 'none', transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.border = '1px solid var(--accent-glow)'}
              onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', outline: 'none', transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.border = '1px solid var(--accent-glow)'}
              onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="message" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message here..."
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', outline: 'none', transition: 'border 0.3s', resize: 'vertical'
              }}
              onFocus={(e) => e.target.style.border = '1px solid var(--accent-glow)'}
              onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="primary-btn"
            style={{
              marginTop: '1rem',
              width: 'fit-content',
              opacity: status === 'loading' ? 0.7 : 1,
              cursor: status === 'loading' ? 'wait' : 'pointer'
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
            {status !== 'loading' && <Send size={18} />}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#4ade80', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
              <CheckCircle size={16} /> Message sent successfully! I'll be in touch soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#f87171', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
              <AlertCircle size={16} /> Cannot send message at this time. Please check the console or email me directly at hepsikumar333@gmail.com.
            </motion.p>
          )}

        </motion.form>
      </div>
    </section>
  );
};

export default Contact;