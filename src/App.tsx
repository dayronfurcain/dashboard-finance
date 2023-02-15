import {
  Sibebar,
  Header,
  CardList,
  BarChart,
  Transaction,
  TotalIncome,
} from './components';

const App = () => {
  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Sibebar />
      <Header />
      <main className="min-h-[calc(100vh-72px)] p-4 lg:pl-60">
        <CardList />
        <div className="mt-4 w-full h-full flex flex-col md:flex-row justify-center items-start gap-4">
          <div className="w-full md:w-[65%] flex flex-col gap-4">
            <BarChart />
            <Transaction />
          </div>
          <div className="w-full md:w-[35%]">
            <TotalIncome />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
