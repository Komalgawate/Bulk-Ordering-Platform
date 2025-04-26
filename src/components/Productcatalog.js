import Image from 'next/image';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
export default function ProductCatalog() {
    return (
        
        <section className="relative flex flex-col items-center">
            <div className="flex justify-between w-full max-w-4xl items-center">
                {/* Left Image */}
                <div className="h-54 w-54 relative">
                    <Image 
                        src={'/img3.png'} 
                        alt={'fruit'}  
                        layout="fill" 
                        objectFit="contain" 
                        className='rounded-full'
                    />
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-center mx-4">
                    <h1 className="text-4xl font-semibold uppercase text-red-500">Check Out</h1>
                    <h1 className='font-semibold text-gray-700 text-2xl py-2'>Fresh Vegetables & Fruits @ Best Prices</h1>
                
                </div>

                {/* Right Image */}
                <div className="h-50 w-50 relative">
                    <Image 
                        src={'/img4.png'} 
                        alt={'veges'}  
                        layout="fill" 
                        objectFit="contain"
                        className='rounded-full' 
                    />
                </div>
            </div>
    </section>
    );
}
