"use client"
import Posts from '@/sections/Posts'
import Team from '@/sections/Team'
import Hero from '@/sections/Hero'
import Matches from '@/sections/Matches'

export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
      <Matches />
      <Posts />
    </div>
    
  )
}
