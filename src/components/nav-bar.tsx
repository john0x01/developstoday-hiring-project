import { Menu, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export function NavBar({ short }: { short?: boolean }) {
  return (
    <div className="w-full border border-b-input">
      <div className="w-full max-w-7xl flex justify-between items-center p-4">
        {/* Logo */}
        <p className="text-xl font-black">
          <Link href="/">
            <span className="opacity-40">CAR</span>
            DEALER
          </Link>
        </p>
        {short || (
          <nav className="lg:flex items-center gap-8 hidden">
            <Link href="#">Cars for Sale</Link>
            <Link href="#">Sell your Car</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Help</Link>
          </nav>
        )}
        <div className="flex items-center gap-2">
          <Button variant="ghost">
            Login
            <User />
          </Button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium bg-accent-foreground text-accent relative overflow-hidden group px-6 h-12">
            <span className="group-hover:text-accent-foreground transition-colors duration-500 z-10">
              Sign Up
            </span>
            <div className="absolute left-0 right-0 bottom-0 h-0 bg-accent group-hover:h-full transition-all duration-500" />
          </button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu />
          </Button>
        </div>
      </div>
    </div>
  )
}
