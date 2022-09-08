import '../../CSS/Home/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <h2>
            <Link to={'/'}>Home</Link>
            </h2>
        </header>
    )


}

export default Header 