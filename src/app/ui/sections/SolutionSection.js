import SolutionItemsContainer from '../components/SolutionItemsContainer';

const SolutionSection = () => {
  return (
    <section
      className="overflow-x-hidden px-[30px] pb-[110px] font-medium duration-200 lg:px-[50px] xl:px-[70px] dark:bg-black dark:text-white"
      id="solution"
    >
      <SolutionItemsContainer />
    </section>
  );
};

export default SolutionSection;
