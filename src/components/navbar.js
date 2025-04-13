import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Navbar() {
  const NavbarList = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="relative z-10">
      <main
        className={`${geistSans.variable} ${geistMono.variable} absolute flex justify-center items-center w-full`}
      >
        <div className="flex justify-between items-center rounded-full px-5 bg-white w-auto">
          <div className="mr-96">
            <Image
              src="/assets/Wreana_logos.png"
              alt="Logo"
              width={60}
              height={60}
              priority
            />
          </div>
          <div className="mx-2">
            <ul className="flex gap-10 list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {NavbarList.map((item) => (
                <li
                  key={item.id}
                  className="transform hover:scale-110 transition duration-300 
              "
                >
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-80">
            <button className="list-inside list-decimal text-sm text-white p-2 rounded-lg text-center sm:text-left font-[family-name:var(--font-geist-mono)] bg-[#846a61] hover:bg-[#53423c] transform hover:scale-110 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
