import { arrow, calendar } from '../constants';

const Transaction = () => {
  return (
    <div className="bg-white sm:w-full p-4 rounded-lg overflow-x-auto">
      <div className="min-w-[450px]">
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="font-semibold text-2xl">Transaction</h2>
          <div className=" bg-[#F8F9FE] flex justify-center items-center rounded-md gap-2 px-2 py-1">
            <div className="text-gray-400 text-xl">{calendar.icon}</div>
            <p className="text-gray-400 font-semibold">10 May - 20 May</p>
            <div className="text-gray-400 ">{arrow.icon}</div>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F8F9FE]">
              <td className="border-l-2 border-l-gray-400">Name</td>
              <td className="border-l-2 border-l-gray-400">Date</td>
              <td className="border-l-2 border-l-gray-400">Price</td>
              <td className="border-l-2 border-l-gray-400">Status</td>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>Adobe After Effect</td>
              <td>Sat, 20 Apr 2022</td>
              <td>$80.09</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
