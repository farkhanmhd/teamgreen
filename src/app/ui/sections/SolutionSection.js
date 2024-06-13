import SolutionItemsContainer from '../components/SolutionItemsContainer';

const SolutionSection = () => {
  return (
    <section
      className="mb-[110px] overflow-x-hidden px-[30px] font-medium lg:px-[50px] xl:px-[70px]"
      id="solution"
    >
      <SolutionItemsContainer />
    </section>
  );
};

export default SolutionSection;
