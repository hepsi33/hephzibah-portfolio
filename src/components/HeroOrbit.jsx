import React from 'react';

const HeroOrbit = () => {
    // Defines the orbiting text pill elements
    // Adjust duration and radius to create varied orbits
    const orbits = [
        { name: "React JS", radius: 140, duration: 25 },
        { name: "Python", radius: 180, duration: 35 },
        { name: "Next.js", radius: 220, duration: 40 },
        { name: "Java", radius: 160, duration: 30 },
        { name: "MongoDB", radius: 260, duration: 45 }
    ];

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
        }}>
            {/* Center Avatar with glowing ring */}
            <div style={{
                position: 'relative',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                border: '3px solid var(--accent-glow)',
                boxShadow: '0 0 40px rgba(157, 78, 221, 0.5), inset 0 0 20px rgba(157, 78, 221, 0.3)',
                overflow: 'hidden',
                zIndex: 10,
                background: 'rgba(5, 1, 13, 0.8)'
            }}>
                <img
                    src="https://github.com/hepsi33.png"
                    alt="Hephzibah"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>

            {/* Render Orbiting Rings & Skills */}
            {orbits.map((orbit, idx) => {
                // Alternate orbit direction
                const isReverse = idx % 2 !== 0;

                return (
                    <div key={idx} style={{
                        position: 'absolute',
                        width: `${orbit.radius * 2}px`,
                        height: `${orbit.radius * 2}px`,
                        border: '1px solid rgba(157, 78, 221, 0.15)',
                        borderRadius: '50%',
                        animation: `spin-orbit-${idx} ${orbit.duration}s linear infinite`,
                        animationDirection: isReverse ? 'reverse' : 'normal'
                    }}>
                        <div style={{
                            position: 'absolute',
                            // Position at top center of the ring
                            top: 0,
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'rgba(5, 1, 13, 0.9)',
                            border: '1px solid var(--accent-glow)',
                            padding: '6px 16px',
                            borderRadius: '30px',
                            color: 'var(--accent-light)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            boxShadow: '0 0 15px rgba(157, 78, 221, 0.4)',
                            whiteSpace: 'nowrap',
                            // Counter-rotate perfectly to keep text upright
                            animation: `counter-spin-orbit-${idx} ${orbit.duration}s linear infinite`,
                            animationDirection: isReverse ? 'reverse' : 'normal'
                        }}>
                            {orbit.name}
                        </div>

                        {/* Inject dynamic keyframes for this specific orbit radius since transform translate needs to match */}
                        <style>{`
                            @keyframes spin-orbit-${idx} { 
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); } 
                            }
                            @keyframes counter-spin-orbit-${idx} { 
                                0% { transform: translate(-50%, -50%) rotate(0deg); }
                                100% { transform: translate(-50%, -50%) rotate(-360deg); } 
                            }
                        `}</style>
                    </div>
                );
            })}
        </div>
    );
};

export default HeroOrbit;
