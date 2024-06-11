import Image from 'next/image';

const SolutionItem = ({
  src,
  width,
  height,
  title,
  subtitle,
  imageFirst,
  id,
}) => {
  return (
    <li className="w-full" id={id}>
      <figure className="flex w-full flex-col gap-y-[23px] xl:flex-row xl:gap-x-[200px]">
        <div
          className={`${imageFirst ? 'order-1' : 'order-2'} max-h-[456px] w-full max-w-[456px] xl:w-1/2`}
        >
          <Image
            src={src}
            alt="solution image"
            width={width}
            height={height}
            className="w-full object-cover xl:m-auto"
          />
        </div>
        <figcaption
          className={`${imageFirst ? 'order-2' : 'order-1'} xl:flex xl:w-1/2 xl:flex-col xl:justify-between`}
        >
          <div className="mb-[23px] overflow-hidden">
            <h3 className="text-xl leading-tight lg:text-4xl">{title}</h3>
          </div>
          <div className="overflow-hidden">
            <p className="text-xxs lg:text-md">{subtitle}</p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

export default SolutionItem;
