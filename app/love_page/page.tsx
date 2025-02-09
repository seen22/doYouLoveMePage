'use client'
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Love_page() {

  useEffect(() => {
    // Konfiguriere den Confetti-Effekt
    const duration = 20 * 1000; // 5 Sekunden
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    // Funktion, um zufällige Confetti-Partikel zu erzeugen
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    // Confetti-Animation
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Aufräumen nach der Animation
    return () => clearInterval(interval);
  }, []);



    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        
        <img src="/kiss.gif" alt="kiss Image" width="300" />
  
       
        <h1 style={{ fontFamily: 'Comic Sans MS, cursive', color: '#ff6f61', marginTop: '40px' }}>
          Love U more habibi ❤️🐼
        </h1>
      </div>
    );
  }