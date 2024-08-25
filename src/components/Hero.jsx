import { assets } from "../assets/frontend_assets/assets";

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <span className="w-8 md:w-11 h-[2px] bg-[#414141]"></span>
            <p className="font-medium text-sm md:text-base uppercase">
              Our Bestseller
            </p>
          </div>
          <h1 className="text-3xl font-prata sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base uppercase">
              Shop Now
            </p>
            <span className="w-8 md:w-11 h-[2px] bg-[#414141]"></span>
          </div>
        </div>
      </div>
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
      
    </section>
  );
}
