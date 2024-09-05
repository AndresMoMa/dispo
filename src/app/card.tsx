
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import React, { useState, useEffect } from 'react';
type CardProps = {
    name: any;
    to: any;
    onClick: () => void;
  };
const Card: React.FC<CardProps> = ({ name,to,onClick}) => {
  const [isDayTime, setIsDayTime] = useState(true);

  useEffect(() => {
    const currentHour = new Date().getHours();
    setIsDayTime(currentHour >= 6 && currentHour < 18); // Check if it's between 6 AM and 6 PM
  }, []);
  return (
    <Link href="#" underline="none" color="black"  >
    

      <Box
        sx={{
            
          maxWidth: '420px',
          height: '48px',
          backgroundColor: isDayTime ? 'rgb(221, 200, 200)'  : 'rgba(255, 255, 255, 0.818)' ,
          borderRadius: '8px',
          display: 'flex',
          fontFamily:"Sanchez",
          alignItems: 'center',
          borderStyle:'solid',  
          borderColor:  isDayTime ? 'rgb(0,0,0)'  : 'red' ,
          borderWidth:2,
          boxShadow: 3
          
        }}
        onClick={onClick}
      >
        <Box sx={{ paddingLeft: '15px', fontSize: '12px' }}>{name}</Box>
      </Box>
      
    </Link>
  );
};

export default Card;
