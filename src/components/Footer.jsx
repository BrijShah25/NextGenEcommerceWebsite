import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-textPrimary py-8 mt-20 dark:bg-primary">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 ModernShop. All rights reserved.</p>
        <p className="mt-2">
          Follow us on 
          <a href="#" className="text-accent ml-2">Instagram</a>, 
          <a href="#" className="text-accent ml-2">Facebook</a>, 
          <a href="#" className="text-accent ml-2">Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
