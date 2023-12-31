import { Copyright } from '@/componentes/Copyright'
import { EmptyMemories } from '@/componentes/EmptyMemories'
import { Hero } from '@/componentes/Hero'
import { Signin } from '@/componentes/Signin'
export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div
        className="relative flex flex-col items-start justify-between  overflow-hidden
       border-r border-white/10 bg-[url(../imagens/bg-stars.svg)] bg-cover px-28 py-16"
      >
        {/* Blur */}
        <div
          className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2
          translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"
        />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes "></div>
        <Signin />
        <Hero />
        <Copyright />
      </div>
      {/* Right */}
      <div className="flex flex-col bg-[url(../imagens/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
