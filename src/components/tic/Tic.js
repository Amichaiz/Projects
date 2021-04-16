import React from 'react'
import { useState, useEffect } from 'react';
import './tic.css';

const App = () => {
  const [active, setactive] = useState(true)
  const [turn, setTurn] = useState('╳')
  const [mode, setMode] = useState('AI')
  const [board, setboard] = useState(["", "", "", "", "", "", "", "", ""])
  const [tie, settie] = useState(false)
  useEffect(() => {
    gameover()
    win()  
  },[board]);
  const handleClick = (e) => {
    if (active) {
      if ((mode === "AI") && (board[e.target.id]==='') ) {
        let update = [...board] 
        update[e.target.id] = turn
        setboard(update)
        compturn(update)
      }
    }
    if (mode === "I") {
      if ((active) && (board[e.target.id]==='') ){
        let update = [...board] 
        update[e.target.id] = turn
        setboard(update)
        if (turn === "╳") {
          setTurn("◯")
        }
        else setTurn("╳")
      }
    }
  }
  const compturn = (update) => {
    if (active){
    let comp = (turn === '╳') ? "◯" : '╳';
    if (update[4] === '') {
      update[4] = comp
      setboard(update)
    }
      else if(update[0] === update[1] && update[0] !== '' && update[2] === ''){update[2]=comp;setboard(update)} else if(update[0] === update[2] && update[0] !== '' && update[1] === ''){update[1]=comp;setboard(update)} else if(update[2] === update[1] && update[2] !== ''  && update[0] === ''){update[0]=comp;setboard(update)}
      else if(update[3] === update[4] && update[3] !== '' && update[5] === ''){update[5]=comp;setboard(update)} else if(update[3] === update[5] && update[3] !== '' && update[4] === ''){update[4]=comp;setboard(update)} else if(update[5] === update[4] && update[5] !== ''  && update[3] === ''){update[3]=comp;setboard(update)}
      else if(update[6] === update[7] && update[6] !== '' && update[8] === ''){update[8]=comp;setboard(update)} else if(update[6] === update[8] && update[6] !== '' && update[7] === ''){update[7]=comp;setboard(update)} else if(update[8] === update[7] && update[8] !== ''  && update[6] === ''){update[6]=comp;setboard(update)}
      else if(update[0] === update[3] && update[0] !== '' && update[6] === ''){update[6]=comp;setboard(update)} else if(update[0] === update[6] && update[0] !== '' && update[3] === ''){update[3]=comp;setboard(update)} else if(update[6] === update[3] && update[6] !== ''  && update[0] === ''){update[0]=comp;setboard(update)}
      else if(update[1] === update[4] && update[1] !== '' && update[7] === ''){update[7]=comp;setboard(update)} else if(update[1] === update[7] && update[1] !== '' && update[4] === ''){update[4]=comp;setboard(update)} else if(update[7] === update[4] && update[7] !== ''  && update[1] === ''){update[1]=comp;setboard(update)}
      else if(update[2] === update[5] && update[2] !== '' && update[8] === ''){update[8]=comp;setboard(update)} else if(update[2] === update[8] && update[2] !== '' && update[5] === ''){update[5]=comp;setboard(update)} else if(update[8] === update[5] && update[8] !== ''  && update[2] === ''){update[2]=comp;setboard(update)}
      else if(update[0] === update[4] && update[0] !== '' && update[8] === ''){update[8]=comp;setboard(update)} else if(update[0] === update[8] && update[0] !== '' && update[4] === ''){update[4]=comp;setboard(update)} else if(update[8] === update[4] && update[8] !== ''  && update[0] === ''){update[0]=comp;setboard(update)}
      else if(update[6] === update[4] && update[6] !== '' && update[2] === ''){update[2]=comp;setboard(update)} else if(update[6] === update[2] && update[6] !== '' && update[4] === ''){update[4]=comp;setboard(update)} else if(update[2] === update[4] && update[2] !== ''  && update[6] === ''){update[6]=comp;setboard(update)}
      else if(update[1] === update[3] && update[1] !== '' && update[0] === ''){update[0]=comp;setboard(update)} 
      else if(update[8] === ''){update[8] = comp;setboard(update)} else {update[update.indexOf('')]=comp;setboard(update)}
    }
  }
  const reset = () => {
    setboard(["", "", "", "", "", "", "", "", ""])
    setactive(true)
    settie(false)
  }
  const win = () => {
    if (
      (board[0] === board[1] && board[0] === board[2] && board[0] !== '') ||
      (board[3] === board[4] && board[3] === board[5] && board[3] !== '') ||
      (board[6] === board[7] && board[6] === board[8] && board[6] !== '') ||
      (board[0] === board[3] && board[0] === board[6] && board[0] !== '') ||
      (board[1] === board[4] && board[1] === board[7] && board[1] !== '') ||
      (board[2] === board[5] && board[2] === board[8] && board[2] !== '') ||
      (board[0] === board[4] && board[0] === board[8] && board[0] !== '') ||
      (board[6] === board[4] && board[6] === board[2] && board[6] !== '')) {
      setactive(false)
      settie(false)
    }
  }
  const gameover = () => {
    if (board.indexOf('')===-1){
      settie(true)
  }
}
  return (
    <section>
      <h1 className="game--title">React Tic Tac Toe</h1>
      <div><span onClick={() => { setMode('AI'); reset(); }} className={mode==='AI'?'back spany':'spany'}>Versus AI </span> || <span onClick={() => { setMode('I'); reset() }} className={mode==='I'?'back spany':'spany'}> 2 Players </span>||<span className='spany' onClick={() => reset()}> Reset Board</span></div>
      <div className='turn'>{turn}'s turn</div>
      <div className="game--container">
        <div id="0" className="t-cell" onClick={(e) => handleClick(e)}>{board[0]}</div>
        <div id="1" className="t-cell" onClick={(e) => handleClick(e)}>{board[1]}</div>
        <div id="2" className="t-cell" onClick={(e) => handleClick(e)}>{board[2]}</div>
        <div id="3" className="t-cell" onClick={(e) => handleClick(e)}>{board[3]}</div>
        <div id="4" className="t-cell" onClick={(e) => handleClick(e)}>{board[4]}</div>
        <div id="5" className="t-cell" onClick={(e) => handleClick(e)}>{board[5]}</div>
        <div id="6" className="t-cell" onClick={(e) => handleClick(e)}>{board[6]}</div>
        <div id="7" className="t-cell" onClick={(e) => handleClick(e)}>{board[7]}</div>
        <div id="8" className="t-cell" onClick={(e) => handleClick(e)}>{board[8]}</div>
      </div>
      {!active ? <div className='t-alert'>The Winner is {(turn === '╳') ? "◯" : '╳'}</div>:''}
      {tie ? <div className='t-alert'>The Game is tied</div>:''}
    </section>

  )
}
export default App;