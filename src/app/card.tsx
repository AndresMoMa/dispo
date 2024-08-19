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
          backgroundColor: 'rgba(230, 85, 88, 0.818)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={onClick}
      >
        <Box sx={{ paddingLeft: '15px', fontSize: '12px' }}>{name}</Box>
      </Box>
      
    </Link>
  );
};

export default Card;
