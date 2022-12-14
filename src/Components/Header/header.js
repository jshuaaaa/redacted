import '../../CSS/Home/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <h2>
            <Link to={'/'}>Home</Link>
            </h2>
            <div>
            <h2>
            <Link to={'/about'}>About</Link>
            </h2>
            <h2>
            <Link to={'/docs'}>Docs</Link>
            </h2>
        </div>
        </header>
    )


}

export default Header 