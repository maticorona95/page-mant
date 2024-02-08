import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

export default Footer;
