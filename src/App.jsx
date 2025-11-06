import React from 'react';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import HelpDesk from './components/HelpDesk';

function App() {
  return (
    <div id="main" className="min-h-screen bg-amber-50 text-stone-900">
      <Hero />

      <main>
        <Videos />
        <Dashboard />
        <Team />
        <HelpDesk />
      </main>

      <footer className="bg-stone-900 text-amber-50">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-3 sm:flex-row items-center justify-between">
          <p className="text-sm">© {new Date().getFullYear()} Naitika Foundations • Guntur, India</p>
          <nav className="flex gap-4 text-sm">
            <a href="#videos" className="hover:underline">Videos</a>
            <a href="#dashboard" className="hover:underline">Dashboard</a>
            <a href="#team" className="hover:underline">Team</a>
            <a href="#help" className="hover:underline">Help Desk</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
