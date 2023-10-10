import { Card, Intro, Nav } from '@/components'
import Our from '@/components/Our'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid place-content-center h-screen bg-[#F0F0F0]'>
      <Our />
    </main>
  )
}





{/* <main className=' container space-y-20'>
  <Nav />
  <Intro />
  <Card />
</main> */}