import * as React from "react"

type Theme = "light"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("dark")
    root.classList.add("light")
  }, [])

  const value = React.useMemo(() => ({
    theme: "light" as Theme,
    setTheme: () => {},
  }), [])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

