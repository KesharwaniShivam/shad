import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center  text-xl">
      <h1>ShadCN with SHIvam</h1>
      <button className='px-6 py-2 mt-5 bg-slate-600 rounded-md hover:bg-slate-800'>submit</button>
      <Button className='mt-4'>new button</Button>
    </main>
  )
}
