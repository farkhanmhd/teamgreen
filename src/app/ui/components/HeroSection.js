import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex h-[100dvh] w-full flex-col gap-y-8 pt-[110px] font-medium lg:gap-y-0 lg:pt-0 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex w-full lg:h-[60%] xl:order-2 xl:h-auto xl:max-w-[456px]">
        <Image
          src="/hero.png"
          alt="hero image"
          width={456}
          height={456}
          className="m-auto"
        />
      </div>
      <div className="xl:order-1 xl:max-w-[60%]">
        <h1 className="mb-5 text-2xl leading-tight lg:text-5xl">
          Discover the Sustainable Path to a Cleaner Planet
        </h1>
        <p className="lg:text-base">
          Embracing Eco-Friendly Innovations for Future Generations
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
