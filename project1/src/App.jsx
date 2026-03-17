import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1>hello</h1>
    {genrateParagraphs()}
    </>
  )
}

function Paragraph(i){
  return(
  <>
  <h2>Paragraph {String(i)}</h2><br />
  <hr />
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
  </p>
  </>
  )
}

function genrateParagraphs(){
    const n = 5;
    const p = [];
    for (let i = 1; i <= n; i++) {
      p.push(<Paragraph key={i} i={i} />);
  }
  return p;
}

export default App
