import React from 'react';
import Nav from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Card';
import Footer from './components/footer/footer';
import ContactForm from './components/froms/contacto/Contacto';


const Home: React.FC = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Cards/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Home;
