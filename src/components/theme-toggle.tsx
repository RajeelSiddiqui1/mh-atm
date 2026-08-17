import { Sun } from "lucide-react"

export function ThemeToggle() {
  return (
    <button
      className="relative p-2 rounded-lg bg-secondary hover:bg-muted text-foreground transition-colors"
      aria-label="Light mode only"
    >
      <Sun className="h-5 w-5" />
    </button>
  )
}
