import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import axios from 'axios'
import './App.css';
import React from "react";

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
        handleClick()

  }, [])

     const handleClick  = async () => {
      await axios.get('https://api.adviceslip.com/advice')
        .then((result) => {
          setQuote(result.data.slip);
          
          console.log(result.data.slip);
        })
        .catch((error) => {
          
          setQuote(error);
        })
      }
      
    
    
   
  return (
    <div className="main">
      <div className="container">
        <h1>{`Advice#${quote.id}`}</h1>
        <div className="text">
          <p className="description">{quote.advice }</p>
        </div>
        <picture className="picture">
          <img src="https://raw.githubusercontent.com/newton-w/advice-generator/22e8c826143baf25afa600f1968ec15bd87102f1/src/images/pattern-divider-desktop.svg"></img>
        </picture>

        <motion.div className="dice" whileTap={{rotate: 180}} onClick={handleClick} >
          <img src="https://raw.githubusercontent.com/newton-w/advice-generator/22e8c826143baf25afa600f1968ec15bd87102f1/src/images/icon-dice.svg"></img>
        
        </motion.div>

       
      </div>
       <div className="credit">
          <span>Challenge by <a>frontEnd mentor.</a>Coded by <a href="https://www.facebook.com/nho.mattri.98031">Dinh Huy</a></span>
        </div>
    </div>
  );
}

export default App;
