import '../../CSS/Home/header.css'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return(
    <header>
            <h2>
            <Link to={'/app'}>Home</Link>
            </h2>
        <div>
            <h2>
            <Link to={'/app/staking'}>Staking</Link>
            </h2>
            <h2>
            <Link to={'/app/lock'}>Lock</Link>
            </h2>
        </div>
    </header>
    )


}

export default AppHeader 