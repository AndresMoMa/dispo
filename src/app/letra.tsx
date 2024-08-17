import * as React from 'react';
import Box from '@mui/material/Box';
import Card from './card';
type prosk = {
    children: string;
    letter: string;
  };
  const LetterGroup: React.FC<prosk> = ({ children, letter }) => {

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box
        sx={{
          borderRight: '1px solid #E4E5E7',
          display: 'flex',
          alignItems: 'center',
          color: '#6D6E70',
          fontSize: '20px',
          fontFamily: 'arial',
          fontWeight: 400,
          justifyContent: 'end',
          paddingRight: '16px',
          marginRight: '32px',
          maxWidth: '32px',
        }}
      >
        {letter.toUpperCase()}
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 164px)',
          gap: '24px 16px',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LetterGroup;
