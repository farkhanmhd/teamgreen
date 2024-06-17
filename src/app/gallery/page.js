import GalleryImage from '../ui/components/GalleryImage';

const GalleryPage = () => {
  const galleryData = [
    {
      image: '/images/gallery-1.jpg',
      caption:
        'Preserving the Pristine: Our Digital Actions for a Greener Tomorrow.',
    },
    {
      image: '/images/gallery-2.jpg',
      caption:
        'Connected for Change: Harnessing Technology for Environmental Good.',
    },
    {
      image: '/images/gallery-3.jpg',
      caption: 'Turning Waste into Worth: The Cycle of Renewal Begins with Us.',
    },
    {
      image: '/images/gallery-4.jpg',
      caption:
        'Oases in the Concrete Jungle: Cultivating Green Spaces in Urban Hearts.',
    },
    {
      image: '/images/gallery-5.jpg',
      caption: 'Energizing the Future: Clean Power for a Sustainable World.',
    },
  ];
  return (
    <main className="h-[100dvh] bg-white px-[30px] pb-[50px] pt-[70px] lg:px-[50px] xl:px-[70px] dark:bg-black dark:text-white">
      <section className="h-full">
        <h1 className="mb-5 h-[5%] text-sm font-medium lg:text-lg">Gallery</h1>
        <ul className="flex h-[95%] flex-col overflow-hidden xl:flex-row">
          {galleryData.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default GalleryPage;
