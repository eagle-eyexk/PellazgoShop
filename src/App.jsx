import { useEffect, useState } from 'react';

// This is the Capacitor shell entry point.
// The full React SPA is built from the Base44 platform and injected via dist/.
// This file only runs in development (local npm run dev).

export default function App() {
  const [platform, setPlatform] = useState('web');
  
  useEffect(() => {
    if (window.Capacitor) {
      setPlatform(window.Capacitor.getPlatform());
    }
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      background: '#0f3320',
      color: '#B8902A',
      fontFamily: 'Georgia, serif',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h1 style={{ fontSize: '2rem', letterSpacing: '0.3em' }}>PELLAZGO</h1>
      <p style={{ fontSize: '0.75rem', opacity: 0.5, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Albanian Premium E-Commerce
      </p>
      <p style={{ fontSize: '0.65rem', opacity: 0.3, marginTop: '2rem' }}>
        Platform: {platform} | Build: {new Date().getFullYear()}
      </p>
    </div>
  );
}
