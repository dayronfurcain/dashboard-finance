import { DonutChart } from './Charts';
import { brands } from '../constants';

const TotalIncome = () => {
  return (
    <div className="bg-white p-4 sm:w-full rounded-lg overflow-x-auto">
      <DonutChart />
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      <div className="flex justify-between items-center text-gray-300 font-semibold px-4">
        <span>Today</span>
        <span>See more</span>
      </div>
      <ul className="p-4 flex flex-col items-start gap-4">
        {brands.map(({ id, icon, description, hour, value }) => (
          <li key={id} className="w-full flex justify-between items-center">
            <div className="w-10 h-10 p-2 bg-white rounded-md flex justify-center items-center border-[1px] border-gray-100">
              <img
                src={icon}
                alt={description}
                className="w-full h-full object-fit"
              />
            </div>
            <div className="flex-1 ml-4">
              <p className="font-medium text-base">{description}</p>
              <p className="font-medium text-sm text-gray-300">{hour}</p>
            </div>
            <span className="font-medium text-base text-gray-300">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalIncome;
