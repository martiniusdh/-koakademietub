import React from 'react';
import logoUrl from '../logo.png';

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={logoUrl} 
        alt="Økonomiakademiet Logo" 
        className="h-16 w-auto object-contain" // h-16 gjør logoen mye større
        style={{ minWidth: '150px' }} // Sikrer at den ikke blir borte
        onError={(e) => {
          console.error("Klarte ikke laste logo", e);
        }}
      />
    </div>
  );
};

export default Logo;
