import React, { useState } from 'react'
import "./Bulb.css"
const Bulb = () => {
  const [colors, updateColors] = useState([
    "white","#faf7d2", "#fcf8bb", "#fcf597", "#f5ec82", "#f7ec65", "#fcea03"]);

  const [style,changeStyle]=useState({
    width:"300px",
    height:"300px",
    backgroundColor:"whitesmoke",
    borderRadius: "50%",
    boxShadow:"0px 0px 800px white"
  })  
  const [index, updateIndex] = useState(0);
 

  function decrease() {
    // console.log(index)
    if (index === 0 || index<=6) {
      
      let newcolor={backgroundColor:colors[index]}
      let newBoxShadow={boxShadow:"0px 0px 400px "+colors[index]}
      changeStyle({...style,...newcolor,...newBoxShadow});
      if(index===0)
      {
        updateIndex(0)
      }
      else{
        updateIndex(index-1)
      }
    }
    
  }
  function increase() {
    if (index <=6) {
      
      // console.log(index)
      let newcolor={backgroundColor:colors[index]}
      let newBoxShadow={boxShadow:"0px 0px 400px "+colors[index]}
      changeStyle({...style,...newcolor,...newBoxShadow});
      if(index===6)
        updateIndex(6)
      else{
        updateIndex(index+1)
      }
     
    }
  

  }
  
  return (
    <>
      <div className='switch'>
        <div className="dec" onClick={decrease}>-</div>
        <div className="inc" onClick={increase}>+</div>
      </div>
      <div className="bulb" >

        <div className="bulb-head" style={style}></div>
        <div className="bulb-bottom">
          <div className="thread"></div>
          <div className="thread"></div>
          <div className="thread"></div>
          <div className="thread"></div>
          <div className="thread"></div>
          <div className="thread"></div>
        </div>
        <div className="electric-pin"></div>
      </div>
    </>
  )
}

export default Bulb;