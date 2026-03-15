import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJs } from 'chart.js/auto';
import { Helmet } from 'react-helmet';
import { axiosMember } from '../api/axios.jsx';

const Chart = () => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const chartRef = useRef(null);
    let chartInstance = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosMember.get('/get-chart-data');
                if (!response.data) throw new Error("Aucune donnée reçue");
                
                setChartData(response.data);
            } catch (err) {
                setError("Fehler beim Laden des Diagramms");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (chartData && chartRef.current) {
            if (chartInstance.current) chartInstance.current.destroy();

            const ctx = chartRef.current.getContext("2d");

            const categories = chartData.map(item => item.category);
            const percentages = chartData.map(item => item.percentage);
            const uniqueColors = generateUniqueColors(categories.length);

        
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "rgba(75, 192, 192, 0.8)");
            gradient.addColorStop(1, "rgba(75, 192, 192, 0.2)");

            chartInstance.current = new ChartJs(ctx, {
                type: "doughnut",
                data: {
                    labels: categories,
                    datasets: [
                        {
                            label: "Pourcentage %",
                            data: percentages,
                            backgroundColor: uniqueColors,
                            borderWidth: 2,
                            hoverOffset: 10,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: "60%",
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                font: { size: 14 }
                            }
                        },
                        tooltip: {
                            enabled: true,
                            backgroundColor: "#333",
                            titleColor: "#fff",
                            bodyColor: "#fff"
                        }
                    },
                    animation: {
                        animateRotate: true,
                        duration: 1800
                    }
                }
            });
        }
    }, [chartData]);

    const generateUniqueColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const color = `rgba(${Math.floor(Math.random() * 255)},
                            ${Math.floor(Math.random() * 255)},
                            ${Math.floor(Math.random() * 255)}, 
                            0.7)`;
            colors.push(color);
        }
        return colors;
    };

    return (
        <div className='page'>
            <Helmet>
                <title>Graphique Professionnel</title>
            </Helmet>

            <div className='card'>
                <h2 className='title'>Analyse des Programmes</h2>

                {loading && <p className='loading'>Diagramm ...</p>}
                {error && <p className='error'>{error}</p>}

                <div className='chartContainer'>
                    <canvas ref={chartRef} id="myChart"></canvas>
                </div>
            </div>
        </div>
    );
};


export default Chart;
