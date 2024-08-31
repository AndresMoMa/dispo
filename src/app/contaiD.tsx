import React, { useState, useEffect } from 'react';
import Dispoc from './dispo'; // Adjust the path as necessary
import { visibilidad } from './visibilida';
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
          const url="https://api-generator.retool.com/A6HCoP/dispon?ClientesI="+name.name
        const response = await fetch(url);
        console.log(name)
        const result = await response.json();
        setData(result);
        console.log(url)
        }
        if (name.num=="1"){
          console.log("arrre")
          const url="https://api-generator.retool.com/A6HCoP/dispon?ClientesI=Gryffindor (SO y app)"
        const response = await fetch(url);
        console.log(name)
        const result = await response.json();
        setData(result);
        console.log(url)
        }
        if (name.num=="2"){
          console.log("arrre")
          const url="https://api-generator.retool.com/A6HCoP/dispon?ClientesI=Gryffindor (BD)"
        const response = await fetch(url);
        console.log(name)
        const result = await response.json();
        setData(result);
        console.log(url)
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
  <Menu>
    
    <MenuItem>N1 &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span></MenuItem>
    <MenuItem>N2 &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span> </MenuItem>
    <MenuItem>N3 &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span></MenuItem>
    <MenuItem> Lider De servicio &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span></MenuItem>
    <MenuItem> Gerente &nbsp; &nbsp; &nbsp; &nbsp; <span className='dot'></span></MenuItem>
  </Menu>
</Sidebar>
      {data.map((item: any) => (
        <Dispoc
          key={item.id} // Assuming each item has a unique `id`
          nivel={item.Nivel}
          nombre={item.Nombre}
          telefono={item.Telefono}
          
        />
      ))}
      
    </div>
    
  );
};

export default CardList;
