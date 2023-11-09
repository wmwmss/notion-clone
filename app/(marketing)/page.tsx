import { Button } from '@/components/ui/button'
import { Heading } from './_components/heading';
import Image from 'next/image'
import { Heroes } from './_components/heroes';
import { Footer } from './_components/footer';

const MarketingPage = () => {
  return ( 
    <div className='min-h-full flex flex-col'>
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10'>
        <Heading />
        <Heroes />
      </div>
      <Button variant={'purple'}>Click Me</Button>
      <Footer />
    </div>
  )
}

export default MarketingPage;