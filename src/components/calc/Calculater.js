import './Calc.css';
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: '',
      equation: '',
      operator: '',
      display: ''//salution
    }
  }
  change = (e) => {
    function parse(str) {
      return Function(`'use strict'; return (${str})`)()
    }
    console.log(this.state.equation+'e',this.state.number+'n',this.state.operator+'o',this.state.display+'d');
    switch (e.target.value) {
    case '*':(this.state.display === '' && this.state.number==='')?this.setState({ operator: '' }):this.setState({ operator: '*', equation:this.state.display === ''?this.state.equation:this.state.display , number: ''})
    break; 
    case '/':(this.state.display === '' && this.state.number==='')?this.setState({ operator: '' }):this.setState({ operator: '/', equation:this.state.display === ''?this.state.equation:this.state.display , number: ''})
    break; 
    case '+':(this.state.display === '')?this.setState({ operator: '+', number: '' }):this.setState({ operator: '+', equation: this.state.display , number: ''})
    break;
    case '-':(this.state.display === '')?this.setState({ operator: '-', number: '' }):this.setState({ operator: '-', equation: this.state.display , number: ''})
    break;
    case '': this.setState({ operator: '', equation: '', number: '', display: '' })
    break; 
    case '=': if (this.state.number !== '') {
      this.setState({ display: parse(this.state.equation), equation: '', number: this.state.display })
    }
    console.log(this.state.equation+'e',this.state.number+'n',this.state.operator+'o',this.state.display+'d');
    break;
      default: this.setState({ display:'',
      equation:this.state.equation+this.state.operator + e.target.value,
        number: this.state.number + e.target.value,
          operator: ''})
}
 }

render() {
  return (
    <>
      <div className="calc-container">
        <div className="calc-screen change">{this.state.equation}{this.state.operator}</div>
        <div className="calc-screen sub">{this.state.number}{this.state.display}</div>
        <div><button onClick={(e) => this.change(e)} value='' className='calc-button white longer'>AC</button><button onClick={(e) => this.change(e)} value='/' className='calc-button orange'>/</button><button onClick={(e) => this.change(e)} value="*" className='calc-button orange'>*</button></div>
        <div><button onClick={(e) => this.change(e)} value='7' className='calc-button grey'>7</button><button onClick={(e) => this.change(e)} value='8' className='calc-button grey'>8</button><button onClick={(e) => this.change(e)} value='9' className='calc-button grey'>9</button><button onClick={(e) => this.change(e)} value='-' className='calc-button orange'>-</button></div>
        <div><button onClick={(e) => this.change(e)} value='4' className='calc-button grey'>4</button><button onClick={(e) => this.change(e)} value='5' className='calc-button grey'>5</button><button onClick={(e) => this.change(e)} value='6' className='calc-button grey'>6</button><button onClick={(e) => this.change(e)} value='+' className='calc-button orange'>+</button></div>
        <div><button onClick={(e) => this.change(e)} value='1' className='calc-button grey'>1</button><button onClick={(e) => this.change(e)} value='2' className='calc-button grey'>2</button><button onClick={(e) => this.change(e)} value='3' className='calc-button grey'>3</button><button onClick={(e) => this.change(e)} value='=' className='calc-button orange higher'>=</button></div>
        <div><button onClick={(e) => this.change(e)} value='0' className='calc-button grey'>0</button><button onClick={(e) => this.change(e)} value='.' className='calc-button grey longer'>.</button></div>
      </div>
    </>
  )
}
}

export default App;