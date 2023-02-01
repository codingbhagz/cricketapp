import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function LineChart({scorecard1, scorecard2}) {
  let runsData1 = [];
  let runsData2 = [];

  scorecard1.batsman.map(({runs}) => (
    runsData1.push(runs)
  ));

    scorecard2.batsman.map(({runs}) => (
      runsData2.push(runs)
    ));

    // runsData1 = runsData1.filter(function( element ) {
    //     return element !== undefined;
    //   });

    //   runsData2 = runsData2.filter(function( element ) {
    //     return element !== undefined;
    //   });
   

    const options = {
        // responsive: true,
        plugins: {
          legend: {
            position: 'top' 
          },
          title: {
            display: true,
            text: 'Run Rate',
          },
        },
      };
      
    //   const labels= [...Array(20).keys()]
      const data = {
        labels: [...Array(21).keys(1)],
        datasets: [
          {
            label: 'IND',
            data: runsData1,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'SL',
            data: runsData2,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  return (
    <div className='lineBox'>
    <Line options={options} data={data}/>
    </div>
  )
}

export default LineChart;