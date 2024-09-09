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
import { useEffect } from 'react';
import { visibilidad, visibilidadb1,seleccion} from './visibilida';
import createNamesByFirstLetter from './create';
import CardList from './contaiD';
import { Alert } from '@mui/material';
interface MyObject {
  [key: string]: any; // This allows any string to be used as a key, and the value can be of any type.
}


const clients: MyObject = 
  {
    "ACCIÓN FIDUCIARIA": "Echo Nexus",
    "ALIANZA FIDUCIARIA": "Echo Nexus",
    "ALKOSTO": "Echo Nexus",
    "ATH": "ATH",
    "BANCO W": "Equipo Cali",
    "BOSI": "Echo Nexus",
    "BTG BD": "Synergy BD",
    "BTG CLOUD_PODS": "Synergy Cloud",
    "CADENA": "Gryffindor",
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
    "DR SURA APP": "UNIO",
    "DR SURA BD": "Gryffindor (BD)",
    "DR SURA SO": "Gryffindor (SO Y APP)",
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
    "SURA URUGUAY": "Gryffindor",
    "TCC": "Gryffindor",
    "TI TIPO 1":"TI TIPO 1",
    "TI TIPO 2":"TI TIPO 2",
    "XM BD": "Gryffindor",
    "XM SO": "Gryffindor",
    "XM ODS": "INTEGRATORS XM ODS",
    "ZONA FRANCA": "Echo Nexus"
  }

  


export default  function Home() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState({ name: '' });
  const [numero, setnumero] = useState("0");
  const [numeroc, setnumeroc] = useState("0");
  const handleCardClick = (name:any,color:any,index:any) => {
    
    if (color!="rgba(255, 255, 255, 0.818)")
    {
      
      if (index=="LINEA DIRECTA")
        {
          alert("Si es SQL lo gestiona Juan Pablo Pavas Hasta las 4:30 despues Gryffindor, Oracle  y Mysql : Chat Gryffidor")
        }
        else
      {alert("Horario Habil: Contactar por canal de teams: "+name)}
    }
    else{
      
      setActiveCard({ name });
      setIsModalOpen(true);
      console.log(color)
    }
  };

  const handleCloseModal = () => {
    setnumero("0")
    setIsModalOpen(false);
  };
  
  const clientsByLetter = useMemo(
    () => createNamesByFirstLetter(Object.keys(clients)),
    [clients]
  );

 
  useEffect(() => {
    if(numero=="1")
    {
      setActiveCard({ name: "Gryffindor (BD)" });
    }
    else if(numero =="2")
    {
      setActiveCard({ name: "Gryffindor (SO y app)" });
    }
    else if (activeCard.name != 'Gryffindor') {
      document.getElementById('menu')?.classList.remove('autok');
    }
    console.log(numero)
  }, [numero])
  
  
  

  return (
  
    <main className="flex min-h-screen  items-center flex-col p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center  backdrop-blur-2xl  lg:static lg:w-auto  lg:rounded-xl pb-10 pt-10">
        <Image
              src="/image.svg"
              alt="Opera"
              width={90}
              height={24}
              priority
            />

        </p>
        <p className="fixed right-0 top-0 flex w-full justify-left 6 pt-8 backdrop-blur-2xl   lg:static lg:w-auto   pb-10"style={{ fontSize:30,   color: 'red',fontFamily:"Sanchez"}}>
        Listado Equipos
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
              {clientsByLetter[letter].map((name: React.Key,index:any) => (
                
                <Card
                  key={name}
                  name={name}
                  to={"sip:${telefono}"}
                  onClick={(color) => handleCardClick(clients[name.toString()], color,name.toString())}
                
                  
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
        
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px' }}>
        <Typography variant="h3" component="h1" align="center" sx={{ marginBottom: '20px', fontFamily:"Sanchez" ,color:"darkred"}}>
        {activeCard.name}
  </Typography>
  
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
  {activeCard.name === 'Gryffindor' && (
            <>
         
              <Button onClick={() => {setnumero("1")}} sx={{
            
            maxWidth: '420px',
            height: '48px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            fontFamily:"Sanchez",
            alignItems: 'center',
            borderStyle:'solid',
            borderColor:'red' ,
            borderWidth:2,
            color:"black",
            marginRight:"30px"

            
          }} >Bases de datos </Button>
              <Button onClick={() => setnumero("2")} sx={{
            
            maxWidth: '260px',
            height: '48px',
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            fontFamily:"Sanchez",
            alignItems: 'center',
            borderStyle:'solid',
            borderColor:'red' ,
            borderWidth:2,
            color:"black"
            
          }}>Sistemas Operativos y Aplicacion</Button>
            </>
          )}
   <CardList  key={numero} name={ String(activeCard.name)} num={numero} />
   


  </div>
</Box>
        
      </Modal>

      <div className="fixed bottom-0 right-0 p-4 m-4 bg-gray-400 text-white rounded-lg shadow-lg text-center justify-center items-center">
    <span className='dot'></span>   Contactar Disponible <span className='dot2'></span>  Contactar por Teams
  </div>
    </main>
    
  );
  }
