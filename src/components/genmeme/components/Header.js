import Trollface from './Trollface.png';
const Header = () => {
return(
    <>
    <header className='head-meme'>
    <img src={Trollface} height={'50px'} alt='Trollface' className="pad"></img> 
    <p>Meme Generator</p>
    </header>
    </>
)
}
export default Header