import Head from 'next/head';
export default function About() {
  return (
    <>
      <Head>
        <title>About | FreshBulk</title>
      </Head>
      <div className="flex justify-center bg-white px-4 pt-10 md:pt-12">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-red-600 mb-4 border-b-2 border-gray-300 pb-2">
            About FreshBulk
          </h1>

          <p className="text-base text-gray-800 font-semibold leading-relaxed">
            Welcome to <span className="font-semibold text-green-800">FreshBulk</span> — your reliable platform for
            bulk vegetable fruit ordering We make it easier for restaurants, caterers & bulk buyers
            to order fresh produce directly. Our mission is to connect buyers with the freshest
            products in the simplest way possible.
          </p>
          <p className="text-base text-gray-800 font-semibold leading-relaxed mt-4">
            This platform was built with ❤️ and 💻 by passionate developers aiming to simplify
            large-quantity produce purchasing for everyone. Whether you're a small business or a large enterprise,
            FreshBulk helps you order with confidence and ease.
          </p>
        </div>
      </div>
    </>
  );
}
