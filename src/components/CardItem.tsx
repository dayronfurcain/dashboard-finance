import { RiArrowDownFill, RiArrowUpFill } from 'react-icons/ri';

interface CardItemProps {
  stateOfPrice: string;
  description: string;
  valueOfState: string;
  icon: JSX.Element;
  price: string;
}

const CardItem = ({
  stateOfPrice,
  description,
  valueOfState,
  icon,
  price,
}: CardItemProps) => {
  return (
    <li className="bg-white p-4 rounded-lg flex flex-col justify-between items-start gap-4">
      <div className="flex items-center justify-between w-full">
        <span className="font-normal text-2xl text-gray-400">
          {description}
        </span>
        <div className="flex justify-center items-center">
          {stateOfPrice === 'incremented' ? (
            <RiArrowUpFill className="text-green-600" />
          ) : (
            <RiArrowDownFill className="text-red-600" />
          )}
          <span
            className={`${
              stateOfPrice === 'incremented' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {valueOfState}
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 w-full">
        <div
          className={`w-8 h-8 rounded-[50%] flex justify-center items-center text-white text-xl`}
        >
          {icon}
        </div>
        <span className="text-2xl font-semibold">{price}</span>
      </div>
    </li>
  );
};

export default CardItem;
