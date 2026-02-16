
import React, { useState } from 'react';
import { supabase } from './supabase';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Products from './components/Products.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import LoginPage from './components/LoginPage.tsx';
import AboutPage from './components/AboutPage.tsx';
import LearningDashboard from './components/LearningDashboard.tsx';
import PackagesPage from './components/PackagesPage.tsx';
import LegalPages from './components/LegalPages.tsx';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [view, setView] = useState<'home' | 'login' | 'about' | 'dashboard' | 'packages' | 'privacy' | 'terms'>('home');

  const handleLoginSuccess = async () => {
    const { data } = await supabase.auth.getUser();
    setUserId(data.user?.id ?? null);
    setIsLoggedIn(true);
    setView('dashboard');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserId(null);
    setIsLoggedIn(false);
    setView('home');
  };

  const navigateToLogin = () => {
    window.scrollTo(0, 0);
    setView('login');
  };

  const navigateToHome = () => {
    window.scrollTo(0, 0);
    setView(isLoggedIn ? 'dashboard' : 'home');
  };

  const navigateToAbout = () => {
    window.scrollTo(0, 0);
    setView('about');
  };

  const navigateToPackages = () => {
    window.scrollTo(0, 0);
    setView('packages');
  };

  const navigateToLegal = (type: 'privacy' | 'terms') => {
    window.scrollTo(0, 0);
    setView(type);
  };

  const handleContactClick = () => {
    if (view !== 'home') {
      setView('home');
      // Vent litt til DOM-en er oppdatert før vi scroller
      setTimeout(() => {
        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Spesialvisning for innlogging
  if (view === 'login') {
    return <LoginPage onBack={() => setView('home')} onLoginSuccess={handleLoginSuccess} />;
  }

  // Personvern og Brukervilkår
  if (view === 'privacy' || view === 'terms') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar
          onLoginClick={isLoggedIn ? handleLogout : navigateToLogin}
          onBrandClick={navigateToHome}
          onAboutClick={navigateToAbout}
          onContactClick={handleContactClick}
          onPackagesClick={navigateToPackages}
          isLoggedIn={isLoggedIn}
        />
        <main className="flex-grow">
          <LegalPages type={view} onBack={() => setView('home')} />
        </main>
        <Footer onLegalClick={navigateToLegal} />
      </div>
    );
  }

  // Dashboard vises kun hvis man er logget inn
  if (view === 'dashboard' && isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar
          onLoginClick={handleLogout}
          onBrandClick={navigateToHome}
          onAboutClick={navigateToAbout}
          onContactClick={handleContactClick}
          onPackagesClick={navigateToPackages}
          isLoggedIn={isLoggedIn}
        />
        <main className="flex-grow">
          {userId && <LearningDashboard userId={userId} />}
        </main>
        <Footer onLegalClick={navigateToLegal} />
      </div>
    );
  }

  // Læringspakker siden
  if (view === 'packages') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar
          onLoginClick={isLoggedIn ? handleLogout : navigateToLogin}
          onBrandClick={navigateToHome}
          onAboutClick={navigateToAbout}
          onContactClick={handleContactClick}
          onPackagesClick={navigateToPackages}
          isLoggedIn={isLoggedIn}
        />
        <main className="flex-grow">
          <PackagesPage onUnlock={navigateToLogin} />
        </main>
        <Footer onLegalClick={navigateToLegal} />
      </div>
    );
  }

  // Om oss siden
  if (view === 'about') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar
          onLoginClick={isLoggedIn ? handleLogout : navigateToLogin}
          onBrandClick={navigateToHome}
          onAboutClick={navigateToAbout}
          onContactClick={handleContactClick}
          onPackagesClick={navigateToPackages}
          isLoggedIn={isLoggedIn}
        />
        <main className="flex-grow">
          <AboutPage onRegisterClick={navigateToLogin} />
        </main>
        <Footer onLegalClick={navigateToLegal} />
      </div>
    );
  }

  // Hovedsiden
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onLoginClick={navigateToLogin}
        onBrandClick={navigateToHome}
        onAboutClick={navigateToAbout}
        onContactClick={handleContactClick}
        onPackagesClick={navigateToPackages}
        isLoggedIn={isLoggedIn}
      />

      <main className="flex-grow">
        <Hero onAboutClick={navigateToAbout} />
        <section id="produkter">
          <Products hasAccess={false} onUnlock={navigateToLogin} />
        </section>
        <section id="om-oss-summary">
          <About />
        </section>
        <section id="kontakt">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
