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


const clients: MyObject = 
  {
    "Acción fiduciaria": "Echo Nexus",
    "Alianza fiduciaria": "Echo Nexus",
    "Alkosto": "Echo Nexus",
    "Ath": "ATH",
    "Banco w": "Equipo Cali",
    "Bosi": "Echo Nexus",
    "Btg bd": "Synergy",
    "Btg cloud_pods": "Synergy",
    "Cadena": "Gryffindor (BD)",
    "Cardio infantil": "Echo Nexus",
    "Celsia": "Equipo Cali",
    "Clinica vida": "Gryffindor",
    "Coexito": "Equipo Cali",
    "Comercial card": "Gryffindor",
    "Comfenalco": "Gryffindor",
    "Corona": "Gryffindor",
    "Corredores asociados": "Echo Nexus",
    "D1": "Echo Nexus",
    "Dislicores": "Gryffindor",
    "Dr sura app": "DR Sura APP",
    "Dr sura bd": "DR Sura BD",
    "Dr sura so": "Dr Sura SO",
    "El colombiano": "Gryffindor",
    "Emi": "Echo Nexus",
    "Enlace empresarial": "Equipo Cali",
    "Enlace operativo": "Gryffindor",
    "Fidupopular": "Echo Nexus",
    "Geo sura": "Gryffindor",
    "Homi": "Echo Nexus",
    "Hospital pablo tobon u": "Echo Nexus",
    "La rivera": "Echo Nexus",
    "La soberana": "Echo Nexus",
    "Leguis": "Echo Nexus",
    "Linea directa": "Gryffindor",
    "Matrix": "Echo Nexus",
    "Metro": "Echo Nexus",
    "Mutual ser": "Equipo Cali",
    "Novaventa": "Echo Nexus",
    "Nutresa": "Gryffindor",
    "Openquake": "Gryffindor",
    "Protección": "Echo Nexus",
    "Seti interno": "Gryffindor",
    "Sura im méxico": "Equipo Cali",
    "Tcc": "Gryffindor",
    "Xm bd": "XM BD",
    "Xm so": "XM SO",
    "Zona franca": "Echo Nexus"
  }
  


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
        <p className="fixed right-0 top-0 flex w-full justify-left 6 pt-8 backdrop-blur-2xl   lg:static lg:w-auto   pb-10"style={{ fontSize:30,   color: 'red',fontFamily:"Sanchez"}}>
        <Clock/>
        <br/>
        </p>
        
      </div>
      <Container maxWidth="lg"sx={{ height: 'max', overflowY: 'auto' }}  >
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
        <Typography variant="h3" component="h1" align="center" sx={{ marginBottom: '20px', fontFamily:"Sanchez" ,color:"darkred"}}>
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
