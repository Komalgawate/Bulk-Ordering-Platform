import Image from 'next/image';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
export default function Menuitem(){
    return(
        <section className="relative flex flex-col items-center">
         
         <div className='grid grid-cols-4 gap-10 py-8'>
  <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
    <img src="/img8.jpg" alt="apple" className="mx-auto h-34 w-34 object-cover rounded-md mb-4" />
    <h4 className="text-lg font-semibold mb-2">Apple</h4>
    <p className="text-gray-700 mb-3">
      Price: ₹70 / 1kg
    </p>
    <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
      Place Order
    </button>
  </div>

  <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
    <img src="/img7.jpg" alt="apple" className="mx-auto h-34 w-34 object-cover rounded-md mb-4" />
    <h4 className="text-lg font-semibold mb-2">Orange</h4>
    <p className="text-gray-700 mb-3">
      Price: ₹80 / 1kg
    </p>
    <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
      Place Order
    </button>
  </div>

  <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
    <img src="/img9.webp" alt="tomato" className="mx-auto h-34 w-34 object-cover rounded-md mb-4" />
    <h4 className="text-lg font-semibold mb-2">Potato</h4>
    <p className="text-gray-700 mb-3">
      Price: ₹30 / 1kg
    </p>
    <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
      Place Order
    </button>
  </div>

  <div className='bg-gray-200 p-4 rounded-lg text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
    <img src="/img6.jpg" alt="tomato" className="mx-auto h-34 w-34 object-cover rounded-md mb-4" />
    <h4 className="text-lg font-semibold mb-2">Tomato</h4>
    <p className="text-gray-700 mb-3">
      Price: ₹10 / 1kg
    </p>
    <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
      Place Order
    </button>
  </div>

</div>
        </section>
    );
}