import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitial(): Theme {
  if (typeof document === 'undefined') return 'light'
  const saved = localStorage.getItem('four2labs-theme') as Theme | null
  if (saved === 'light' || saved === 'dark') return saved
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function ThemeToggle() {
  // Start as 'light' so the first render matches the prerendered HTML; the saved
  // theme is already applied to <html> by the inline script in index.html
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => { setTheme(getInitial()) }, [])

  useEffect(() => {
    if (!theme) return
    document.documentElement.dataset.theme = theme
    localStorage.setItem('four2labs-theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
