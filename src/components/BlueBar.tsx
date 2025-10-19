import { Facebook, Instagram, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BlueBar() {
  return (
    <div className="bg-blue-700 text-white">
    <div className="container mx-auto flex justify-between items-center py-2 lg:px-6">
      <ul className="flex gap-6">
        <li>
        <Link
  href="https://facebook.com"
  aria-label="réseau social Facebook pour RS DELIV "
  className="hover:text-gray-300 transition"
>
  <Facebook className="w-6 h-6" />
</Link>


        </li>
        <li>
        <Link
  href="https://instagram.com"
  aria-label="réseau social Instagram pour RS DELIV "
  className="hover:text-gray-300 transition"
>
  <Instagram className="w-6 h-6" />
</Link>
        </li>
      </ul>
      <ul className="flex gap-6 items-center">
        <li className="text-center font-medium">
          <p className="text-xs">Notre siège social</p>
          <div className="flex gap-1 justify-center">
            <span className="font-normal">à</span>
            <p className="font-bold underline">PARIS</p>
          </div>
        </li>
        <li className="flex items-center gap-1 text-lg font-semibold">
          <Phone className="w-5 h-5" />
          <a href="tel:0230882506" className="hover:text-gray-300 transition">
            02.30.88.25.06
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}
