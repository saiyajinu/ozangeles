"use client"
import Posts from '@/components/Posts'
import Team from '@/sections/Team'
import Hero from '@/sections/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
      
      <section className="teambg">
        <Posts />
      </section>
        
    </div>
    
  )
}
