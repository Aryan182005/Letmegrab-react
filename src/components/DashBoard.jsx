import { useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { PiDotsThreeOutline } from "react-icons/pi";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import Sendmony from '../assets/money-send.png';
import Recivemony from '../assets/money-recive.png';
import bank from '../assets/bank.png';
import paypal from '../assets/logos_paypal.png';
import figma from '../assets/logos_figma.png';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { MdCalendarMonth } from "react-icons/md";

const DashBoard = () => {
    const [startDate, setStartDate] = useState(new Date());


  const chartOptions = useMemo(
    () => ({
      chart: {
        type: 'bar',
        toolbar: { show: false },
        zoom: { enabled: false },
        foreColor: '#6b7280',
      },
      colors: ['#15a39a'],
      plotOptions: {
        bar: {
          columnWidth: '40%',
          borderRadius: 10,
          borderRadiusApplication: 'end',
        },
      },
      dataLabels: { enabled: false },
      grid: {
        borderColor: '#e5e7eb',
        strokeDashArray: 4,
        yaxis: { lines: { show: true } },
        xaxis: { lines: { show: false } },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: '#9ca3af',
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        min: 0,
        max: 16000,
        tickAmount: 4,
        labels: {
          formatter: (value) => {
            if (!value) return '$0';
            return `$${(value / 1000).toFixed(0)}k`;
          },
          style: {
            colors: '#9ca3af',
            fontSize: '12px',
          },
        },
      },
      tooltip: {
        theme: 'dark',
        y: {
          formatter: (value) => `$${value.toLocaleString()}`,
          title: {
            formatter: () => 'Expense',
          },
        },
      },
      legend: { show: false },
    }),
    [],
  );

  const series = useMemo(
    () => [
      {
        name: 'Expense',
        data: [12000, 6000, 15000, 9000, 8000, 11000, 15000, 13000, 16000, 14000, 12000, 15000],
      },
    ],
    [],
  );

  const categorySeries = useMemo(
    () => [8000, 2130, 1510, 2245, 4385, 1000],
    [],
  );

  const categoryOptions = useMemo(
    () => ({
      chart: {
        type: 'donut',
        toolbar: { show: false },
         width: '100%',
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            plotOptions: {
              pie: {
                donut: {
                  size: '60%',
                },
              },
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              pie: {
                donut: {
                  size: '70%',
                },
              },
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              pie: {
                donut: {
                  size: '60%',
                },
              },
            },
          },
        },
      ],  
      labels: [
        'Employees Salary',
        'Material Supplies',
        'Company tax',
        'Maintenance system',
        'Development System',
        'Production Tools',
      ],
      colors: ['#EB7CA6', '#FFACC8', '#4120A9', '#40A198', '#5CAFFC', '#A1A9FE'],
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
            borderRadius: 10,
          },
          expandOnClick: false,
        },
      },
      tooltip: {
        y: {
          formatter: (value) => `$${value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`,
        },
      },
    }),
    [],
  );

  return (
    <div className="w-full p-2 sm:p-6 flex flex-wrap xl:flex-nowrap gap-6">
      <div className="w-full xl:w-8/12 flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow-sm px-6 py-5">
            <div className="flex items-center justify-between mb-4">
            <div>
                <h2 className="text-sm sm:text-lg font-semibold text-gray-900">Spending Statistics</h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
                <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50">
                <span className="-mt-0.5">&#8249;</span>
                </button>
                <span className="text-gray-800 font-medium">2024</span>
                <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50">
                <span className="-mt-0.5">&#8250;</span>
                </button>
            </div>
            </div>

            <div className="h-64 md:h-72">
            <ReactApexChart options={chartOptions} series={series} type="bar" height="100%" />
            </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm px-6 py-5 w-full flex flex-wrap xl:flex-nowrap items-center justify-between">
            <div className="w-full xl:w-6/12">

                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-black text-sm md:text-base font-medium">Total Income</h3>

                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <span className="text-[#7FB519] text-2xl"><FaArrowUpLong /></span>
                    </div>
                </div>

                <div className="flex items-end gap-2 mb-5">
                    <h1 className="text-base sm:text-[24px] 2xl:text-[32px] font-bold text-gray-800">$50,530.00</h1>
                    <span className="text-[#90A3BF] font-semibold text-xs sm:text-sm mb-1 sm:mb-2">(USD)</span>
                </div>

                <p className="text-sm">
                    <span className="text-[#7FB519] font-medium text-xs lg:text-base">20%</span>
                    <span className="text-[#90A3BF] font-medium text-xs lg:text-base"> increase compared to last week</span>
                </p>

            </div>

            <div className="block w-[398px] xl:w-px h-px xl:h-24 bg-gray-200 my-6 xl:my-0 xl:mx-6"></div>

            <div className="w-full xl:w-6/12">

            <div className="flex justify-between items-center mb-3">
                <h3 className="text-black text-sm md:text-base font-medium">Total Expense</h3>

                <div className="bg-gray-100 p-2 rounded-lg">
                    <span className="text-[#FF4423] text-2xl"><FaArrowDownLong /></span>
                </div>
            </div>

            <div className="flex items-end gap-2 mb-5">
                <h1 className="text-base sm:text-[24px] 2xl:text-[32px] font-bold text-gray-800">$19,760.00</h1>
                <span className="text-[#90A3BF] font-semibold text-xs sm:text-sm mb-1 sm:mb-2">(USD)</span>
            </div>

            <p className="text-sm mb-2">
                <span className="text-[#FF4423] font-medium text-xs lg:text-base">10%</span>
                <span className="text-[#90A3BF] font-medium text-xs lg:text-base"> decrease compared to last week</span>
            </p>

            </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm px-4 lg:px-6 py-5">
            <div className="flex !justify-between items-center mb-8">
                <h2 className="text-sm sm:text-lg font-semibold text-gray-700">
                    Transaction History
                </h2>

                <DatePicker 
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd MMM yyyy"
                    customInput={
                        <button className="  flex items-center gap-2 border-2 border-[#C3D4E9] px-2 md:px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
                            <MdCalendarMonth size={20} className='w-4 md:w-5 h-4 md:h-5'/> 
                            <span className='text-xs md:text-base'>{startDate.toDateString()}</span>
                        </button>
                    }
            />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 text-gray-400 text-sm border-b border-t py-3 mb-3">
                <span className=' text-[#90A3BF] cursor-pointer text-xs lg:text-base'>Transactions</span>
                <span className="flex items-center gap-1 text-[#90A3BF] cursor-pointer text-xs lg:text-base">Date<FaAngleDown /></span>
                <span className="flex items-center gap-1 text-[#90A3BF] cursor-pointer text-xs lg:text-base">Amount <FaAngleDown /></span>
                <span className="flex items-center gap-1 text-[#90A3BF] cursor-pointer text-xs lg:text-base">Status <FaAngleDown /></span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 items-center py-4 border-b">

                <div className="flex items-center gap-3">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full"><img src={bank} alt="bank" className='w-4 h-4'/></div>
                    <span className="text-gray-700 font-medium text-xs lg:text-base">Bank Transfer</span>
                </div>

                <span className="text-gray-800 font-semibold text-xs lg:text-base">Jan 01,2022</span>
                <span className="text-gray-800 font-semibold text-xs lg:text-base">$2,000.00</span>

                <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#7FB519] opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-3 h-3 bg-[#7FB519] rounded-full"></span>
                    </div>
                    <span className="text-gray-600 text-xs lg:text-base">Completed</span>
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 items-center py-4 border-b">

                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full"><img src={paypal} alt="bank" className='w-4 h-4 object-contain'/></div>
                    <span className="text-gray-700 font-medium text-xs lg:text-base">Paypal Account</span>
                </div>

                <span className="text-gray-800 font-semibold text-xs lg:text-base">Jan 04,2022</span>
                <span className="text-gray-800 font-semibold text-xs lg:text-base">$2,000.00</span>

                <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#DBA32A] opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-3 h-3 bg-[#DBA32A] rounded-full"></span>
                    </div>
                    <span className="text-gray-600 text-xs lg:text-base">Pending</span>
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 items-center py-4">

                <div className="flex items-center gap-3">
                    <div className="bg-purple-100 text-purple-600 p-3 rounded-full"><img src={figma} alt="bank" className='w-4 h-4 object-contain'/></div>
                    <span className="text-gray-700 font-medium text-xs lg:text-base">Bank Transfer</span>
                </div>

                <span className="text-gray-800 font-semibold text-xs lg:text-base">Jan 06,2022</span>
                <span className="text-gray-800 font-semibold text-xs lg:text-base">$2,000.00</span>

                <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#DB2719] opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-3 h-3 bg-[#DB2719] rounded-full"></span>
                    </div>
                    <span className="text-gray-600 text-xs lg:text-base">On Hold</span>
                </div>

            </div>
            </div>
      </div>
      <div className="w-full xl:w-4/12 flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow-sm px-6 py-5">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-black text-base font-medium">Your balance</h2>
            <div className="cursor-pointer">
              <PiDotsThreeOutline size={20} className="w-[24px] h-[25px]" />
            </div>
          </div>

          <div className="flex items-end gap-2 mb-4">
            <h1 className="text-[24px] 2xl:text-[32px] font-bold text-gray-800">$120,435.00</h1>
            <span className="text-[#90A3BF] font-semibold text-sm mb-2">(USD)</span>
          </div>

          <p className="text-[#90A3BF] font-semibold text-sm mb-16">
            From Jan 01, 2022 to Jan 31, 2022
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button className="flex items-center gap-2  text-xs 2xl:text-sm bg-teal-500 text-white px-4 2xl:px-8 py-4 rounded-xl hover:bg-teal-600 transition">
              <img src={Recivemony} alt="Recivemony" className="w-4 2xl:w-6 h-4 2xl:h-6" />
              Top Up
            </button>
            <button className="flex items-center gap-2  text-xs 2xl:text-sm border-2 border-teal-500 text-teal-600 px-4 2xl:px-8 py-4 rounded-xl hover:bg-teal-50 transition">
              <img src={Sendmony} alt="Sendmony" className="w-4 2xl:w-6 h-4 2xl:h-6" />
              Transfer
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm px-6 py-5">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-black text-base font-medium">Spend by category</h2>
            <div className="cursor-pointer">
              <PiDotsThreeOutline size={20} />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 mb-6">
              <ReactApexChart
                options={categoryOptions}
                series={categorySeries}
                type="donut"
                height="100%"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xs text-[#90A3BF] mb-1">Overall Spending</span>
                <span className="text-xl font-semibold text-gray-900">$19,760.00</span>
              </div>
            </div>

            <div className="w-full space-y-3 text-sm">
              <div className="flex items-center justify-between !mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF7EB3' }} />
                  <span className="text-gray-600">Employees Salary</span>
                </div>
                <span className="text-gray-900 font-medium">$8,000.00</span>
              </div>

              <div className="flex items-center justify-between !mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FFB4D3' }} />
                  <span className="text-gray-600">Material Supplies</span>
                </div>
                <span className="text-gray-900 font-medium">$2,130.00</span>
              </div>

              <div className="flex items-center justify-between !mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#A194FF' }} />
                  <span className="text-gray-600">Company tax</span>
                </div>
                <span className="text-gray-900 font-medium">$1,510.00</span>
              </div>

              <div className="flex items-center justify-between !mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#2FA6A0' }} />
                  <span className="text-gray-600">Maintenance system</span>
                </div>
                <span className="text-gray-900 font-medium">$2,245.00</span>
              </div>

              <div className="flex items-center justify-between !mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5CB5FF' }} />
                  <span className="text-gray-600">Development System</span>
                </div>
                <span className="text-gray-900 font-medium">$4,385.00</span>
              </div>

              <div className="flex items-center justify-between !mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#7C8DB5' }} />
                  <span className="text-gray-600">Production Tools</span>
                </div>
                <span className="text-gray-900 font-medium">$1,000.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

