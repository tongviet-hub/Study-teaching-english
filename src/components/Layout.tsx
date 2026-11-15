import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Award, ClipboardCheck, GraduationCap, Languages, LayoutDashboard, Map, Menu } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Tổng quan', icon: LayoutDashboard, end: true },
  { to: '/roadmap', label: 'Lộ trình', icon: Map },
  { to: '/test', label: 'Bài test', icon: ClipboardCheck },
  { to: '/glossary', label: 'Thuật ngữ', icon: Languages },
  { to: '/certificates', label: 'Chứng chỉ', icon: Award },
]

function NavLinks({ vertical = false, onNavigate }: { vertical?: boolean; onNavigate?: () => void }) {
  return (
    <nav className={cn('flex gap-1', vertical && 'flex-col')}>
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              isActive && 'bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary',
            )
          }
        >
          <Icon className="size-4" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, search } = useLocation()

  useEffect(() => {
    // Trang có ?stage= tự cuộn tới giai đoạn tương ứng, không kéo về đầu trang.
    if (!search.includes('stage=')) window.scrollTo(0, 0)
  }, [pathname, search])

  return (
    <div className="min-h-svh bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="size-4.5" />
            </span>
            <span className="hidden sm:inline">Sư phạm tiếng Anh</span>
          </NavLink>
          <div className="ml-auto hidden md:block">
            <NavLinks />
          </div>
          <div className="ml-auto flex items-center gap-1 md:ml-2">
            <ThemeToggle />
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Mở menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="px-4">
                  <NavLinks vertical onNavigate={() => setMenuOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <Outlet />
      </main>
    </div>
  )
}
