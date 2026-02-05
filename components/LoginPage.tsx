
import React, { useState } from 'react';
import Logo from './Logo.tsx';

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulerer et lite opphold for autentisering
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-logo-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-logo-blue/10 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div 
          className="flex justify-center cursor-pointer mb-6"
          onClick={onBack}
        >
          <div className="w-20 h-20 bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 hover:scale-110 transition-transform">
            <Logo />
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Velkommen tilbake
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Eller{' '}
          <button className="font-bold text-logo-blue hover:text-logo-blue-dark underline">
            start din 14-dagers gratis prøveperiode
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-10 px-6 shadow-2xl shadow-slate-200/50 sm:rounded-[2rem] sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700">
                E-postadresse
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-logo-blue focus:border-logo-blue sm:text-sm transition-all bg-slate-50/50 focus:bg-white"
                  placeholder="navn@eksempel.no"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-slate-700">
                Passord
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-logo-blue focus:border-logo-blue sm:text-sm transition-all bg-slate-50/50 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-logo-blue focus:ring-logo-blue border-slate-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                  Husk meg
                </label>
              </div>

              <div className="text-sm">
                <button type="button" className="font-bold text-logo-blue hover:text-logo-blue-dark">
                  Glemt passordet?
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-logo-blue hover:bg-logo-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logo-blue transition-all active:scale-95 shadow-logo-blue/20 disabled:opacity-50"
              >
                {isLoading ? 'Logger inn...' : 'Logg inn'}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500 uppercase tracking-widest text-[10px] font-bold">Eller fortsett med</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors shadow-sm">
                <span className="sr-only">Google</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.16-1.82 4.04-1.152 1.14-2.88 2.4-5.52 2.4-4.48 0-8.08-3.6-8.08-8.08s3.6-8.08 8.08-8.08c2.44 0 4.28.96 5.6 2.24l2.32-2.32C18.48 2.12 15.68 1 12.48 1 6.44 1 1.52 5.92 1.52 12s4.92 11 10.96 11c3.28 0 5.76-1.08 7.68-3.08 1.96-1.96 2.56-4.76 2.56-6.92 0-.64-.04-1.28-.12-1.92h-10.12z" /></svg>
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors shadow-sm">
                <span className="sr-only">Apple</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.96.95-2.04 1.94-3.32 1.94-1.3 0-1.72-.81-3.32-.81-1.6 0-2.08.79-3.28.81-1.26.02-2.34-1-3.32-1.94-2.02-2.04-3.5-5.74-3.5-8.48 0-4.38 2.62-6.69 5.2-6.69 1.3 0 2.24.9 3.08.9.84 0 1.98-.9 3.32-.9 1.12 0 4.22.42 5.96 3.13-4.38 2.22-3.66 7.92.52 9.58-.92 1.48-1.9 2.92-2.94 4.02zM12.03 5.34c.04-3.38 2.6-6.1 5.42-6.34.28 3.52-2.82 6.36-5.42 6.34z" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={onBack}
            className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Gå tilbake til forsiden
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
