import React from 'react';

const Hero: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    backgroundImage: `url('../Imagenes/pcpr.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <div style={heroStyle}>
      <div>
        <h1>Texto en el Hero</h1>
        <p>Descripción del Hero section sin imagen de fondo.</p>
      </div>
    </div>
  );
};

export default Hero;
