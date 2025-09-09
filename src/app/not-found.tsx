'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();

  return (
    <section className='w-full flex flex-col items-center justify-center dark:bg-neutral-900 text-black dark:text-white'>
      <section className="w-full flex flex-col sm:px-6 lg:px-8 justify-center items-center max-w-[1440px] h-screen">
        <span
          style={{
            background: 'linear-gradient(135deg, #928EDC 14.68%, #1B0D99 82.04%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
          className="bg-gradient-to-b from-foreground to-transparent bg-clip-text md:text-[10rem] text-[7rem] font-extrabold leading-none text-transparent">
          404
        </span>
        <h2 className="mt-4 font-heading text-center text-mobile-body-2 md:text-desktop-body-1 font-semibold">
          Sorry, the page you&apos;re looking for cannot be found.
        </h2>
        <p className='text-neutral-500 text-center text-mobile-body-2 md:text-desktop-body-1'>
          Please proceed back to our homepage or try searching for something else.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Button
            className='border !font-semibold !rounded-none !text-primary-cr-700'
            onClick={() => router.back()} variant="ghost" size="lg">
            Go back
          </Button>
          <Button
            className="w-full !font-semibold text-desktop-body-3 sm:text-desktop-body-2 bg-primary-cr-700 hover:bg-primary-cr-800 text-white !py-2 !px-4 !rounded-none"
            onClick={() => router.push('/')}
            variant="default"
            size="lg"
          >
            Return to Home
          </Button>
        </div>
      </section>
    </section>
  );
}
