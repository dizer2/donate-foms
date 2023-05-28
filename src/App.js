import React, { useState } from 'react';
import "./style/style.css";
import Popup from './commponent/popup';

function App() {

  const [isVisible, setIsVisible] = useState(true);



  return (
    <div className="App">
   {isVisible &&
       <Popup 
          setIsVisible={setIsVisible} 
          title="Support Armed Forces of span Ukraine"
      />
   }
   
      
    </div>
  );
}

export default App;
