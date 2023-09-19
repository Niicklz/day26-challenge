import React, { useEffect, useRef, useState } from 'react'
import "./styles.css"

export const App = () => {
    const [translate, setTranslate] = useState(0)
   
    
    const [index, setIndex] = useState(1)  
    const windowRef = useRef(window)
    const leftSliderRef = useRef()
    const rightSliderRef = useRef()
    const [size, setSize] = useState(windowRef.current.innerHeight)
 
    const sizeChange = () => {
        leftSliderRef.current.style.transition = "0s"
    rightSliderRef.current.style.transition = "0s"
        const newHeight = windowRef.current.innerHeight;
        setSize(newHeight);
       if (index-1 === 0) return
        setTranslate((index -1)  * newHeight);
    }
 
    
    
  
    const changeImage = () => {
        leftSliderRef.current.style.transition = "1s"
        rightSliderRef.current.style.transition = "1s"
        
      if (index === 4) {
        setTranslate(0);
        
        setIndex(1)
        return
      } 

     
        
      setIndex((index) => index+= 1)
        setTranslate(index * size);
        
        
        
      
    };

    const prevImage = () => {
       
        if (index === 1) {
            setIndex(4);
            setTranslate(3 * size);
        } else {
            setIndex(index - 1);
            setTranslate((index - 2) * size); // Resta 2 en lugar de 1 para retroceder correctamente
        }
    }

  useEffect(() => {
    window.addEventListener("resize", sizeChange)
    

  
    return () => {
        window.removeEventListener("resize", sizeChange)
        leftSliderRef.current.style.transition = "1s"
        rightSliderRef.current.style.transition = "1s"
    }
  }, [index])
  


    
      
  return (
    <div className='container' >
        <ul className="left-slider" ref={leftSliderRef} style={{transform: `translateY(${translate}px)`}}>
            <li className="image1-text">
                <h2 className='title'>Flying Eagle</h2>
                <p className='description'>in the sunset</p>
            </li>
            <li className="image2-text">
            <h2 className='title'>Lonely Castle</h2>
                <p className='description'>in the wilderness</p>
            </li>
            <li className="image3-text">
            <h2 className='title'>Bluuue sky</h2>
                <p className='description'>With it's mountains</p>
            </li>
            <li className="image4-text">
            <h2 className='title'>Nature Flower</h2>
                <p className='description'>All in pink</p>
            </li>
            
            
        </ul>
        <button className="left" onClick={()=> prevImage()}><span class="material-symbols-outlined">
arrow_downward
</span></button>
        <ul className="right-slider" ref={rightSliderRef} style={{transform: `translateY(-${translate}px)`}}>
            <li className="img image1"id='1'></li>
            <li className="img image2"id='2'></li>
            <li className="img image3"id='3'></li>
            <li className="img image4"id='4'></li>
            
        </ul>
        <button className="right" onClick={()=> changeImage()}><span class="material-symbols-outlined">
arrow_upward
</span></button>
    </div>
  )
}
