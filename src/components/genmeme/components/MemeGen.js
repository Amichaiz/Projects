import React from 'react';

class MemeGen extends React.Component {
    constructor() {
        super();
        this.state = {
            topT: '',
            botT: '',
            allMemeImgs: [],
            spot: -1,
        }
    }
    componentDidMount() {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => {
                this.setState({ allMemeImgs: data.data.memes });
            })
            .catch(err => {
                console.log(err);
            })
    }
    rnd = () => {
        const num = Math.floor(Math.random() * 100)
        this.setState({ spot: num })
    }
    render() {
        return (
            <>   
            <div className='meme-form'>
                    <input type='text' placeholder='Top Text' onChange={(e) => this.setState({ topT: e.target.value })} />
                    <input type='text' placeholder='Bottom Text' onChange={(e) => this.setState({ botT: e.target.value })} />
                    <button onClick={this.rnd}>Gen</button>
                    </div>
                    <div className='meme'>
                    {this.state.spot !== -1 ?
                    (<><img src={this.state.allMemeImgs[this.state.spot].url} alt={this.state.allMemeImgs[this.state.spot].name} />
                    <h2 className='top'>{this.state.topT}</h2><h2 className='bottom'>{this.state.botT}</h2></>) : ''}
                    </div>           
            </>
        )
    }
}
export default MemeGen