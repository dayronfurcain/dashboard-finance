import Chart from 'react-apexcharts';

const BarChart = () => {
  const series = [
    {
      name: 'Income',
      data: [44453, 55456, 57658, 5634, 61123, 58455, 63778, 60788],
    },
    {
      name: 'Outcome',
      data: [76453, 85231, 10456, 9846, 87564, 10523, 91123, 94567],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    grid: {
      strokeDashArray: 1,
      borderColor: '#E5E7EB',
      xaxis: {
        lines: { show: false },
      },
    },
    title: {
      text: 'Analytics',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <div className="bg-white sm:w-full p-4 rounded-lg overflow-x-auto">
      <Chart
        series={series}
        options={options}
        type="bar"
        className="w-full min-w-[340px]"
      />
    </div>
  );
};

export default BarChart;
