import { NavBar } from '@/components/nav-bar'

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center relative">
      <NavBar />
      <section className="w-full h-full max-w-7xl flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold text-center">
          Welcome to the{' '}
          <span className="bg-gradient-to-r from-pink-700 to-violet-600 text-transparent bg-clip-text">
            largest dealer
          </span>{' '}
          in America
        </h1>
      </section>
    </main>
  )
}
