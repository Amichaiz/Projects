import React from 'react'
import './weather.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            location: '',
            temperature: '',
            humidity: '',
            condition: '',
            error: ''
        }
    }
    getweather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=e7840ff58dc5927899e1268812185fe2`)
            .then(res => res.json())
            .then(data => {
                this.setState({ location: data.name + ', ' + data.sys.country, temperature: data.main.temp / 4, humidity: data.main.humidity / 2, condition: data.weather[0].main, error: '' });
            })
            .catch(err => {
                this.setState({ error: "Sorry, I dont know of such a City" });
            })
    }

    render() {
        const { location, temperature, humidity, condition, error } = this.state
        return (
            <>
 
    <div className='fullme' style={{ background: "linear-gradient(90deg,#e67e22,#e74c3c)" }}>
                <div className='we-main we-container'>
                    <h1 className='weh1'>Weather Finder</h1>
                    <p className='wep'>Find out temperature, conditions and more...</p>
                    <div className='we-inner'>
                        <input className='weinput' type='text' name='city' placeholder='City...' onChange={(e) => this.setState({ city: e.target.value })} />
                        <input className='weinput' type='text' name='Country' placeholder='Country...' onChange={(e) => this.setState({ country: e.target.value })} />
                        <button className='we-button' onClick={this.getweather}>Get Weather</button>
                        {(error !== '') ? (<div><strong className='we-strong'>{error}</strong></div>) : <></>}
                        {(location !== '') ? (<div>
                            <h4 className='we-h4'><strong className='we-strong'>Location:</strong> {location}</h4>
                            <h4 className='we-h4'><strong className='we-strong'>Temperature:</strong> {temperature.toFixed(2)}°F || {((temperature - 32) * (5 / 9)).toFixed(2)}°C</h4>
                            <h4 className='we-h4'><strong className='we-strong'>Humidity:</strong> {humidity}</h4>
                            <h4 className='we-h4'><strong className='we-strong'>Condition:</strong> {condition}</h4>
                        </div>) : ''
                        }
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default App;