import "../global.css";
import Link from "next/link";

const navigation = [
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-10 animate-fade-in z-0">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-3xl duration-500 text-zinc-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <h1
        className="z-0 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
      >
        Aditya Misra
      </h1>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-zinc-400">
          Software engineer with a passion to create for social good
        </h2>
      </div>
    </div>
  );
}
