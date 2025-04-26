import Image from 'next/image';
export default function Hero() {
  return (
    <section className='grid grid-cols-2 py-5 gap-16'>
   <div >
      <h3 className='text-4xl text-red-400 font-semibold'>Fresh Picks, Fast Clicks, Daily Delights...</h3>
      <br/>
      <br/>
      <p className='text-1xl font-semibold text-gray-700'>
          <i>Bulk orders of fresh vegetables & fruits — handpicked for quality, perfect for homes, restaurants, and businesses. Bringing farm-fresh goodness to your doorstep.</i>
        </p>
      </div>    
      <div className='relative'>
        <Image className='rounded-4xl'
          src="/img1.webp"
          alt="vegetables"
          width={400}
          height={200}
        />
      </div>
    </section>
  );
}
