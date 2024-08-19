"use client"
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
import Clock from './reloj';
import createNamesByFirstLetter from './create';
import fsPromises from 'fs/promises';
import path from 'path'
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import CardList from './contaiD';
interface MyObject {
  [key: string]: any; // This allows any string to be used as a key, and the value can be of any type.
}


const clients: MyObject = {
  "ACCIÓN FIDUCIARIA": "Echo Nexus",
  "ALIANZA FIDUCIARIA": "Echo Nexus",
  "ALKOSTO": "Echo Nexus",
  "ATH": "ATH",
  "BANCO W": "Equipo Cali",
  "BOSI": "Echo Nexus",
  "BTG BD": "Synergy",
  "BTG CLOUD_PODS": "Synergy",
  "CADENA": "Gryffindor (BD)",
  "CARDIO INFANTIL": "Echo Nexus",
  "CELSIA": "Equipo Cali",
  "CLINICA VIDA": "Gryffindor",
  "COEXITO": "Equipo Cali",
  "COMERCIAL CARD": "Gryffindor",
  "COMFENALCO": "Gryffindor",
  "CORONA": "Gryffindor",
  "CORREDORES ASOCIADOS": "Echo Nexus",
  "D1": "Echo Nexus",
  "DISLICORES": "Gryffindor",
  "DR SURA APP": "DR Sura APP",
  "DR SURA BD": "DR Sura BD",
  "DR SURA SO": "Dr Sura SO",
  "EL COLOMBIANO": "Gryffindor",
  "EMI": "Echo Nexus",
  "ENLACE EMPRESARIAL": "Equipo Cali",
  "ENLACE OPERATIVO": "Gryffindor",
  "FIDUPOPULAR": "Echo Nexus",
  "GEO SURA": "Gryffindor",
  "HOMI": "Echo Nexus",
  "HOSPITAL PABLO TOBON U": "Echo Nexus",
  "LA RIVERA": "Echo Nexus",
  "LA SOBERANA": "Echo Nexus",
  "LEGUIS": "Echo Nexus",
  "LINEA DIRECTA": "Gryffindor",
  "MATRIX": "Echo Nexus",
  "METRO": "Echo Nexus",
  "MUTUAL SER": "Equipo Cali",
  "NOVAVENTA": "Echo Nexus",
  "NUTRESA": "Gryffindor",
  "OPENQUAKE": "Gryffindor",
  "PROTECCIÓN": "Echo Nexus",
  "SETI INTERNO": "Gryffindor",
  "SURA IM MÉXICO": "Equipo Cali",
  "TCC": "Gryffindor",
  "XM BD": "XM BD",
  "XM SO": "XM SO",
  "ZONA FRANCA": "Echo Nexus"
};


export default  function Home() {
  
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
                  to={"sip:${telefono}"}
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
        <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px' }}>
        <Typography variant="h5" component="h1" align="center" sx={{ marginBottom: '20px' }}>
        {activeCard.name}
  </Typography>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <CardList name={String(activeCard.name)}></CardList>
    


  </div>
</Box>
        
      </Modal>

      <div className="fixed bottom-0 right-0 p-4 m-4 bg-gray-400 text-white rounded-lg shadow-lg text-center justify-center items-center">
    <span className='dot'></span>   Contactar Disponible <span className='dot2'></span>  Contactar por Teams
  </div>
    </main>
    
  );
  }
