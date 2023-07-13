import React from 'react';
import Navbar from './components/Navbar';

const App2 = () => {
  return (<>
    <Navbar title={"Details"} />
    <div id='imgdiv'>
        <img id='img' src="https://www.hinduwallpaper.com/uploads/280620210634471bld.jpg" alt="image not available, sorry for inconvenience, but please hire me"  />
    </div>
    <div id="info">
      <br/>Title: Hanuman
      <br/>Release Date:13 July, 2023
      <br/>Runtime: Big
      <br/>Genre: Don't know
      <br/>Cast:Not available
      <br/>Director: D.J
      <br/>IMDB rating: 5/5
    </div>
    </>
  )
}

export default App2
// the link starts here