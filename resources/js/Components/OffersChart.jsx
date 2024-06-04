import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const OffersChart = ({ data, width = "80%", height = "80%"}) => {
    const labels = Array.from(
        new Set(data.flatMap((item) => Object.keys(item.monthly_offers)))
    ).sort();

    const datasets = data.map((item, index) => ({
        label: item.entreprise,
        data: labels.map((label) => item.monthly_offers[label] || 0),
        backgroundColor: `rgba(${(index * 60) % 255}, ${(index * 100) % 255}, ${
            (index * 140) % 255
        }, 0.7)`,
        borderColor: `rgba(${(index * 60) % 255}, ${(index * 100) % 255}, ${
            (index * 140) % 255
        }, 1)`,
        borderWidth: 2,
    }));

    const chartData = {
        labels,
        datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Offers Per Month",
                font: {
                    size: 20,
                    weight: 'bold'
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };

    return (
        <div className="card" style={{ width: width, height: height }}>
            <div className="card-body">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default OffersChart;
