"use client";
import { useState } from 'react';
import Image from "next/image";
import Container from '@mui/material/Container/Container';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useMemo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LetterGroup from './letra';
import Card from './card';
import createNamesByFirstLetter from './create';
interface MyObject {
  [key: string]: any; // This allows any string to be used as a key, and the value can be of any type.
}

const clients:MyObject = {
  "ACCIÓN FIDUCIARIA": "ECHO_NEXUS",
  "ALIANZA FIDUCIARIA": "ECHO_NEXUS",
  "ALKOSTO": "ECHO_NEXUS",
  "ATH": "ATH",
  "BANCO W": "EQUIPO CALI",
  "BOSI": "ECHO_NEXUS",
  "BTG BD": "SYNERGY",
  "BTG CLOUD_PODS": "SYNERGY",
  "CADENA": "GRYFFINDOR",
  "CARDIO INFANTIL": "ECHO_NEXUS",
  "CELSIA": "EQUIPO CALI",
  "CLINICA VIDA": "GRYFFINDOR",
  "COEXITO": "EQUIPO CALI",
  "COMERCIAL CARD": "GRYFFINDOR",
  "COMFENALCO": "GRYFFINDOR",
  "CORONA": "GRYFFINDOR",
  "CORREDORES ASOCIADOS": "ECHO_NEXUS",
  "D1": "ECHO_NEXUS",
  "DISLICORES": "GRYFFINDOR",
  "DR SURA APP": "UNIO",
  "DR SURA BD": "GRYFFINDOR",
  "DR SURA SO": "GRYFFINDOR",
  "EL COLOMBIANO": "GRYFFINDOR",
  "EMI": "ECHO_NEXUS",
  "ENLACE EMPRESARIAL": "EQUIPO CALI",
  "ENLACE OPERATIVO": "GRYFFINDOR",
  "FIDUPOPULAR": "ECHO_NEXUS",
  "GEO SURA": "GRYFFINDOR",
  "HOMI": "ECHO_NEXUS",
  "HOSPITAL PABLO TOBON U": "ECHO_NEXUS",
  "LA RIVERA": "ECHO_NEXUS",
  "LA SOBERANA": "ECHO_NEXUS",
  "LEGUIS": "ECHO_NEXUS",
  "LINEA DIRECTA": "GRYFFINDOR",
  "MATRIX": "ECHO_NEXUS",
  "METRO": "ECHO_NEXUS",
  "MUTUAL SER": "EQUIPO CALI",
  "NOVAVENTA": "ECHO_NEXUS",
  "NUTRESA": "GRYFFINDOR",
  "OPENQUAKE": "GRYFFINDOR",
  "PROTECCIÓN": "ECHO_NEXUS",
  "SETI INTERNO": "GRYFFINDOR",
  "SURA IM MÉXICO": "EQUIPO CALI",
  "TCC": "GRYFFINDOR",
  "XM BD": "GRYFFINDOR",
  "XM SO": "GRYFFINDOR",
  "ZONA FRANCA": "ECHO_NEXUS"
};

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState({ name: '' });

  const handleCardClick = (name:any) => {
    setActiveCard({ name });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const clientsByLetter = useMemo(
    () => createNamesByFirstLetter(Object.keys(clients)),
    [clients]
  );
  const Clock = () => {
    const d = new Date();
    const [currentTime, setCurrentTime] = React.useState('');

    React.useEffect(() => {
        const date = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
        const timer = setInterval(() => {
            setCurrentTime(date);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    return <>{currentTime}</>;
};
  return (
    
    <main className="flex min-h-screen flex-col items-center flex-col p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center  backdrop-blur-2xl  lg:static lg:w-auto  lg:rounded-xl pb-10 pt-10">
        <Image
              src="/image.svg"
              alt="Opera"
              width={70}
              height={24}
              priority
            />

        </p>
        <p className="fixed right-0 top-0 flex w-full justify-left border-b border-white-600 bg-gradient-to-b from-red-200 pb-6 pt-8 backdrop-blur-2xl dark:border-white-800 dark:white-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 pb-10"style={{ backgroundColor: 'rgb(230, 84, 84)', color: 'white'}}>
        <Clock/>
        <br/>
        </p>
        
      </div>
      <Container maxWidth="lg"sx={{ height: '500px', overflowY: 'auto' }}  >
      <List sx={{ '> * + *': { marginTop: '4  px' } }}>
        {Object.keys(clientsByLetter).map((letter) => (
          <ListItem key={letter}>
            <LetterGroup letter={letter}>
              {clientsByLetter[letter].map((name: React.Key) => (
                <Card
                  key={name}
                  name={name}
                  to={"sip:3197399411"}
                  onClick={() => handleCardClick(clients[name.toString()])}
              
                  
                />
              ))}
            </LetterGroup>
          </ListItem>
        ))}
      </List>
    </Container>
    <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h6" component="h2">
            {activeCard.name}
          </Typography>
          <div className="flex justify-end">
          <Typography sx={{ mt: 2 ,color:"black"}}align="right">
            El disponible N1 es
            <br></br>   &nbsp;
            Luis Sanabria
            <br></br>   &nbsp;
            Telefono: 3185934757
            <br></br>   &nbsp;
          </Typography>
          </div>
          <div className="flex justify-end">
          <p className="inline-flex left-0 top-0 flex justify-left border-b border-white-600 bg-gradient-to-b from-red-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:white-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"style={{ backgroundColor: 'rgb(230, 84, 84)', color: 'white'}}>
          <Link  href="sip:3197399411"><button style={{color:"white"}}> <Image src={"/call.svg"} alt={"llamar"} width={50} height={50}/>Llamar</button></Link>
          </p>
          </div>
        </Box>
      </Modal>

      <div className="fixed bottom-0 right-0 p-4 m-4 bg-gray-400 text-white rounded-lg shadow-lg text-center justify-center items-center">
    <span className='dot'></span>   Contactar Disponible <span className='dot2'></span>  Contactar por Teams
  </div>
    </main>
  );
  }
