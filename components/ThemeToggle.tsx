'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type ThemeMode = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme: ThemeMode =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : prefersDark
          ? 'dark'
          : 'light';

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
