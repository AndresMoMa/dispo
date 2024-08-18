import React, { useState, useEffect } from 'react';
import Dispoc from './dispo'; // Adjust the path as necessary
type CardProps = {
    name: string;
  };
const CardList: React.FC<CardProps> = (name) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const url="https://api-generator.retool.com/Lc03As/dispo?ClientesI="+name.name
        const response = await fetch(url);
        console.log(name)
        const result = await response.json();
        setData(result);
        console.log(url)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {data.map((item: any) => (
        <Dispoc
          key={item.id} // Assuming each item has a unique `id`
          nivel={item.Nivel}
          nombre={item.Nombre}
          telefono={item.Telefono}
          onClick={() => console.log(`Clicked on ${item.name}`)}
        />
      ))}
    </div>
  );
};

export default CardList;