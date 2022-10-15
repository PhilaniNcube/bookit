import Image from "next/future/image";

const Hero = () => {
  return (
    <section className="my-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="/images/hero.jpg"
            alt="Hero"
            width={2000}
            height={1131}
            className="w-full object-cover"
          />
          <div className="absolute flex items-center justify-center flex-col inset-0 space-y-6 bg-slate-500/60">
            <h1 className="text-white font-medium text-2xl md:text-4xl mix-blend-normal lg:text-6xl text-center">
              Looking For A Place To Stay
            </h1>

            <button className="px-8 py-2 rounded-full flex items-center space-x-3 text-red-500 text-xl font-medium bg-white">
              <span>Book Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
