
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
    const currentHourE = new Date().getHours();
    setIsDayTimeE(currentHourE >= 6 && currentHourE < 22); 
}, []);

const getColorBasedOnName = (name: string) => {
  console.log(to)
  switch (to) {
    case 'Echo Nexus':
      return isDayTimeE ? 'rgb(221, 200, 200)' : 'rgb(225, 225, 225)';
    case 'Gryffindor':
      return isDayTime ? 'rgb(221, 200, 200)' : 'rgb(225, 225, 225)';
    case 'Equipo Cali':
      return isDayTime ? 'rgb(221, 200, 200)' : 'rgb(225, 225, 225)';
    default:
      return isDayTime ? 'rgb(221, 200, 200)' : 'rgb(225, 225, 225)';
  }
};



const backgroundColor = getColorBasedOnName(to);
const borderColor2 = (col:any)=>{
  if(col=='rgb(255, 255, 255)')
  {return "red"}
  else
  {
    "black"
  }

}
const coloborde =borderColor2(getColorBasedOnName(name))

  return (
    <Link href="#" underline="none" color="black"  >
      <Box
        sx={{
            
          maxWidth: '420px',
          height: '48px',
          backgroundColor: name === 'Echo Nexus' ? 'white' : backgroundColor,
          borderRadius: '8px',
          display: 'flex',
          fontFamily:"Sanchez",
          alignItems: 'center',
          borderStyle:'solid',  
          borderColor:  `red` ,
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
