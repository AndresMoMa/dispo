import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from "next/image";
type CardProps = {
    nivel: any;
    nombre: any;
    telefono:any;
    onClick: () => void;
  };
const Dispoc: React.FC<CardProps> = ({ nivel,nombre,telefono,onClick}) => {
  return (
    <div className="column">
      <Typography variant="h6" component="h2">
        {nivel}
      </Typography>
      <Typography sx={{ mt: 2, color: "black" }} align="right">
        
        <br /> &nbsp;
        {nombre}
        <br /> &nbsp;
        {telefono}
        <br /> &nbsp;
      </Typography>
      <div className="flex justify-end">
        <p className="inline-flex left-0 top-0 flex justify-left border-b border-white-600 bg-gradient-to-b from-red-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:white-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" style={{ backgroundColor: 'rgb(230, 84, 84)', color: 'white' }}>
          <Link href="sip:3197399411">
            <button style={{ color: "white" }}>
              <Image src={"/call.svg"} alt={"llamar"} width={50} height={50} />
              Llamar
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Dispoc;
