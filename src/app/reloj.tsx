"use client";
import * as React from 'react';
const Clock = () => {
    const d = new Date();
    const [currentTime, setCurrentTime] = React.useState('');
    var day="";
    switch (new Date().getDay()) {
        case 0:
          day = "Domingo";
          break;
        case 1:
          day = "Lunes";
          break;
        case 2:
           day = "Martes";
          break;
        case 3:
          day = "Miercoles";
          break;
        case 4:
          day = "Jueves";
          break;
        case 5:
          day = "Viernes";
          break;
        case 6:
          day = "Sabado";
      }
    React.useEffect(() => {
        const date = (d.getHours() < 10 ? '0' : '') + d.getHours()+ ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ':' + d.getSeconds();
        const timer = setInterval(() => {
            setCurrentTime(date);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentTime]);

    return (
        <>
          {currentTime}
          <br />
         < br />
          {day}
        </>
      );
};
export default Clock