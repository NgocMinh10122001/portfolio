"use client"
import { useScrollToElement } from "@/hooks/useScrollToElement";
import { INavigation } from "@/types/header.interface";


export default function Header({ navLinks }: { navLinks: INavigation[] }) {
  const scrollToElement = useScrollToElement();
  
  const onClick = (elementId: string) => {
    scrollToElement(elementId);
  };
  return (
    <header className="max-sm:px-4">
      <nav>
        <ul className="flex flex-row justify-between font-bold text-sm sm:text-[1.375rem] sm:justify-center sm:gap-20 sm:bg-white/10 sm:p-5 sm:rounded-lg ">
          {navLinks &&
            navLinks.length > 0 &&
            navLinks.map((item: INavigation, index: number) => (
              <div key={index} onClick={() => onClick(item.url)}>
                <li className="cursor-pointer hover:text-blue-400 duration-300">
                  {item.name || ""}
                </li>
              </div>
            ))}
        </ul>
      </nav>
    </header>
  );
}
