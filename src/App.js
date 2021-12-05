
import './App.css';
import { useState } from 'react';
import photo1 from './photo1.jpg' 
import photo2 from './photo2.jpg' 
import photo3 from './photo3.jpg' 
function App() {
  function ClickEventHandler(){
  if(counter<photos.length-1){setCounter(counter+1)}
else{ setCounter(0)}
  } function ClickEventHandler1(){
    if(counter>0){setCounter(counter-1)}
  else{ setCounter(photos.length-1)}

    }
  const [counter, setCounter] = useState(0)
  const photos=[photo1,photo2,photo3]
  
  return (
    <div className="App">
      <button  className='left' onClick={()=>{ClickEventHandler()}}>←</button>
      <img src={photos[counter]}/>
      <button  className='right' onClick={()=>{ClickEventHandler1()}} >→</button>
    </div>
  );
}

export default App;
