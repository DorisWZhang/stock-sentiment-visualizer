import React from 'react';
import { useParams } from 'react-router-dom';
import StockChart from '../components/StockChart';

const StockPage = () => {
  const { stock } = useParams();
  
  return (
    <div>
        <StockChart symbol={stock}/>
    </div>
  );
};

export default StockPage;