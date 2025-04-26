"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact | FreshBulk</title>
      </Head>
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl text-red-500 text-center font-semibold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
