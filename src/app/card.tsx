
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
    setIsDayTime(currentHour >= 6 && currentHour < 18); 
  
}, []);

const getColorBasedOnName = (name: string) => {

  switch (name) {
    case 'Echo Nexus':
      return isDayTime ? 'rgb(255, 200, 200)' : 'rgba(255, 0, 0, 0.8)';
    case 'Gryffindor':
      return isDayTime ? 'rgb(200, 200, 255)' : 'rgba(0, 0, 255, 0.8)';
    case 'Equipo Cali':
      return isDayTime ? 'rgb(200, 255, 200)' : 'rgba(0, 255, 0, 0.8)';
    default:
      return isDayTime ? 'rgb(221, 200, 200)' : 'rgba(255, 255, 255, 0.818)';
  }
};

const backgroundColor = getColorBasedOnName(name);
const borderColor = isDayTime ? 'rgb(0,0,0)' : 'red';
  return (
    <Link href="#" underline="none" color="black"  >
      <Box
        sx={{
            
          maxWidth: '420px',
          height: '48px',
          backgroundColor: name === 'Gryffindor' ? 'red' : backgroundColor ,
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
