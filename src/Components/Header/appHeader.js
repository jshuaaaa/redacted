import '../../CSS/Home/header.css'
import { Link } from 'react-router-dom'
import metamask from '../../images/metaicon.png'
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../wallet/Connect";
import web3 from "web3";

const AppHeader = () => {
    const { active, account, library, activate,deactivate } = useWeb3React()
    async function connect() {
        try {
          await activate(injected);
        } catch (ex) {
          console.log(ex)
        }
      }
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
            <img src={metamask} style={{cursor:'pointer'}} onClick={connect}/>
        </div>
    </header>
    )


}

export default AppHeader 