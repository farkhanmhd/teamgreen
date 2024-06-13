import { benefits } from '@/app/utils/data';
import BenefitItem from './BenefitItem';

const BenefitItemsContainer = () => {
  return (
    <ul className="flex flex-col gap-y-[100px] xl:gap-y-[200px]">
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} {...benefit} />
      ))}
    </ul>
  );
};

export default BenefitItemsContainer;
