'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ExponentialAreaChart = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    mediaQuery.addEventListener('change', (e) => setIsDark(e.matches));
  }, []);

  const data = Array.from({ length: 20 }, (_, i) => Math.round(100 * Math.exp(i * 0.2)));

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'area',
      height: 150,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    colors: ['#10b981'],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    },
    tooltip: {
      theme: isDark ? 'dark' : 'light'
    }
  };

  const series = [
    {
      name: 'Users',
      data: data
    }
  ];

  return (
    <div className="mt-4">
      <ApexChart options={options} series={series} type="area" height={150} />
    </div>
  );
};

export default ExponentialAreaChart;
