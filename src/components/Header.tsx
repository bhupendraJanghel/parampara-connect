import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/links';

const HangingString = ({ left, length, delay, tilt, time }: { left: string; length: number; delay: number; tilt: number; time: number }) => {
  const itemCount = Math.floor(length / 20);
  const positionInt = parseInt(left) || 0;
  
  // Phase offset so strings swing out of sync
  const phase = positionInt * 0.5;
  // Idle swing for this specific string computed purely from time prop
  const idleSwing = Math.sin(time * 1.5 + phase) * 1.2;
  
  // Total rotation of the top segment
  const topRotation = tilt + idleSwing;

  const renderBead = (i: number) => {
    const type = i % 3; // 0: Big Gold Bead, 1: Small Gold Bead, 2: Crystal Diamond

    if (type === 0) {
      return (
        <div
          key={i}
          className="w-2 h-2 rounded-full border border-black/10 shadow-sm shrink-0"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #ffd24d 0%, #b38600 100%)',
            marginTop: '8px'
          }}
        />
      );
    } else if (type === 1) {
      return (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full border border-black/10 shadow-sm shrink-0"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #fff2a3 0%, #997300 100%)',
            marginTop: '6px'
          }}
        />
      );
    } else {
      return (
        <div
          key={i}
          className="w-2.5 h-2.5 rotate-45 border border-white/40 shadow-inner shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 100%)',
            backdropFilter: 'blur(2px)',
            marginTop: '8px'
          }}
        />
      );
    }
  };

  const topCount = Math.floor(itemCount / 2);
  const bottomCount = itemCount - topCount;

  return (
    <motion.div
      initial={{ y: -160, rotate: 0, opacity: 0 }}
      animate={{ y: 0, rotate: topRotation, opacity: 0.3 }}
      transition={{
        y: { type: 'spring', stiffness: 85, damping: 14, delay },
        opacity: { duration: 0.8, delay },
        rotate: { type: 'spring', stiffness: 45, damping: 12 }
      }}
      whileHover={{
        rotate: [0, 22, -15, 10, -5, 0],
        opacity: 0.6,
        transition: {
          rotate: { duration: 1.8, ease: "easeInOut" },
          opacity: { duration: 0.25 }
        }
      }}
      style={{ transformOrigin: 'top center', left }}
      className="absolute top-0 z-20 w-6 flex flex-col items-center pointer-events-auto cursor-grab active:cursor-grabbing"
    >
      {/* Top Segment of the Chain */}
      <div 
        className="w-[1px] bg-gradient-to-b from-[#c39b56] to-[#c39b56]/60 flex flex-col items-center relative" 
        style={{ height: `${length * 0.5}px` }}
      >
        <div className="absolute top-0 flex flex-col items-center w-full">
          {Array.from({ length: topCount }).map((_, idx) => renderBead(idx))}
        </div>
      </div>

      {/* Middle Segment of the Chain (Nested for organic bend/whip physics) */}
      <motion.div
        animate={{ rotate: topRotation * 0.5 }}
        transition={{ type: 'spring', stiffness: 30, damping: 9 }}
        style={{ transformOrigin: 'top center', marginTop: '6px' }}
        className="flex flex-col items-center w-full"
      >
        <div 
          className="w-[1px] bg-gradient-to-b from-[#c39b56]/60 to-[#c39b56]/20 flex flex-col items-center relative" 
          style={{ height: `${length * 0.5}px` }}
        >
          <div className="absolute top-0 flex flex-col items-center w-full">
            {Array.from({ length: bottomCount }).map((_, idx) => renderBead(topCount + idx))}
          </div>
        </div>

        {/* Bottom Pendant (Nested even deeper for cumulative swing / inertia) */}
        <motion.div
          animate={{ rotate: topRotation * 0.6 }}
          transition={{ type: 'spring', stiffness: 20, damping: 6 }}
          style={{ transformOrigin: 'top center', marginTop: '8px' }}
          className="relative z-30 flex flex-col items-center"
        >
          {/* Connecting Gold Loop */}
          <div className="w-1.5 h-1.5 border border-[#c39b56] rounded-full -mb-[2px]"></div>

          {/* Diamond frame holding the crystal jewel */}
          <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 rotate-45 border border-[#c39b56] flex items-center justify-center bg-gradient-to-br from-[#241308] to-[#0a0a0a] shadow-lg relative overflow-hidden group">
            {/* Inner shiny glow */}
            <div className="absolute inset-0 bg-brand-gold/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>

            {/* Sparkly crystal center */}
            <div className="w-1.5 h-1.5 bg-white rounded-full -rotate-45 shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse"></div>
          </div>

          {/* Hanging Tassel */}
          <div className="w-[1px] h-2.5 bg-[#c39b56] mt-[-1px]"></div>
          <div className="w-1.5 h-1.5 bg-[#c39b56] rounded-full"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Header = ({ onSocialClick }: { onSocialClick?: (id: string) => void }) => {
  const [swingState, setSwingState] = useState({ tilt: 0, time: 0 });

  useEffect(() => {
    let currentShake = 0;
    let orientationTilt = 0;
    let mouseTilt = 0;

    // Handle tilt (orientation)
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null) {
        // Map gamma (-45 to 45 deg) to rotation (-15 to 15 deg)
        orientationTilt = Math.max(-15, Math.min(15, e.gamma / 3));
      }
    };

    // Handle shake (motion acceleration)
    let lastX = 0, lastY = 0, lastZ = 0;
    let lastTime = 0;
    const SHAKE_THRESHOLD = 12;

    const handleMotion = (e: DeviceMotionEvent) => {
      const acc = e.accelerationIncludingGravity;
      if (!acc) return;

      const currentTime = Date.now();
      if ((currentTime - lastTime) > 80) {
        const diffTime = currentTime - lastTime;
        lastTime = currentTime;

        const x = acc.x || 0;
        const y = acc.y || 0;
        const z = acc.z || 0;

        const delta = Math.abs(x + y + z - lastX - lastY - lastZ);
        const speed = (delta / diffTime) * 10000;

        if (speed > SHAKE_THRESHOLD) {
          const impulse = (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random() * 15);
          currentShake = impulse;
        }

        lastX = x;
        lastY = y;
        lastZ = z;
      }
    };

    // Handle mouse movement for desktop
    let lastMouseX = 0;
    let lastMouseTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (lastMouseTime && (currentTime - lastMouseTime) > 50) {
        const diffX = e.clientX - lastMouseX;
        const speed = diffX / (currentTime - lastMouseTime);
        if (Math.abs(speed) > 0.4) {
          mouseTilt = Math.max(-10, Math.min(10, speed * 8));
        }
      }
      lastMouseX = e.clientX;
      lastMouseTime = currentTime;
    };

    // Animation frame update loop
    let animationFrameId: number;
    const updateLoop = () => {
      const targetTilt = orientationTilt + currentShake + mouseTilt;
      
      // Interpolate and update time in a single state change to maintain React purity
      setSwingState(prev => ({
        tilt: prev.tilt + (targetTilt - prev.tilt) * 0.15,
        time: Date.now() / 1000
      }));

      // Decay impulses
      currentShake *= 0.95;
      mouseTilt *= 0.92;

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleMotion);
    }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
      if (window.DeviceMotionEvent) {
        window.removeEventListener('devicemotion', handleMotion);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center pt-8 pb-8 px-4 overflow-hidden rounded-b-[40px] bg-gradient-to-b from-[#140b05] to-[#0a0a0a] shadow-[0_15px_50px_rgba(0,0,0,0.7)] border-b border-brand-gold/20">
      {/* Hanging Traditional Marigold & Bell Garlands */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <HangingString left="6%" length={110} delay={0.1} tilt={swingState.tilt} time={swingState.time} />
        <HangingString left="20%" length={140} delay={0.25} tilt={swingState.tilt} time={swingState.time} />
        <HangingString left="34%" length={90} delay={0.15} tilt={swingState.tilt} time={swingState.time} />
        <HangingString left="66%" length={90} delay={0.2} tilt={swingState.tilt} time={swingState.time} />
        <HangingString left="80%" length={140} delay={0.3} tilt={swingState.tilt} time={swingState.time} />
        <HangingString left="94%" length={110} delay={0.18} tilt={swingState.tilt} time={swingState.time} />
      </div>

      {/* Luxurious ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Texture overlay (subtle gold festive decor & confetti pattern) */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: 'url("/festive-pattern.png")',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          filter: 'invert(1) hue-rotate(180deg) brightness(1.2)'
        }}
      ></div>

      {/* Logo Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 flex flex-col items-center"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-5 relative drop-shadow-[0_0_30px_rgba(195,155,86,0.4)]">
          <img src="/parampara-logo.png" alt="Parampara Events Logo" className="w-full h-full object-contain" />
        </div>

        <div className="text-center space-y-1 sm:space-y-2 mb-2">
          <h1 className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#f9f1d9] via-[#c39b56] to-[#f9f1d9] tracking-[0.2em] font-semibold drop-shadow-sm">
            PARAMPARA
          </h1>
          <p className="font-serif text-brand-gold-light text-xs sm:text-sm tracking-[0.5em] uppercase pl-2 font-semibold">
            Decor & Events
          </p>
        </div>
      </motion.div>

      {/* Social Links Panel inside Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-30 mt-5 flex flex-col items-center w-full max-w-sm"
      >
        <div className="flex items-center gap-4 w-full justify-center mb-5">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-brand-gold/50 flex-1"></div>
          <p className="text-[#fdfaf6]/70 font-sans text-[10px] sm:text-xs font-light tracking-widest uppercase">
            Connect With Us
          </p>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-brand-gold/50 flex-1"></div>
        </div>

        <div className="flex gap-4 sm:gap-6 justify-center">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const isModalTrigger = social.id === 'ig' || social.id === 'wa';
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target={isModalTrigger ? '_self' : '_blank'}
                rel={isModalTrigger ? '' : 'noopener noreferrer'}
                onClick={(e) => {
                  if (isModalTrigger) {
                    e.preventDefault();
                    onSocialClick?.(social.id);
                  } else if (social.id === 'yt') {
                    e.preventDefault();
                    onSocialClick?.('yt');
                  }
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1), type: 'spring', stiffness: 200 }}
                whileHover={{
                  scale: 1.15,
                  y: -4,
                  backgroundColor: '#c39b56',
                  color: '#38040e',
                  boxShadow: '0 8px 20px rgba(195,155,86,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 border border-brand-gold/30 flex items-center justify-center text-brand-gold-light backdrop-blur-sm shadow-lg"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
