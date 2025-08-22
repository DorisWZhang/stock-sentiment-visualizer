import React from 'react';
import { useNavigate } from 'react-router-dom';
import symbolName from '../assets/symbolToName';

const StockCard = ({symbol}) => {
  const navigate = useNavigate();
  const companyName = symbolName[symbol] || symbol;
  
  const handleClick = () => {
    navigate(`/stockpage/${symbol}`);
  };
  
  return (
    <div 
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px 16px',
        margin: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0',
        width: '200px',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <div style={{fontWeight: 'bold', fontSize: '18px'}}>{symbol}</div>
      <div style={{color: '#666', fontSize: '14px'}}>{companyName}</div>
    </div>
  );
};

export default StockCard;
