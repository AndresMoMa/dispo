"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    if (password=="Operador20249")
      {
        console.log("nose")
        router.push('/')
      }
      else
      {
        alert("Contraseña incorrecta")
      }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2 style={{ fontSize:30,   color: 'red',fontFamily:"Sanchez"}}>Login</h2>
  
        <label style={{ fontSize:17,   color: 'black',fontFamily:"Sanchez"}} htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          
        />
        <button className="custom-button">Iniciar</button>
      </form>
    </div>
  );
}
