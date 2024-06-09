import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
    return (
        <div>
            <Bar
                data={data}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                    },
                }}
            />
        </div>
    );
};

export default ChartComponent;
