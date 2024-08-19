import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
type CardProps = {
    name: any;
    to: any;
    onClick: () => void;
  };
const Card: React.FC<CardProps> = ({ name,to,onClick}) => {
  return (
    <Link  underline="none" color="black"  >
    

      <Box
        sx={{
            
          maxWidth: '420px',
          height: '48px',
          backgroundColor: 'white',
          borderRadius: '8px',
          display: 'flex',
          fontFamily:"Sanchez",
          alignItems: 'center',
          borderStyle:'solid',
          borderColor:'red' ,
          borderWidth:2
          
        }}
        onClick={onClick}
      >
        <Box sx={{ paddingLeft: '15px', fontSize: '12px' }}>{name}</Box>
      </Box>
      
    </Link>
  );
};

export default Card;
