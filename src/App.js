// I have imported useState - needs to be surrounded by curly boys
import React, {useState} from 'react'

// Is App() considered a component?
function App() {
  const [superhero, setSuperhero] = useState('Spider-Man');
  const mainAvengers = ['Spider-Man ', 'Iron Man ', 'The Hulk ', 'Black Widow ', 'Captain America ', 'Thor ', 'Hawkeye']

  return (
    // <> </> are fragments, which can be thought of like a div or something as only one element tag can be put into the function
    // Using <> </> means you can put loads of element tags in 

    // h1 tag with the first state (superhero) from useState put in so should display Spider-Man when someone goes on the page
    // Then I have buttons with the click event so when the button is clicked it'll do something
    // Upon clicking the button, the user swaps the superhero (Spider-Man) to a different string because of the setSuperhero function 
    // I just added the last one
    <>
      <h1>My favourite superhero (or superheroes): {superhero}!</h1> 
      <button type='button'onClick={() => setSuperhero('Iron Man')}>Iron Man</button>
      <button type='button'onClick={() => setSuperhero('The Hulk')}>The Hulk</button>
      <button type='button'onClick={() => setSuperhero('Black Widow')}>Black Widow</button>
      <button type='button'onClick={() => setSuperhero('Captain America')}>Captain America</button>
      <button type='button'onClick={() => setSuperhero('Thor')}>Thor</button>
      <button type='button'onClick={() => setSuperhero('Hawkeye')}>Hawkeye</button>
      <button type='button'onClick={() => setSuperhero(mainAvengers)}>All of the main Avengers!</button>
    </>
  )
}

// function App() {
//   const [greeting, setGreeting] = useState('Hello world!')


//   const handleClick = () => {
//     console.log('Click')
//   }
//     <>
//     <h1>{greeting}</h1>
//     <button onClick={() => handleClick('John')}>Change Greeting</button>
//     </>
// }

// const handleClick = () => { // ADDED
//   setGreeting('Hello John')
// }

// this is the App() function
// function App() {
//   const [greeting, setGreeting] = useState('Hello world!')





  
  
  
  
  
  
//   // // just a wee variable
//   // const greeting = 'Catch dreams, not nightmares!'
//   // const communityQuote = 'Troy and Abed in the morning!'
//   // return (
//   //   // in the return the variable is placed inside
//   //   // if you want to add JS, you have to put curly boys around it
//   //   <h1>{greeting}</h1>
//   //   // <p>{communityQuote}</p>
//   // )
// }



export default App;
