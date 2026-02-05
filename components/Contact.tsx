
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold text-logo-blue uppercase tracking-widest">Kontakt</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Vil du samarbeide med oss?</p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Er du en lærer som vil teste vår prototype på skolen din, eller en bank som vil støtte et viktig samfunnsprosjekt? Vi vil gjerne høre fra deg.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900">Navn / Organisasjon</label>
              <input type="text" name="name" id="name" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-logo-blue sm:text-sm sm:leading-6" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">E-post</label>
              <input type="email" name="email" id="email" className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-logo-blue sm:text-sm sm:leading-6" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">Melding</label>
              <textarea name="message" id="message" rows={4} className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-logo-blue sm:text-sm sm:leading-6"></textarea>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="block w-full rounded-md bg-logo-blue px-3.5 py-2.5 text-center text-sm font-bold text-white shadow-sm hover:bg-logo-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-logo-blue transition-all">
                Send melding
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;