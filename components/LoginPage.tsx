import React, { useState } from 'react';
import { supabase } from '../supabase';

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onLoginSuccess }) => {
  // Tilstand for å bytte mellom Logg inn og Registrer
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegistering) {
        // Supabase Registrering
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert("Bruker opprettet! Sjekk e-posten din for bekreftelse.");
      } else {
        // Supabase Innlogging
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
      onLoginSuccess();
    } catch (err: any) {
      if (err.message?.includes('Invalid login credentials')) setError('Feil e-post eller passord.');
      else if (err.message?.includes('User already registered')) setError('E-posten er allerede i bruk.');
      else if (err.message?.includes('Email not confirmed')) setError('Bekreft e-posten din før du logger inn.');
      else setError(err.message || 'Noe gikk galt. Prøv igjen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      {/* Sentrert Kort */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            {isRegistering ? 'Opprett konto' : 'Velkommen tilbake'}
          </h2>
          <p className="text-slate-500 mt-2">
            {isRegistering ? 'Start din reise med Økonomiakademiet' : 'Logg inn for å fortsette læringen'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-post</label>
            <input
              type="email"
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
              placeholder="din@epost.no"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Passord</label>
            <input
              type="password"
              className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${loading ? 'bg-slate-400' : 'bg-slate-800 hover:bg-slate-700'
              }`}
          >
            {loading ? 'Vennligst vent...' : (isRegistering ? 'Registrer deg' : 'Logg inn')}
          </button>
        </form>

        {/* Bytte-lenke under knappen */}
        <div className="text-center mt-6">
          <p
            onClick={() => {
              setIsRegistering(!isRegistering);
              setError('');
            }}
            className="text-sm text-sky-500 hover:text-sky-600 font-medium cursor-pointer transition-colors"
          >
            {isRegistering
              ? 'Har du allerede konto? Logg inn'
              : 'Ny her? Registrer deg'}
          </p>
        </div>

        <button
          onClick={onBack}
          className="w-full mt-8 text-slate-400 text-sm hover:text-slate-600 transition-colors"
        >
          ← Tilbake til forsiden
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
