import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light border-bottom ">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">PROJECTS</Link>

          <div className="navbar-collapse navbar-expand" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to='/' className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/calculater' className="nav-link">Calculator</Link>
              </li>
              <li className="nav-item">
                <Link to='/genquates' className="nav-link">Quate Generater</Link>
              </li>
              <li className="nav-item">
                <Link to='/maps' className="nav-link">Maps</Link>
              </li>
              <li className="nav-item">
                <Link to='/genmeme' className="nav-link">Meme Generater</Link>
              </li>
              <li className="nav-item">
                <Link to='/bookssearch' className="nav-link">Book Search</Link>
              </li>
              <li className="nav-item">
                <Link to='/tic_tac_toe' className="nav-link">Tic Tac Toe</Link>
              </li>
              <li className="nav-item">
                <Link to='/weather' className="nav-link">Weather</Link>
              </li>
              <li className="nav-item">
                <Link to='/memory' className="nav-link">Memory</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
