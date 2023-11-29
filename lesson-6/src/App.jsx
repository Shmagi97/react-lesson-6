import { useEffect, useState } from 'react'
import YutubeCo from './yotubeKomponent'
// import "./App.css"

import styled from 'styled-components'



function App() {

const Ragaca = styled.div`

border: solid red;

`

const StyledComponent = styled.main`


  width: 90%;

 
  margin: 0 auto;
  display: flex;
  column-gap: 30px;


`

const IframeComponent = styled.iframe`

width: 700px;
height: 400px;
border-radius: 4%;

`

const a = 10;

return(
  // <main className='main'>
  <StyledComponent>
       <div style={{ background:  a == 10 ? "red" : "blue" }}>
    <IframeComponent src="https://www.youtube.com/embed/Q0AVb8_lrgQ?si=egqulI4OesFigsvt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen >

    </IframeComponent>
    

   
    </div>

    <YutubeCo/>
  </StyledComponent>
   

    
      
    
   
  // </main>



  
   
  
  
)
 
}

export default App
