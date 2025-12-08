import React from 'react';
export default function App() {
  const [catImageSrc, setCatImageSrc] = React.useState('')

  React.useEffect(()=>{
    fetch('https://catfact.ninja/fact?max_length=80')
      .then(res=>res.json())      
      .then(data=>`https://cataas.com/cat/says/${data.fact}?fit=crop&width=500&height=500`)
        .then(url=>setCatImageSrc(url))
  },[])


  return (
    <main>
      <h1>Hello Vite + React!</h1>
      <p>Start editing to see some magic happen</p>
      <img src={catImageSrc} alt="" height='500px' />
    </main>
  );
}