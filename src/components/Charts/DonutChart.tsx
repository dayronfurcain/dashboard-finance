import Chart from 'react-apexcharts';

const DonutChart = () => {
  const series = [44, 55, 41, 17, 15];

  const options = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      text: 'Total Income',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '40px',
              fontWeight: 'bold',
              offsetY: 16,
              formatter: (val: number) => `${val}k`,
            },
            total: {
              show: true,
              showAlways: false,
              formatter: function (w: any) {
                const val = w.globals.seriesTotals.reduce(
                  (a: number, b: number) => a + b,
                  0,
                );
                return `${val}k`;
              },
            },
          },
        },
      },
    },
  };

  return (
    <Chart
      series={series}
      options={options}
      type="donut"
      className="w-full min-w-[220px]"
    />
  );
};

export default DonutChart;
