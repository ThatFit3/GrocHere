import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const SummaryPrediction = () => {
    const summaryPrediction = {
        OUT010: 0,
        OUT013: 0,
        OUT017: 34.91,
        OUT018: 0,
        OUT019: 0,
        OUT027: 0,
        OUT035: 31.09,
        OUT045: 34,
        OUT046: 0,
        OUT049: 0,
    };

    const labels = Object.keys(summaryPrediction); // OUT010, OUT013, etc.
    const values = Object.values(summaryPrediction); // 0, 34.91, etc.

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Prediction Values',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 71, 0.2)',
                    'rgba(144, 238, 144, 0.2)',
                    'rgba(135, 206, 235, 0.2)',
                    'rgba(255, 215, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 71, 1)',
                    'rgba(144, 238, 144, 1)',
                    'rgba(135, 206, 235, 1)',
                    'rgba(255, 215, 0, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Set to false to remove the legend
            },
            title: {
                display: true,
                text: 'Summary Prediction (Pie Chart)',
            },
        },
    };

    return (
        <div>
            <h2>Summary Prediction</h2>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default SummaryPrediction;
