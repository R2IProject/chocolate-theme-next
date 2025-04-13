import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F5F5F5] px-14">
      <Navbar />

      {/* Hero Banner */}
      <div className="pt-[19vh] w1536:pt-[18vh]">
        <section className="relative">
          <Image
            src="/assets/chocolate_hero_rotated.jpg"
            alt="Chocolate Hero"
            width={1000}
            height={1000}
            className="w-[100vw] h-[70vh] object-cover rounded-3xl brightness-50"
            priority
          />
          {/* Text Overlay */}
          <div className="absolute bottom-24 left-10 right-10">
            <p className="text-gray-200 text-center text-3xl italic">
              Crafted with Love. Devoured with Joy. <br /> Where Every Chocolate
              Tells a Story.
            </p>
            <center className="mt-10">
              <button className="text-white bg-btn hover:bg-btn_hover px-4 py-2 rounded-lg text-center sm:text-left transform hover:scale-110 transition duration-300">
                Explore Now!
              </button>
            </center>
          </div>
        </section>
      </div>

      {/* Product Banner */}
      <div className="flex ml-[10vw] pt-[13vh]">
        <Image
          src="/assets/photo-1604514813560-1e4f5726db65.jpeg"
          alt="Chocolate Hero"
          width={1000}
          height={1000}
          className="w-[24vw] h-[70vh] object-cover rounded-3xl brightness-50"
          priority
        />
        <div className="ml-[10vw] my-[6vh] w1536:my-[10vh] flex flex-col gap-[7vh] w1536:gap-[10vh]">
          <div>
            <h1 className="text-3xl font-semibold">Premium Ingredients</h1>
            <p className="text-left">
              We use only the finest and high-quality ingredients to create our
              delicious chocolates.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Wide Variety</h1>
            <p className="text-left">
              Explore a wide range of flavors and types of chocolates to satisfy
              your cravings.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Luxurious Packaging</h1>
            <p className="text-left">
              Our chocolates come in elegantly designed packaging, making them
              perfect for gifting or indulging yourself.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
