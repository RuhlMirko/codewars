import React from 'react';
export default function App() {
  const [catImageSrc, setCatImageSrc] = React.useState('')
  
  React.useEffect(()=>{
    fetch('https://catfact.ninja/fact?max_length=80')
      .then(res=>res.json())      
      .then(data=>`https://cataas.com/cat/says/${data.fact}`)
        .then(url=>setCatImageSrc(url))
  }, []) 

  return (
    <main>
      <h1>Cat facts</h1>
      <p>Get a picture of a cute cat that has some facts about them.</p>
      <img src={catImageSrc} alt="Image of a cat with a caption" height='500px' />
      <br />
      <button>Make new image</button>
    </main>
  );
}