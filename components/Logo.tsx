import React from 'react';
// Vi går ut av components-mappen (..) for å finne logo.png i hovedmappen
import logoUrl from '../logo.png';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logoUrl} 
        alt="Logo" 
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          // Hvis bildet ikke finnes, vises denne teksten istedenfor et "knust" bilde-ikon
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="font-bold text-xl text-slate-900">Økonomiakademiet UB</span>
    </div>
  );
};

export default Logo;
