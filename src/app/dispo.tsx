import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";

type CardProps = {
    nivel: any;
    nombre: any;
    telefono:any;
    onClick: () => void;
  };
const Dispoc: React.FC<CardProps> = ({ nivel,nombre,telefono,onClick}) => {
  return (
    <div className=" " style={{width:150,fontFamily:"Sanchez"}}>
      <Typography sx={{  color: "red", fontFamily:"Sanchez"}} variant="h6" component="h2" id='niveld'align="center">
        {nivel}
      </Typography>
      <Typography sx={{ mt: 2, color: "black", fontFamily:"Sanchez"}} align="center">
        
        <br /> &nbsp;
        {nombre}
        <div className="flex justify-center">
        <IconContext.Provider value={{ color: "red", size:"35" }}>

        <CgProfile />
        </IconContext.Provider>
        </div>
        
        {telefono}
        <br /> &nbsp;
      </Typography>
      <div className="flex justify-end">
        <p className="inline-flex left-0 top-0 flex justify-left border-b border-white-600 bg-gradient-to-b from-red-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:white-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" style={{ backgroundColor: 'rgb(230, 84, 84)', color: 'white' }}>
          <Link href={`sip:${telefono}`}>
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
