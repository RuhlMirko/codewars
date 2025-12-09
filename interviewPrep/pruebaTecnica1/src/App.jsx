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
      <h1>Cat facts</h1>
      <p>Get a picture of a cute cat that has some facts about them.</p>
      <img src={catImageSrc} alt="" height='500px' />
      <button>Make new image</button>
    </main>
  );
}