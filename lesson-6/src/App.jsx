import { useEffect, useState } from 'react'
import YutubeCo from './yotubeKomponent'

// import './App.css'

const StyledSection = styled.main`
  
  width: 90%;

  border: solid red;
  margin: 0 auto;
  display: flex;
  column-gap: 30px;
  `;

function App() {

  

return(
  // <main className='main'>
  //   <div className='mainDiv1'>
  //   <iframe className='iframe'
  //    src="https://www.youtube.com/embed/Q0AVb8_lrgQ?si=egqulI4OesFigsvt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

  //  </iframe>
  //   </div>

    
  //     <YutubeCo/>
    
   
  // </main>

  <StyledSection>

     <div className='mainDiv1'>
       <iframe className='iframe'
         src="https://www.youtube.com/embed/Q0AVb8_lrgQ?si=egqulI4OesFigsvt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

       </iframe>
     </div>

    
     <YutubeCo/>
  </StyledSection>
  
)
 
}

export default App
