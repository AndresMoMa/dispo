
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import React, { useState, useEffect } from 'react';
type CardProps = {
    name: any;
    to: any;
    onClick: (color: string) => void;
  };
const Card: React.FC<CardProps> = ({ name,to,onClick}) => {
  const [isDayTime, setIsDayTime] = useState(true);
  const [isDayTimeE, setIsDayTimeE] = useState(true);
  useEffect(() => {
    const currentHour = new Date().getHours();
    setIsDayTime(currentHour >= 6 && currentHour < 18); // Check if it's between 6 AM and 6 PM
  }, []);

  const backgroundColor = isDayTime ? 'rgb(221, 200, 200)' : 'rgba(255, 255, 255, 0.818)';
  const borderColor = isDayTime ? 'rgb(0,0,0)' : 'red';
  return (
    <Link href="#" underline="none" color="black"  >
      <Box
        sx={{
            
          maxWidth: '420px',
          height: '48px',
          backgroundColor: backgroundColor  ,
          borderRadius: '8px',
          display: 'flex',
          fontFamily:"Sanchez",
          alignItems: 'center',
          borderStyle:'solid',  
          borderColor:  borderColor ,
          borderWidth:2,
          boxShadow: 3
          
        }}
        onClick={() => onClick(backgroundColor)}
      >
        <Box sx={{ paddingLeft: '15px', fontSize: '12px' }}>{name}</Box>
      </Box>
      
    </Link>
  );
};

export default Card;
