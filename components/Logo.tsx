
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-full" }) => {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} object-contain`}
    >
      {/* Bakgrunnsfarge / Base farge definert via Tailwind eller fallback */}
      
      {/* Studenthatt (Mortarboard) */}
      <path 
        d="M256 40L40 160L256 280L472 160L256 40Z" 
        fill="currentColor"
        className="text-logo-blue"
      />
      <path 
        d="M100 190V260C100 260 160 310 256 310C352 310 412 260 412 260V190" 
        fill="currentColor"
        className="text-logo-blue"
      />
      {/* Dusk (Tassel) */}
      <path 
        d="M100 180C80 180 75 220 75 250C75 280 85 300 100 300" 
        stroke="currentColor" 
        strokeWidth="12"
        strokeLinecap="round"
        className="text-logo-blue"
      />

      {/* Sirkel og Vekst-pil Kombinasjon */}
      <g className="text-logo-blue">
        {/* Sirkelen med "hull" for pilen */}
        <path 
          d="M256 230C190 230 136 284 136 350C136 416 190 470 256 470C322 470 376 416 376 350C376 325 368 302 355 283" 
          stroke="currentColor" 
          strokeWidth="42"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Vekst-pilen */}
        <path 
          d="M110 450L210 350L260 400L430 190" 
          stroke="currentColor" 
          strokeWidth="42" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Pilspiss */}
        <path 
          d="M430 190L445 280L360 220L430 190Z" 
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default Logo;
