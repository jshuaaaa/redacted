import '../../CSS/Home/homebody.css'
import { Link } from 'react-router-dom'

const HomeBody = () => {
    return(
        <div className='homebody'>
            
            <Link to={'/app'}><button className="button-64" role="button"><span class="text">Enter App</span></button></Link>

        </div>
            
        
    )



}

export default HomeBody