"use client"; // Wichtig, da wir useState verwenden (Client-Komponente)

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [position, setPosition] = useState({ x: 500, y: 0 });
  const router = useRouter(); 

  const handleNoHover = () => {
    const buttonWidth = 100; 
    const buttonHeight = 50;
    const x = Math.random() * (window.innerWidth - buttonWidth);
    const y = Math.random() * (window.innerHeight - buttonHeight);
    setPosition({ x, y });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <img src="/tedisLUV.gif" alt="Kiss Sticker" width="200" />
      <h1 style={{ fontFamily: 'Comic Sans MS, cursive', color: '#ff6f61' }}>
        Do you love me?
      </h1>
      <div style={{ position: 'relative' }}>
        <button
          style={{ marginRight: '-200px', padding: '10px 20px', fontSize: '16px' ,
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#ff4a3d', 
            color: 'white', // Weißer Text
            border: 'none', // Kein Rahmen
            borderRadius: '20px', // Abgerundete Ecken
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Schatten
            cursor: 'pointer', // Zeiger-Cursor
            transition: 'transform 0.2s, background-color 0.2s',
          }}
          onClick={() => router.push('/love_page')}
          onMouseEnter={(e)=> {
            e.currentTarget.style.transform='scale (1.1)';
            e.currentTarget.style.background='#F4A460';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Zurück zur normalen Größe
            e.currentTarget.style.backgroundColor = '#ff4a3d'; // Zurück zur normalen Farbe
          }}
        >
          Yes
        </button>
        <button
          style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `${position.y}px`,
            padding: '10px 20px',
            fontSize: '16px',
            fontFamily: 'Comic Sans MS, cursive',
            backgroundColor: '#ff4a3d', 
            color: 'white', // Weißer Text
            border: 'none', // Kein Rahmen
            borderRadius: '20px', // Abgerundete Ecken
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Schatten
            cursor: 'pointer', // Zeiger-Cursor
            transition: 'transform 0.2s, background-color 0.2s',
          }}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
}