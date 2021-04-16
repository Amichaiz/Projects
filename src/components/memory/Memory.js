import './memory.css';
import React from 'react'
import { data } from './data'
import Nav from './components/Nav'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      all: data,
      score: 0,
      tscore: 0,
      order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }
  }
  mix = (e) => {
    for (let i = 0; i < 12; i++) {
      if (e.target.alt === this.state.all[i].name) {
        if (this.state.all[i].clicked === 'true') {
          console.log("game over");
          this.gameover()
        }
        else {
          this.state.all[i].clicked = 'true'
          this.setState({ score: this.state.score+1 })
        }
      }
      let array = this.state.order
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      this.setState({ order: array })
    }
  }
  gameover = () => {
    if (this.state.tscore < this.state.score) {
        this.setState({ tscore: this.state.score })
    }
    this.setState({ score:0 })
    for (let i = 0; i < 12; i++) {
      this.state.all[i].clicked = 'false'
    }
  }

  render() {
    return (
      <>
        <Nav data={this.state} />
        <div className='funk'>Get points by clicking on an image but don't click on any more than once!</div>
        <div className='papa'>
          {data.map((noy, e) => {
            let item = this.state.all[this.state.order[e]]
            return (
              <div className='card tc' onClick={this.mix} key={e}>
                <img src={item.image} alt={item.name} className='mem-img'/>
                <h5>Name: {item.name}</h5>
                <h5>Occupation: {item.occupation}</h5>
              </div>
            )
          })}
        </div>
      </>
    );
  }
}

export default App;