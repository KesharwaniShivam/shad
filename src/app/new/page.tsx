import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  return (
    <main className='flex flex-col justify-center items-center '>
    <div className='text-2xl'>New page</div>
    <Button variant={'destructive'} className='mt-4'>new butt</Button>
    </main>
  )
}

export default page