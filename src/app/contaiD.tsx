import React, { useState, useEffect } from 'react';
import Dispoc from './dispo'; // Adjust the path as necessary
import { seleccion, visibilidad } from './visibilida';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

type CardProps = {
    name: string;
    num:string;
  };
const CardList: React.FC<CardProps> = (name,num) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    visibilidad();
  }, [data]);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        if (name.num=="0"){
          console.log("a")
          const url=" https://retoolapi.dev/58xHsL/dispo?ClientesI="+name.name
        const response = await fetch(url);
        console.log(name)
        const result = await response.json();
        setData(result);
        console.log(url)
        if(name.name!="Gryffindor")
        {
        document.getElementById('menu')?.classList.remove('autok');
        }
        }
        if (name.num=="2"){
          console.log("arrre")
          const url="https://retoolapi.dev/58xHsL/dispo?ClientesI=Gryffindor%20(SO%20Y%20APP)"
        const response = await fetch(url);
        console.log(name)
        const result = await response.json();
        setData(result);
        console.log(url)
        document.getElementById('menu')?.classList.remove('autok');
        }
        if (name.num=="1"){
          console.log("arrre")
          const url="https://retoolapi.dev/58xHsL/dispo?ClientesI=Gryffindor (BD)"
        const response = await fetch(url);
        console.log(name)
        const result = await response.json();
        setData(result);
        console.log(url)
        document.getElementById('menu')?.classList.remove('autok');
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div style={{ display: 'flex ', justifyContent: 'space-between' }}>
<Sidebar width='300'>
  <Menu id="menu" className='autok'>
    
    <MenuItem active={false}  onClick={ () => seleccion(1) } tabIndex={0}  id="N1M">N1 &nbsp; &nbsp; &nbsp; &nbsp; <span className='dots'></span></MenuItem>
    <MenuItem onClick={ () => seleccion(2) } id="N2M" >N2 &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span> </MenuItem>
    <MenuItem onClick={ () => seleccion(3) } id="N3M">N3 &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span></MenuItem>
    <MenuItem onClick={ () => seleccion(4) } id="N4M"> Lider De servicio &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span></MenuItem>
    <MenuItem onClick={ () => seleccion(5) } id="N5M"> Gerente &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span></MenuItem>
  </Menu>
</Sidebar>
      {data.map((item: any) => (
        <Dispoc
          key={item.id} 
          nivel={item.Nivel}
          nombre={item.Nombre}
          telefono={item.Telefono}
          
        />
      ))}
      
    </div>
    
  );
};

export default CardList;
