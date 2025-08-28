import { INavigation } from '@/types/header.interface'
import Link from 'next/link'
import React from 'react'

export default function Header({navLinks}:{navLinks: INavigation[]}) {
  return (
    <header className="max-sm:px-4">
        <nav>
          <ul className="flex flex-row justify-between font-bold text-sm sm:text-[1.375rem] sm:justify-center sm:gap-20 sm:bg-white/10 sm:p-5 sm:rounded-lg ">
            {navLinks && navLinks.length > 0 && navLinks.map((item: INavigation, index: number) => (
              <Link key={index} href={item.url || "#"}>
                <li className="cursor-pointer hover:text-blue-400 duration-300">
                  {item.name || ""}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
  )
}
