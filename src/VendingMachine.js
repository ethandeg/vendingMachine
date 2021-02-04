import "./VendingMachine.css"
import {Link} from "react-router-dom"
const VendingMachine = () => {
    return (
        <div className ="vending-machine">
            <img src="https://static.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest/scale-to-width-down/340?cb=20120504161315"></img>
            <div className = "snack-selector">
                {/* <ul>
                    <li>Skittles</li>
                    <li>Hershey's</li>
                    <li>Starbursts</li>
                </ul> */}
                <p><Link to="/skittles">Skittles</Link></p>
                <p><Link to="/hersheys">Heryshey's</Link></p>
                <p><Link to="/starbursts">Starbursts</Link></p>
            </div>
        </div>
    )
}
export default VendingMachine