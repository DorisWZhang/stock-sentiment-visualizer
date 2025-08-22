import React, { useState, useEffect } from 'react';

const StockChart = ({symbol}) => {
    const [timeFrame, setTimeFrame] = useState('1M');
    const [chartData, setChartData] = useState(null);

    const getDateRange = (timeFrame) => {
        const end = new Date();
        const start = new Date();
        
        switch(timeFrame) {
            case '1W':
                start.setDate(start.getDate() - 7);
                break;
            case '1M':
                start.setMonth(start.getMonth() - 1);
                break;
            case '1Y':
                start.setFullYear(start.getFullYear() - 1);
                break;
            default:
                start.setMonth(start.getMonth() - 1);
        }
        
        return { start, end };
    };

    useEffect(() => {
        const fetchData = async () => {
            const { start, end } = getDateRange(timeFrame);
            
            try {
                const response = await fetch(`/stock_data?symbol=${symbol}&start=${start.toISOString()}&end=${end.toISOString()}`);
                const data = await response.json();
                setChartData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [symbol, timeFrame]);

    return (
        <div>
            <h3>Stock Chart for {symbol}</h3>
            
            <div style={{ marginBottom: '20px' }}>
                <button 
                    onClick={() => setTimeFrame('1W')}
                    style={{ 
                        marginRight: '10px',
                        padding: '8px 16px',
                        backgroundColor: timeFrame === '1W' ? '#007bff' : '#f8f9fa',
                        color: timeFrame === '1W' ? 'white' : 'black',
                        border: '1px solid #dee2e6',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    1 Week
                </button>
                <button 
                    onClick={() => setTimeFrame('1M')}
                    style={{ 
                        marginRight: '10px',
                        padding: '8px 16px',
                        backgroundColor: timeFrame === '1M' ? '#007bff' : '#f8f9fa',
                        color: timeFrame === '1M' ? 'white' : 'black',
                        border: '1px solid #dee2e6',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    1 Month
                </button>
                <button 
                    onClick={() => setTimeFrame('1Y')}
                    style={{ 
                        padding: '8px 16px',
                        backgroundColor: timeFrame === '1Y' ? '#007bff' : '#f8f9fa',
                        color: timeFrame === '1Y' ? 'white' : 'black',
                        border: '1px solid #dee2e6',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    1 Year
                </button>
            </div>
            
            {chartData && (
                <div>
                    <p>Showing {timeFrame} data for {symbol}: {chartData.length} data points</p>
                </div>
            )}
        </div>
    );
};

export default StockChart;
