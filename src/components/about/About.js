import React from 'react';
import './about.css'

const App = () => {

    return (
        <>
        <h2 className='tc'>Amichai Berger</h2>
        <span className='contact'>
            <p className='aboutp'>Most of the projects in the NavBar where created during my course in Developers Institute, All of them were created in React. Hope you enjoy.</p>
        <p className='aboutp'><a href="mailto:amichaiberger14@gmail.com">Send email</a></p>
        <p className='aboutp'><a href="tel:+972543989385">Text me</a></p>
        <p className='aboutp'><a href="https://amichaiz.github.io/" target="_blank" rel='noreferrer'>Bio</a></p>
        </span>
        <p className='aboutp'>Other Projects include:</p>
        <p className='aboutp'><a href="https://amichaiz.github.io/currency/" target="_blank" rel='noreferrer'>Currency Converter</a> Using an API and simple Math conditions to convert Money by current rates.</p>
        <p className='aboutp'><a href="https://amichaiz.github.io/snake/" target="_blank" rel='noreferrer'>Snake Game</a> Build during my first Hackathon in Developers Institute.</p>
        <p className='aboutp'><a href="https://boat-prime.herokuapp.com/" target="_blank" rel='noreferrer'>Boat Prime</a> Final Project in Developers Institute. Created a basic platform for selling/purchasing boats. Includes- npm server, database created in React</p>
        </>
    )
}
export default App