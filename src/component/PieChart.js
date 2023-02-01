import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({scorecard1}) {

  let runsData = [];
  let playersData = [];

    scorecard1.batsman.map(({runs, name}) => (
      runsData.push(runs),
      playersData.push(name)
    ));

    runsData = runsData.filter(function( element ) {
      return element !== undefined;
    });

console.log(playersData);

  const data = {
    labels: playersData.slice(0, runsData.length),
    datasets: [
      {
        data: runsData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        position: "left",
      }
    ]
    
  }
  
  return (

    <div className='chartBox'>
    <h2 style={{ textAlign: "center" }}>Team IND</h2>
    <Pie data={data} options={ {
      plugins: {
                legend: {
                    labels: { boxWidth: 10, font: { size: 10 } },
                    position: "right",
                    align: "start",
                }
              }
            }}/>
    
    </div>
  )
}



export default PieChart;