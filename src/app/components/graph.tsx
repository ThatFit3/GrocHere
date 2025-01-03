import React from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const SummaryPrediction = ({ summaryPrediction }: { summaryPrediction: Record<string, number> }) => {

    if (!summaryPrediction || Object.keys(summaryPrediction).length === 0) {
        return <p>No prediction data available</p>;
    }

    const labels = Object.keys(summaryPrediction);
    const values = Object.values(summaryPrediction);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Prediction Values",
                data: values,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 99, 71, 0.2)",
                    "rgba(144, 238, 144, 0.2)",
                    "rgba(135, 206, 235, 0.2)",
                    "rgba(255, 215, 0, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 71, 1)",
                    "rgba(144, 238, 144, 1)",
                    "rgba(135, 206, 235, 1)",
                    "rgba(255, 215, 0, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "bottom" as const,
            },
            title: {
                display: true,
                text: "Summary Prediction",
            },
        },
    };

    return (
        <div className="w-full h-full flex justify-center md:mt-0 mt-12">
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default SummaryPrediction;
