"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          } else {
            entry.target.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.0 } // Obraz musi być w 30% widoczny
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav className="w-full bg-white text-black py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="text-4xl font-bold ">BigCoaching</Link>
          <div className="space-x-4 p-6 m-2 w-1/2 text-center "> 
            <Link href="/onas" className="hover:underline">O nas</Link>
            <Link href="/oferta" className="hover:underline">Oferta</Link>
            <Link href="/terminarz" className="hover:underline">Terminarz</Link>
            <Link href="/aktualności" className="hover:underline">Aktualności</Link>
            <Link href="/kontakt" className="hover:underline">Kontakt</Link>
            <Link href="/zapisz" className="hover:underline">Zapisz się</Link>
          </div>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-center bg-blue-900 text-white">
      <img 
          ref={imageRef}
          src="/zdjecie.jpg" 
          alt="Description of the image" 
          className="w-400 h-96 object-cover rounded-lg opacity-0" 
        />
        <br></br>
        <br></br>
        <br></br>
        <h1 className="text-8xl font-bold text-white text-center mb-8">Odkryj Lepszą Przyszłość Z Nami</h1>
        <div className="columns-2 gap-8 max-w-screen-lg mx-auto">
          <p className="text-lg leading-relaxed">
            Witaj w BigCoaching – Twojej drodze do sukcesu! Jesteśmy tutaj, aby wspierać Cię na każdym etapie Twojego rozwoju. Niezależnie od tego, czy stawiasz pierwsze kroki w biznesie, chcesz rozwinąć swoją karierę, czy szukasz motywacji do osiągnięcia osobistych celów – BigCoaching to przestrzeń stworzona z myślą o Twoim sukcesie.
          </p>
          <p className="text-lg leading-relaxed">
            Nasza filozofia to połączenie pasji, doświadczenia i sprawdzonych metod, które pomogą Ci odkryć Twój pełny potencjał. Z BigCoaching, nie tylko nauczysz się, jak skutecznie działać, ale także jak utrzymać motywację i wytrwałość na każdym etapie swojej podróży. Dołącz do naszej społeczności i zacznij pracować nad swoimi celami z najlepszymi!
          </p>
        </div>
      </main>
    </>
  );
}