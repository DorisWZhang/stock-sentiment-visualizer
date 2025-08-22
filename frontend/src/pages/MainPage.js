import React, { useNavigate } from 'react';
import StockCard from '../components/StockCard';

const MainPage = () => {
    

  return (
    <div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px'
        }}>
            <h1>
                Stock Sentiment Visualizer
            </h1>
        </div>
        <div style={{
            marginLeft: 50
        }}>
            
            <StockCard symbol='NVDA' ></StockCard>

        </div>

    </div>
  );
};

export default MainPage;
